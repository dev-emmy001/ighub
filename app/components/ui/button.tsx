"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge tailwind classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export const Button = ({
    children,
    variant = "primary",
    size = "md",
    className,
    onClick,
    type = "button",
}: ButtonProps) => {

    // Base styles: All buttons are rounded-full for that modern tech look
    const baseStyles = "relative inline-flex items-center justify-center font-body transition-all duration-300 overflow-hidden rounded-md active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-brand-purple text-white hover:bg-brand-purple/90 shadow-[0_10px_20px_-10px_rgba(39,40,110,0.5)]",
        secondary: "bg-brand-green text-white hover:bg-brand-orange/90 shadow-[0_10px_20px_-10px_rgba(137,190,43,0.4)]",
        accent: "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-[0_10px_20px_-10px_rgba(249,115,22,0.4)]",
        outline: "border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white bg-transparent",
        ghost: "text-brand-purple hover:bg-brand-purple/5 bg-transparent",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-8 py-3.5 text-sm",
        lg: "px-10 py-4 text-base",
        xl: "px-12 py-5 text-lg",
    };

    return (
        <motion.button
            type={type}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={onClick}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
            <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full md:hover:animate-[shimmer_1.5s_infinite] transition-transform" />
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};