"use client";

import { useState } from "react";
import { Typography } from "./ui/typography";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
    ];

    const programCourses = [
        "Frontend Development",
        "Data Analysis",
        "UI/UX Design",
        "Backend Engineering",
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-8 pointer-events-none">
            <div className="max-w-[1400px] mx-auto pointer-events-auto">
                <div className="bg-brand-purple/90 backdrop-blur-xl border border-white/10 rounded-[2rem] px-6 md:px-10 py-4 flex items-center justify-between shadow-2xl">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/images/igwhitelogo.png" className="w-30" alt="" />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white/70 hover:text-brand-green transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Dropdown "For You" */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-white/70 hover:text-brand-green transition-colors text-sm font-medium">
                                For You <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 mt-4 w-64 bg-brand-purple border border-white/10 rounded-3xl p-6 shadow-2xl"
                                    >
                                        <Typography variant="caption" className="text-brand-green font-bold mb-4 block">PROGRAM COURSES</Typography>
                                        <ul className="space-y-4">
                                            {programCourses.map((course) => (
                                                <li key={course}>
                                                    <a href="#" className="text-white/70 hover:text-brand-orange text-sm transition-colors flex justify-between items-center group">
                                                        {course} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:block bg-brand-green text-brand-purple px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-orange hover:text-white transition-all shadow-lg">
                            Contact Us
                        </button>
                        <button
                            className="lg:hidden text-white p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed inset-0 bg-brand-purple z-[60] flex flex-col p-10 lg:hidden"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <Typography variant="h5" className="text-white">IGHub<span className="text-brand-green">.</span></Typography>
                            <button onClick={() => setIsOpen(false)} className="text-white"><X className="w-8 h-8" /></button>
                        </div>

                        <div className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-4xl font-heading text-white font-bold hover:text-brand-green transition-colors">
                                    {link.name}
                                </a>
                            ))}
                            <div className="border-t border-white/10 pt-8 mt-4">
                                <Typography variant="caption" className="text-brand-green block mb-4">PROGRAMS</Typography>
                                <div className="grid grid-cols-1 gap-4">
                                    {programCourses.map(course => (
                                        <a key={course} className="text-white/60 text-lg">{course}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};