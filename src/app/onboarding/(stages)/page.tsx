'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimateStagger, AnimateStaggerItem } from '@/components/animate/animate-stagger'
import { Button } from '@/components/ui/button'
import { LucideArrowRight, MailIcon } from 'lucide-react'
import { StageHeader } from '@/app/onboarding/(stages)/header'
import { useRouter } from 'next/navigation'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export default function Page() {
  const router = useRouter()
  const [canContinue, setCanContinue] = useState(false)
  const [smtp, setSMTP] = useState(
    typeof sessionStorage !== 'undefined' ? (sessionStorage.getItem('onboarding/smtp') ?? '') : '',
  )

  useEffect(() => {
    sessionStorage.setItem('onboarding/smtp', smtp)
    setCanContinue(true)
  }, [smtp])

  return (
    <motion.div
      key="onboarding-stage/initial"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      className="flex flex-col gap-2"
    >
      <AnimateStagger className="flex flex-col gap-2">
        <StageHeader>메일 설정</StageHeader>
        <AnimateStaggerItem className="flex justify-center duration-500 ease-out sm:text-2xl">
          SMTP 선택
        </AnimateStaggerItem>
        <AnimateStaggerItem>
          <RadioGroup
            value={smtp || ''}
            onValueChange={(value) => setSMTP(value)}
            className="grid grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem value="our" id="our" className="peer sr-only" />
              <Button
                asChild
                className="flex flex-col size-full items-center justify-between rounded-md border-2 border-white border-opacity-30 bg-background bg-opacity-20 p-4 hover:bg-opacity-30 peer-data-[state=checked]:border-opacity-100 [&:has([data-state=checked])]:border-opacity-100"
              >
                <Label htmlFor="our">
                  <MailIcon className="mb-3 h-6 w-6" />
                  <span>posts.kr 주소 사용</span>
                </Label>
              </Button>
            </div>
            <div>
              <RadioGroupItem value="external" id="external" className="peer sr-only" />
              <Button
                asChild
                className="flex flex-col size-full items-center justify-between rounded-md border-2 border-white border-opacity-30 bg-background bg-opacity-20 p-4 hover:bg-opacity-30 peer-data-[state=checked]:border-opacity-100 [&:has([data-state=checked])]:border-opacity-100"
              >
                <Label htmlFor="external">
                  <MailIcon className="mb-3 h-6 w-6" />
                  <span>외부 SMTP 사용</span>
                </Label>
              </Button>
            </div>
          </RadioGroup>
        </AnimateStaggerItem>
        <AnimateStaggerItem className="flex w-full justify-end">
          <Button
            disabled={!canContinue}
            onClick={() =>
              router.push(smtp == 'our' ? '/onboarding/provided' : '/onboarding/external_smtp')
            }
          >
            <p>{smtp == 'our' ? '메일 주소 생성' : 'SMTP 연결'}</p>
            <LucideArrowRight className="ml-2" />
          </Button>
        </AnimateStaggerItem>
      </AnimateStagger>
    </motion.div>
  )
}
