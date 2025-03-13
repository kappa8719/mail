import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import { cn } from '@/lib/utils';

/**
 * @package
 */
export const StageHeader = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'>
>((props, ref) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {
          scale: 0.9,
          opacity: 0,
          filter: 'blur(0.125rem)',
        },
        visible: {
          scale: 1,
          opacity: 1,
          filter: 'blur(0rem)',
        },
      }}
      transition={{
        delay: 0.0,
        duration: 0.75,
      }}
      {...props}
      ref={ref}
      className={cn(
        'text-3xl text-center font-semibold transition-[font-size] duration-500 ease-out sm:text-5xl',
        props.className,
      )}
    >
      {props.children}
    </motion.div>
  );
});

StageHeader.displayName = 'StageHeader';
