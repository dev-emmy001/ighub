"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Calendar, ChevronRight, ArrowUpRight } from "lucide-react";
import { Minititle } from "./minititle";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const stats = [
  { value: "8–16", label: "Age range" },
  { value: "4 wks", label: "Duration" },
  { value: "5,000+", label: "Kids trained" },
];

const features = [
  "Beginner-friendly — zero experience needed",
  "Certified instructors & industry mentors",
  "Physical & digital project showcase",
  "Certificate of completion & alumni network",
];

export function KidsCodeCamp() {
  return (
    <section className="py-20 md:py-28 max-w-[1440px] mx-auto px-3 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

        {/* Left — image box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3] lg:aspect-[3/4] w-full"
        >
          {/* Replace src with your actual image path */}
          <Image
            src="/kcc-images/IMG_1461.JPG"
            fill
            className="object-cover"
            alt="Kids Code Camp at IGHub"
          />

          {/* Overlay badge */}
          <div className="absolute bottom-5 left-5 right-5">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-brand-purple rounded-xl flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-brand-purple">
                  Next Cohort
                </div>
                <div className="text-sm font-semibold text-gray-900">Q3 2026 — Registration Open</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-7"
        >
          <motion.div variants={fadeUp}>
            <Minititle>Event spotlight</Minititle>
            <Typography
              variant="h2"
              className="text-gray-900 mt-3 leading-tight"
            >
              We're Building the Next
              <br />
              Generation of Creators.
            </Typography>
            <Typography variant="body" className="text-gray-500 mt-4 leading-relaxed">
              Our Kids Code Camp introduces young minds to technology through fun, project-based learning. From web apps to mini-robots, every child leaves with a creation they're proud of.
            </Typography>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center"
              >
                <div className="text-xl md:text-2xl font-bold text-brand-purple">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Feature list */}
          <motion.ul variants={fadeUp} className="space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-0.5 w-5 h-5 bg-brand-purple/10 rounded-full flex items-center justify-center shrink-0">
                  <ChevronRight className="w-3 h-3 text-brand-purple" />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp}>
            <Button
              variant="secondary"
              className="rounded-xl px-8 py-5 inline-flex items-center gap-2"
            >
              Register Interest
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
