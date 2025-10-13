import * as React from 'react';

import { type VariantProps } from 'class-variance-authority';

import { Button as ShadButton, buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <ShadButton
        ref={ref}
        className={cn('cursor-pointer', className)}
        variant={variant}
        size={size}
        asChild={asChild}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
