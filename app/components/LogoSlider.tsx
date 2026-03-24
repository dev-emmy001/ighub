"use client";

import { motion } from "framer-motion";
import { Minititle } from "./minititle";
import Image from "next/image";
import { Typography } from "./ui/typography";

const partners = [
    { name: "Google", logo: "/partners-logos/Google-Logo.png" },
    { name: "Meta", logo: "/partners-logos/Meta-Logo.png" },
    { name: "Techstars", logo: "/partners-logos/Techstars-Logo.png" },
    { name: "World Bank", logo: "/partners-logos/Worldbank-Logo.png" },
    { name: "MOE ", logo: "/partners-logos/MOE-Logo.png" },
    { name: "GOV of Abia ", logo: "/partners-logos/GOV-Logo.png" },
];

export const LogoSlider = () => {
    return (
        <div className="w-full py-20 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-12">
                {/* <Minititle>
                    Our Global Network & Partners
                </Minititle> */}
            </div>

            <div className="relative flex items-center overflow-hidden">
                <motion.div
                    className="flex flex-none gap-8 md:gap-12 pr-12"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 25,
                        repeat: Infinity,
                    }}
                >
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="group relative h-20 w-40 md:h-28 md:w-56 flex-shrink-0"
                        >


                            {/* The Logo */}
                            <div className="relative h-full w-full p-6 md:p-8 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain p-6 md:p-8"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Deeper Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
            </div>
        </div>
    );
};