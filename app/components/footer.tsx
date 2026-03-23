import { Typography } from "./ui/typography";
import { Twitter, Instagram, Facebook, ArrowUpRight, Send } from "lucide-react";

export const Footer = () => {
    const sections = [
        {
            title: "Platform",
            links: ["Home", "About Us", "Programs", "Startup School", "DYB By IGHub"],
        },
        {
            title: "Community",
            links: ["Blog", "Events", "Ambassadors", "Forum"],
        },
    ];

    return (
        <footer className="w-full bg-white py-10 px-4 md:px-10"> {/* Outer Page Background */}
            <div className="max-w-[1400px] mx-auto bg-gray-950 rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">

                {/* Subtle Gradient Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 blur-[120px] rounded-full -mr-64 -mt-64" />

                <div className="relative z-10">
                    {/* Top Tier: The "Hook" */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                        <div className="max-w-xl">
                            <Typography variant="h1" className="font-normal text-white leading-none mb-6 tracking-tight">
                                Ready to ship <br />
                                <span className="text-brand-green italic">your next</span> big idea?
                            </Typography>
                            <button className="group flex items-center gap-3 text-white text-xl font-medium transition-all">
                                Let's talk
                                <span className="bg-brand-green p-2 rounded-full group-hover:rotate-45 transition-transform duration-300">
                                    <ArrowUpRight className="w-6 h-6 text-brand-purple" />
                                </span>
                            </button>
                        </div>

                        {/* Newsletter Card */}
                        <div className="w-full lg:w-md bg-white/5 backdrop-blur-md p-4 rounded-3xl border border-white/10">
                            <Typography variant="body" className="text-white/60 mb-6 block">Get tech insights delivered to your inbox.</Typography>
                            <form className="relative flex items-center">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-brand-orange transition-all"
                                />
                                <button className="absolute right-2 p-2 bg-brand-orange text-white rounded-xl hover:scale-110 transition-transform">
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* footer links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20 border-t border-white/10 pt-16">
                        <div className="col-span-2 lg:col-span-2">
                            <img src="/images/igwhitelogo.png" className="w-30 mb-4" alt="" />
                            {/* <Typography variant="body" className="text-white/50 text-sm max-w-xs">
                                Empowering the next generation of African founders through technology, community, and capital.
                            </Typography> */}
                        </div>

                        {sections.map((section) => (
                            <div key={section.title} className="flex flex-col gap-4">
                                <Typography variant="caption" className="text-brand-green font-bold tracking-widest">{section.title}</Typography>
                                {section.links.map((link) => (
                                    <a key={link} href="#" className="text-white/70 hover:text-brand-orange transition-colors text-base">
                                        {link}
                                    </a>
                                ))}
                            </div>
                        ))}

                        <div className="col-span-2 md:col-span-1">
                            <Typography variant="caption" className="text-brand-green font-bold tracking-widest mb-4 block">CONTACT</Typography>
                            <a href="mailto:info@ighub.com.ng" className="text-white hover:text-brand-orange transition-colors block mb-2">info@ighub.com.ng</a>
                            <p className="text-white hover:text-brand-orange transition-colors block mb-2">07082367382</p>
                            <Typography variant="body" className="text-white/50 text-sm italic">10 Calabar Street, Aba, Abia State, Nigeria</Typography>
                        </div>
                    </div>

                    {/* Bottom Tier */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
                        <Typography variant="caption" className="text-white/30 tracking-widest uppercase text-[10px]">
                            Copyright © 2026 Innovation Growth Hub | Powered by IGLabs
                        </Typography>

                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 bg-white/5 text-white rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-xl">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};