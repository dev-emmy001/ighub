"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Wifi, Coffee, Monitor, Printer, Users, Sparkles, ArrowUpRight, MapPin } from "lucide-react";
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

const amenities = [
  { icon: Wifi, label: "High-speed Fibre" },
  { icon: Coffee, label: "Café & Lounge" },
  { icon: Monitor, label: "Dual-monitor Desks" },
  { icon: Printer, label: "Print & Scan" },
  { icon: Users, label: "Meeting Rooms" },
  { icon: Sparkles, label: "24/7 Access" },
];

// Image placeholders — swap src values for real photos
const galleryImages = [
  { src: "/images/workspace-main.jpeg", alt: "IGHub co-working main floor", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/images/workspace-lounge.jpeg", alt: "IGHub lounge area", span: "" },
  { src: "/images/workspace-studio.jpeg", alt: "IGHub studio space", span: "" },
];

export function WorkspaceSection() {
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
            <Minititle>Co-working & Studio</Minititle>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography
              variant="h2"
              weight="bold"
              className="text-gray-900 mt-3 text-3xl md:text-4xl leading-tight"
            >
              Your Creative HQ in the
              <br />
              Heart of Aba, Nigeria.
            </Typography>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography variant="body" className="text-gray-500 mt-4 max-w-lg leading-relaxed">
              A premium workspace designed for founders, freelancers, remote teams, and creatives who need more than just a desk.
            </Typography>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="shrink-0 flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            className="rounded-xl px-6 py-4 inline-flex items-center gap-2"
          >
            Book a tour <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="rounded-xl border-gray-200 text-gray-700 px-6 py-4 inline-flex items-center gap-2"
          >
            <MapPin className="w-4 h-4" /> Get directions
          </Button>
        </motion.div>
      </motion.div>

      {/* Image gallery grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
      >
        {/* Large feature image */}
        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3] sm:col-span-2 lg:col-span-2 lg:row-span-1"
        >
          <Image
            src="/images/workspace-main.jpeg"
            fill
            className="object-cover"
            alt="IGHub co-working main floor"
          />
        </motion.div>

        {/* Small image 1 */}
        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3]"
        >
          <Image
            src="/images/workspace-lounge.jpeg"
            fill
            className="object-cover"
            alt="IGHub lounge area"
          />
        </motion.div>

        {/* Small image 2 */}
        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3]"
        >
          <Image
            src="/images/workspace-studio.jpeg"
            fill
            className="object-cover"
            alt="IGHub studio space"
          />
        </motion.div>

        {/* Small image 3 */}
        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3] sm:col-span-2 lg:col-span-2"
        >
          <Image
            src="/images/workspace-meeting.jpeg"
            fill
            className="object-cover"
            alt="IGHub meeting room"
          />
        </motion.div>
      </motion.div>

      {/* Amenities */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {amenities.map((a) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.label}
              variants={fadeUp}
              className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2.5 text-sm font-medium text-gray-700"
            >
              <Icon className="w-4 h-4 text-brand-purple" />
              {a.label}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
