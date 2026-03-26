"use client";
import { motion, Variants } from "framer-motion";
import {
  Code2,
  Palette,
  Rocket,
  GraduationCap,
  Building2,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";
import { Minititle } from "./minititle";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const services = [
  {
    icon: Code2,
    label: "Custom Software",
    desc: "Bespoke digital products built for your exact workflow and scale.",
    tag: "Engineering",
  },
  {
    icon: Palette,
    label: "Brand & Product Design",
    desc: "Visual identities and product experiences that make you unforgettable.",
    tag: "Creative",
  },
  {
    icon: Rocket,
    label: "Startup Incubation",
    desc: "From idea to investable — mentorship, structure, and real resources.",
    tag: "Venture",
  },
  {
    icon: GraduationCap,
    label: "The Tech Academy",
    desc: "Practical, industry-led training that turns beginners into builders.",
    tag: "Education",
  },
  {
    icon: Building2,
    label: "Co-working & Studio Space",
    desc: "A creative HQ where ideas meet people, tools, and opportunity.",
    tag: "Space",
  },
  {
    icon: BriefcaseBusiness,
    label: "Corporate Consultancy",
    desc: "Strategic tech advisory that keeps enterprises ahead of the curve.",
    tag: "Advisory",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 max-w-[1440px] mx-auto px-3 md:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <motion.div variants={fadeUp}>
            <Minititle>What we offer</Minititle>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography
              variant="h2"
              className="text-gray-900 mt-3 text-center md:text-leftleading-tight"
            >
              Mobilising Businesses &{" "}
              <br className="hidden md:block" />
              Entrepreneurs.
            </Typography>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} className="shrink-0">
          <Button
            variant="outline"
            className="rounded-xl border-gray-200 text-gray-700 px-6 py-4 inline-flex items-center gap-2"
          >
            Explore all services
          </Button>
        </motion.div>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="group bg-gray-50 hover:bg-brand-purple rounded-3xl p-7 flex flex-col gap-5 cursor-pointer transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-2xl bg-white group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-5 h-5 text-brand-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-white/50 transition-colors duration-300">
                  {s.tag}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-white text-base mb-2 leading-snug transition-colors duration-300">
                  {s.label}
                </h3>
                <p className="text-gray-400 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">
                  {s.desc}
                </p>
              </div>

              <div className="mt-auto">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-purple group-hover:text-brand-green transition-colors duration-300">
                  Learn more <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
