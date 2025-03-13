'use client'

import { ChildrenProps } from '@/lib/types'
import { useOnboardingContext } from '@/app/onboarding/context'
import { useEffect } from 'react'

export default function Layout({ children }: ChildrenProps) {
  const context = useOnboardingContext()
  useEffect(() => {
    context.setDisplayRippleBackground(true)
  }, [])
  return <>{children}</>
}
