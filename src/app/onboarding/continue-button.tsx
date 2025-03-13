import { ChildrenProps } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Button, ButtonProps } from '@/components/ui/button'
import { ArrowRightIcon, LoaderCircleIcon } from 'lucide-react'

export type ContinueButtonProps = {
  enabled?: boolean
  loading?: boolean
} & ButtonProps

export const ContinueButton = React.forwardRef<HTMLButtonElement, ContinueButtonProps>(
  (props, ref) => {
    const state = props.enabled ? 'enabled' : props.loading ? 'loading' : 'disabled'
    return (
      <Button className="gap-0" disabled={!props.enabled} onClick={props.onClick} ref={ref}>
        <p>{props.children}</p>{' '}
        <AnimatePresence>
          <motion.div
            initial={{ width: 0, opacity: 0, scale: 2 }}
            animate={{ width: 'auto', opacity: 1, scale: 1 }}
            exit={{ width: 0, opacity: 0, scale: 2 }}
            key={state}
          >
            {props.enabled && <ArrowRightIcon key="enabled" className="ml-2" />}
            {props.loading && <LoaderCircleIcon key="loading" className="ml-2 animate-spin" />}
          </motion.div>
        </AnimatePresence>
      </Button>
    )
  },
)
