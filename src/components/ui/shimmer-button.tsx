import * as React from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    if (asChild) {
      // Render children as the actual element (pl. <a>), átadva az összes propot
      return React.cloneElement(children as React.ReactElement, {
        ref,
        className: cn(
          "relative overflow-hidden rounded-full px-6 py-2 font-semibold text-black bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 shadow-gold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2",
          "before:absolute before:inset-0 before:-z-10 before:animate-shimmer before:bg-gradient-to-r before:from-yellow-200 before:via-yellow-100 before:to-yellow-300 before:opacity-0 hover:before:opacity-100",
          (children as React.ReactElement).props.className,
          className
        ),
        ...props
      });
    }
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-full px-6 py-2 font-semibold text-black bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 shadow-gold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2",
          "before:absolute before:inset-0 before:-z-10 before:animate-shimmer before:bg-gradient-to-r before:from-yellow-200 before:via-yellow-100 before:to-yellow-300 before:opacity-0 hover:before:opacity-100",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
ShimmerButton.displayName = "ShimmerButton"; 