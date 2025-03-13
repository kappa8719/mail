'use client';

import { useOnboardingContext } from '@/app/(app)/onboarding/context';
import { useRouter } from 'next-nprogress-bar';
import { useEffect } from 'react';
import { useDrift, useDriftUser } from '@/core/api/drift/context';

export default function Page() {
  const router = useRouter();
  const context = useOnboardingContext();
  context.setDisplayRippleBackground(false);

  const drift = useDrift();

  useEffect(() => {
    drift.revalidateUser();
    setTimeout(() => {
      router.push('/');
    }, 500);
  });

  return <></>;
}
