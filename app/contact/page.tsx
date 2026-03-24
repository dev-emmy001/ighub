"use client";

import { Typography } from "../components/ui/typography";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { Zap, Plus, Minus, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(0);

    const faqs = [
        {
            q: "What programs does IGHub offer for beginners?",
            a: "We offer comprehensive bootcamps in Frontend Development, UI/UX Design, and Data Analysis specifically tailored for those starting their tech journey.",
        },
        {
            q: "How can my startup join the Venture Studio?",
            a: "We review applications on a rolling basis. We look for engineering-first founders building digital infrastructure for the African market.",
        },
    ];

    return (
        <main className="min-h-screen bg-white p-3 md:p-6 lg:p-8 pt-28 md:pt-40">
            <div className="max-w-[1400px] mx-auto">

                {/* SECTION 1: RESPONSIVE CONTACT CARD */}
                <section className="bg-brand-purple rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl mb-12 lg:mb-24">

                    {/* Left Side: Information */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                        <div className="relative z-10">
                            <Typography variant="h2" className="text-white leading-[1.1] mb-8 text-3xl md:text-5xl" weight="normal">
                                Kickstart mission <br className="hidden md:block" />
                                by connecting <br className="hidden md:block" />
                                with team
                            </Typography>

                            <div className="space-y-8">
                                <div className="flex gap-4 items-start">
                                    <Zap className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                                    <div>
                                        <Typography variant="caption" className="text-brand-green font-bold block mb-1 tracking-widest">CONNECT NOW</Typography>
                                        <Typography variant="body" className="text-white/80 text-sm md:text-base">hello@ighub.ng</Typography>
                                        <Typography variant="body" className="text-white/80 text-sm md:text-base">+234 812 345 6789</Typography>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <Zap className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                                    <div>
                                        <Typography variant="caption" className="text-brand-green font-bold block mb-1 tracking-widest">VISIT US</Typography>
                                        <Typography variant="body" className="text-white/80 text-sm md:text-base">
                                            IGHub Innovation Park, <br />
                                            Aba-Owerri Road, Aba, Nigeria.
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-12 bg-white/5 backdrop-blur-sm">
                        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-xl">
                            <Typography variant="h4" className="text-brand-purple mb-8" weight="normal">Get a quote</Typography>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" placeholder="First name" className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl py-3 px-5 text-sm outline-none focus:border-brand-purple/20" />
                                    <input type="text" placeholder="Last name" className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl py-3 px-5 text-sm outline-none focus:border-brand-purple/20" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl py-3 px-5 text-sm outline-none focus:border-brand-purple/20" />
                                    <input type="email" placeholder="example@email.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl py-3 px-5 text-sm outline-none focus:border-brand-purple/20" />
                                </div>
                                <textarea rows={4} placeholder="Type your message here..." className="w-full bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl py-3 px-5 text-sm outline-none focus:border-brand-purple/20 resize-none" />

                                <Button variant="secondary" className="w-full py-4">
                                    Submit now
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: FAQ - Super Responsive Grid */}
                <section className="py-12 md:py-20">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 text-brand-green mb-4">
                            <Zap className="w-4 h-4 fill-current" />
                            <Typography variant="caption" className="font-bold tracking-widest uppercase">FAQ</Typography>
                        </div>
                        <Typography variant="h2" className="text-brand-purple text-3xl md:text-5xl" weight="normal">
                            Find answers to <br /> common queries
                        </Typography>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Image Card */}
                        <div className="lg:col-span-5 relative rounded-[2.5rem] overflow-hidden min-h-[350px] md:min-h-[500px]">
                            <img src="/images/heroimage.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Support" />
                            <div className="absolute bottom-6 left-6 right-6 bg-brand-purple/60 backdrop-blur-md p-5 rounded-3xl border border-white/10 flex items-center gap-4">
                                <div className="bg-brand-green p-3 rounded-2xl">
                                    <Phone className="text-brand-purple w-5 h-5" />
                                </div>
                                <div>
                                    <Typography variant="caption" className="text-white/60 block text-[10px]">STILL HAVE QUESTIONS?</Typography>
                                    <Typography variant="h6" className="text-white text-sm md:text-base" weight="normal">+234 812 345 6789</Typography>
                                </div>
                            </div>
                        </div>

                        {/* Right Accordion */}
                        <div className="lg:col-span-7 space-y-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-slate-100 bg-white"
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                >
                                    <div className="flex justify-between items-center gap-4 cursor-pointer">
                                        <Typography variant="h6" className="text-brand-purple font-bold text-sm md:text-base">{faq.q}</Typography>
                                        {activeFaq === index ? <Minus className="w-5 h-5 text-slate-400" /> : <Plus className="w-5 h-5 text-slate-400" />}
                                    </div>
                                    {activeFaq === index && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pt-4">
                                            <Typography variant="body" className="text-slate-500 text-sm leading-relaxed">
                                                {faq.a}
                                            </Typography>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}