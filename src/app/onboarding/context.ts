import React from 'react';

/**
 * @package
 */
export type OnboardingContext = {
  displayRippleBackground: boolean;
  setDisplayRippleBackground: (v: boolean) => void;
};

/**
 * @package
 */
export const OnboardingContext = React.createContext<OnboardingContext>({
  displayRippleBackground: false,
  setDisplayRippleBackground() {},
});

/**
 * @package
 */
export function useOnboardingContext() {
  return React.useContext(OnboardingContext);
}
