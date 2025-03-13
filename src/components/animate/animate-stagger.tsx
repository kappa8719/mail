import { HTMLMotionProps, motion, Variants } from 'framer-motion';
import React from 'react';
import { deepmerge } from 'deepmerge-ts';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
  },
};

export const AnimateStagger = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'>
>((props, ref) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        staggerChildren: 0.5,
      }}
      {...props}
      variants={deepmerge(containerVariants, props.variants)}
      ref={ref}
    >
      {props.children}
    </motion.div>
  );
});
AnimateStagger.displayName = 'AnimateStagger';

export const AnimateStaggerItem = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<'div'>
>((props, ref) => {
  return (
    <motion.div
      transition={{
        duration: 0.75,
        ease: [0.25, 1, 0.5, 1],
        type: 'tween',
      }}
      {...props}
      variants={deepmerge(itemVariants, props.variants)}
      ref={ref}
    />
  );
});
AnimateStaggerItem.displayName = 'AnimateStaggerItem';
