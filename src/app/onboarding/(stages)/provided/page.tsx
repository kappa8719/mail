'use client'

import { AnimateStagger, AnimateStaggerItem } from '@/components/animate/animate-stagger'
import { StageHeader } from '@/app/onboarding/(stages)/header'
import { Input } from '@/components/ui/input'
import { ContinueButton } from '@/app/onboarding/continue-button'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Page() {
  const [address, setAddress] = useState<string>('')

  function validate() {
    return address.length >= 6 && address.length <= 30
  }

  return (
    <motion.div
      key="onboarding-stage/entropi_smtp"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      className="flex flex-col gap-2"
    >
      <AnimateStagger className="flex flex-col gap-2">
        <StageHeader>주소 생성</StageHeader>
        <AnimateStaggerItem className="flex justify-center duration-500 ease-out sm:text-2xl">
          posts.kr에 메일 주소를 생성
        </AnimateStaggerItem>
        <AnimateStaggerItem>
          <div className="flex">
            <Input
              className="bg-foreground/10"
              value={address}
              onValueChange={(v) =>
                setAddress(
                  v
                    .replace(/[^a-zA-Z0-9.+\-_~?]/g, '')
                    .substring(0, 30)
                    .toLowerCase(),
                )
              }
              spellCheck={false}
            />
            <div className="items-center flex px-2 border-input rounded">@posts.kr</div>
          </div>
        </AnimateStaggerItem>
        <AnimateStaggerItem className="flex w-full justify-end">
          <ContinueButton onClick={() => alert('AsDf')} enabled={validate()}>
            계속
          </ContinueButton>
        </AnimateStaggerItem>
      </AnimateStagger>
    </motion.div>
  )
}
