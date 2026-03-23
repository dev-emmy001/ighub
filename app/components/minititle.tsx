import { ReactNode } from "react";
import { Typography } from "./ui/typography";
import { Zap } from "lucide-react";
interface MinititleProps {
    children: ReactNode;
}
export const Minititle = ({
    children,
}: MinititleProps) => {

    return (
        <div className="flex justify-center gap-2 text-brand-green mb-8 md:mb-12">
            <Zap className="w-4 h-4" />
            <Typography variant="caption" className="font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
                {children}
            </Typography>
        </div>

    );
}