"use client";
import Image from "next/image";
import { Typography } from "./components/ui/typography";
import { Button } from "./components/ui/button";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import Ighubprogramgrid from "./components/ighubprogramgrid";
import { Minititle } from "./components/minititle";
export default function Home() {
  // Animation Variants for Staggered Entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      // transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <main className="min-h-screen bg-white p-3 md:p-6 lg:p-8 pt-24 md:pt-32 lg:pt-40">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 min-h-[80vh]"
      >
        <motion.div
          variants={itemVariants}
          className="bg-brand-purple rounded-[2.5rem] md:rounded-[3rem] p-12 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-brand-green mb-8 md:mb-12">
            <Zap className="w-4 h-4 fill-current" />
            <Typography variant="caption" className="font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
              Innovation Growth Hub
            </Typography>
          </div>

          <div className="max-w-2xl">
            <Typography
              variant="h1"
              className="text-white leading-[1.1] mb-6 md:mb-8 text-3xl md:text-5xl lg:text-6xl font-normal"
              weight="bold"
            >
              Empowering Businesses, <br className="hidden md:block" />
              Training Talents, and <br className="hidden md:block" />
              <span className="text-brand-green italic font-heading">Building the Future.</span>
            </Typography>

            <Typography variant="body" className="text-white/60 mb-8 md:mb-10 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
              We drive business growth with smart tech solutions, equip individuals with digital skills, and support startups in building the future.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
              <Button
                variant="secondary"
                className="sm:w-auto rounded text-white px-8 py-6"
              >
                Meet team
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-8 py-6"
              >
                View work
              </Button>
            </div>
          </div>

          {/* Bottom Stats Row - 3 columns on all screens, font size adjusted */}
          <div className="grid grid-cols-3 gap-4 pt-8 md:pt-12 border-t border-white/10">
            <div>
              <Typography variant="h5" className="text-white md:text-2xl" weight="bold">5,000+</Typography>
              <Typography variant="caption" className="text-white/40 block mt-1 text-[9px] md:text-xs">Innovators trained</Typography>
            </div>
            <div>
              <Typography variant="h5" className="text-white md:text-2xl" weight="bold">12+</Typography>
              <Typography variant="caption" className="text-white/40 block mt-1 text-[9px] md:text-xs">Startups launched</Typography>
            </div>
            <div className="flex flex-col">
              <div className="flex -space-x-2 mb-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-slate-700 border-2 border-brand-purple overflow-hidden">
                    <div className="w-full h-full bg-linear-to-tr from-brand-purple to-brand-green opacity-50" />
                  </div>
                ))}
              </div>
              <Typography variant="caption" className="text-white/40 text-[9px] md:text-xs">10k+ Community</Typography>
            </div>
          </div>
        </motion.div>

        {/* hero image div */}
        <motion.div
          variants={itemVariants}
          className="relative group bg-slate-100 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden aspect-4/5 lg:aspect-auto min-h-[400px]"
        >
          <Image
            src="/images/heroimage.jpeg"
            width={100}
            height={50}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            alt="ighub hero image"
          />

          {/* floating information overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-4 right-4 left-4 md:bottom-8 md:right-8 md:left-auto md:w-72 bg-brand-purple/40 backdrop-blur-xl border border-white/20 p-4 md:p-5 rounded-4xl flex gap-4 items-center shadow-2xl"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-green rounded-2xl shrink-0 flex items-center justify-center">
              <ArrowUpRight className="text-brand-purple w-6 h-6 md:w-7 md:h-7" />
            </div>
            <Typography variant="caption" className="text-white font-medium leading-tight text-[11px] md:text-xs">
              Latest: Monitoring our 2026 Cohort progress guide
            </Typography>
          </motion.div>
        </motion.div>

      </motion.section>

      {/* second section of homepage */}
      <Ighubprogramgrid />

      {/* third section of home page */}
      <section className="py-24 md:px-6 px-0 max-w-[1440px] mx-auto">
        <div className="mb-16 text-center">
          <Minititle>did you know that</Minititle>
          <Typography variant="h2" weight="medium" className="text-gray-900 mb-4">We Empower Entrepreneurs to Innovate, <br /> Build and Drive Impact</Typography>
        </div>

      </section>
    </main>

  );
}