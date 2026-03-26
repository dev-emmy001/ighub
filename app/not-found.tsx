"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Zap, ArrowUpRight, ArrowLeft, Home, BookOpen, Building2, GraduationCap, Users } from "lucide-react";
import { Typography } from "./components/ui/typography";
import { Button } from "./components/ui/button";
import { Minititle } from "./components/minititle";

const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const quickLinks = [
    { label: "Services", href: "/services", icon: Building2 },
    { label: "Tech Academy", href: "/academy", icon: GraduationCap },
    { label: "Kids Code Camp", href: "/kids-camp", icon: BookOpen },
    { label: "Community", href: "/community", icon: Users },
];

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            {/* ── main content ── */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-8">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 min-h-[75vh]"
                >

                    {/* ── left — purple card (matches hero) ── */}
                    <motion.div
                        variants={fadeUp}
                        className="bg-brand-purple rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden"
                    >
                        {/* subtle glow */}
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

                        {/* top label */}
                        <div className="flex items-center gap-2 text-brand-green mb-10 md:mb-12">
                            <span className="font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
                                Error 404
                            </span>
                        </div>

                        {/* big 404 display */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="mb-6 md:mb-8">
                                <span
                                    className="block font-bold text-white/10 leading-none select-none"
                                    style={{ fontSize: "clamp(120px, 20vw, 220px)", letterSpacing: "-6px" }}
                                >
                                    404
                                </span>
                            </div>

                            <Typography
                                variant="h2"
                                className="text-white leading-[1.08] mb-4"
                            >
                                Page not found.
                            </Typography>

                            <Typography
                                variant="body"
                                className="text-white/60 text-base md:text-lg leading-relaxed max-w-md mb-10 md:mb-12"
                            >
                                The page you're looking for doesn't exist. it may have moved, been renamed, or never existed at all.
                            </Typography>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/">
                                    <Button variant="secondary" className="w-full sm:w-auto rounded-xl text-white px-8 py-5 inline-flex items-center gap-2">
                                        Go home
                                    </Button>
                                </Link>
                                <Button
                                    variant="outline"
                                    onClick={() => window.history.back()}
                                    className="w-full sm:w-fit border-white/20 text-white hover:bg-white/10 rounded-xl px-8 py-5 inline-flex items-center gap-2"
                                >Go back
                                </Button>
                            </div>
                        </div>

                        {/* bottom stat strip — mirrors hero */}
                        <div className="grid grid-cols-3 gap-4 pt-8 md:pt-10 mt-10 md:mt-0">
                            <div>
                                <Typography variant="h5" weight="bold" className="text-white md:text-2xl">5,000+</Typography>
                                <Typography variant="caption" className="text-white/40 block mt-1 text-[9px] md:text-xs">Innovators trained</Typography>
                            </div>
                            <div>
                                <Typography variant="h5" weight="bold" className="text-white md:text-2xl">12+</Typography>
                                <Typography variant="caption" className="text-white/40 block mt-1 text-[9px] md:text-xs">Startups launched</Typography>
                            </div>
                            <div>
                                <Typography variant="h5" weight="bold" className="text-white md:text-2xl">8k+</Typography>
                                <Typography variant="caption" className="text-white/40 block mt-1 text-[9px] md:text-xs">Community</Typography>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </main >
    );
}