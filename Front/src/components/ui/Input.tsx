import { VariantProps, cva } from "class-variance-authority";
import { InputHTMLAttributes, Ref, forwardRef } from "react";
import { cn } from "../../lib/utils";

const inputVariants = cva(
  "border-[1px] border-gray-300",
  {
    variants: {
      variant: {
        default: "text-white shadow-lg rounded-lg px-3 py-3 text-md w-full bg-transparent",
        danger: "border-[1px] border-red-300 text-black rounded-lg px-3 py-3 text-md w-full bg-white",
        outline: "text-black shadow-lg rounded-lg px-3 py-3 text-md w-full bg-white",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface IProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  type: "text" | "number" | "email" | "password";
}

const Input = forwardRef(({ variant,type, fullWidth, className, ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
  return <input ref={ref} type={type} className={cn(inputVariants({ variant, fullWidth, className }))} {...rest} />;
});

export default Input;
