'use client'

import { ChildrenProps } from '@/lib/types'
import Ripple from '@/components/ui/magic/ripple'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { OnboardingContext } from '@/app/onboarding/context'
import { FrozenRouter } from '@/components/router/frozen-router'

export default function Layout({ children }: ChildrenProps) {
  const pathname = usePathname()
  const [displayRippleBackground, setDisplayRippleBackground] = useState(false)

  return (
    <OnboardingContext.Provider
      value={{
        displayRippleBackground,
        setDisplayRippleBackground,
      }}
    >
      <AnimatePresence>
        <motion.div
          className="fixed z-50 flex h-dvh w-dvw items-center justify-center bg-background/60 backdrop-blur"
          initial="hidden"
          animate={displayRippleBackground ? 'visible' : 'hidden'}
          exit="hidden"
          transition={{
            type: 'tween',
            ease: 'easeOut',
            duration: 0.5,
          }}
          variants={{
            hidden: { scale: 1.25, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          }}
        >
          <Ripple
            mainCircleSize={500}
            mainCircleOpacity={0.2}
            className="pointer-events-none fixed"
          />
          <AnimatePresence>
            <motion.div key={pathname} className="absolute">
              <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </OnboardingContext.Provider>
  )
}
