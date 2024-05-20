import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps 
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {} 

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return(
        <button
            className={cn(
                `
                w-auto
                rounded-full
                bg-black
                border-transpatrent
                px-5
                py-3
                disabled:opacity-50
                disabled:cursor-not-allowed
                text-white
                font-semibold
                hover:opacity-75
                transition
                `,
                className
            )}
            ref={ref}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;