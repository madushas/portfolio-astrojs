// hero.tsx
"use client";
import React, { HTMLProps } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { SiLinkedin, SiX, SiGithub } from "react-icons/si";
import HeroImage from "@/public/images/profile.webp";
import Spotlight from "../ui/animated-background";

const socialMedia = [
  {
    text: "LinkedIn",
    url: "https://linkedin.com/in/madushasandaruwan",
    icon: <SiLinkedin />,
  },
  { text: "GitHub", url: "https://github.com/madushaS/", icon: <SiGithub /> },
  { text: "X", url: "https://x.com/_MadushaS", icon: <SiX /> },
];

export default function Hero(props: HTMLProps<HTMLDivElement>) {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, -50]);
  const yImage = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      {...props}
    >
      {/* Animated Background */}
      <Spotlight
        translateY={-400}
        xOffset={120}
        gradientFirst="radial-gradient(70% 70% at 55% 30%, hsla(194, 82%, 35%, 0.1), transparent 80%)"
        gradientSecond="radial-gradient(60% 60% at 50% 50%, hsla(270, 60%, 55%, 0.06), transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, 0.04), transparent 100%)"
      />

      <m.div
        className="z-10 container mx-auto flex flex-col-reverse items-center gap-12 md:flex-row"
        style={{ y: yText }}
      >
        {/* Content */}
        <div className="flex flex-col gap-6 md:w-2/3">
          {/* Status Badge */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Available for work
            </div>
          </m.div>

          {/* Main Heading */}
          <div className="space-y-2 overflow-hidden">
            <m.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground text-lg md:text-xl"
            >
              👋 Hello, I&apos;m
            </m.p>
            <m.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gradient text-5xl font-bold tracking-tight md:text-7xl"
            >
              Madusha Sandaruwan
            </m.h1>
            <m.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-foreground/80 text-xl font-semibold md:text-2xl"
            >
              Software Engineer (Systems & Architecture)
            </m.div>
          </div>

          {/* Description */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            I design software systems that survive failure.
          </m.p>

          {/* CTA */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="group">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="mailto:work@madusha.dev">
                <Mail className="mr-2 h-4 w-4" />
                Let&apos;s Talk
              </Link>
            </Button>
          </m.div>

          {/* Social */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex gap-4"
          >
            {socialMedia.map((item) => (
              <Button
                key={item.text}
                asChild
                variant="outline"
                size="icon"
                className="transition-transform hover:scale-110 hover:shadow-lg"
              >
                <Link href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                  <span className="sr-only">{item.text}</span>
                </Link>
              </Button>
            ))}
          </m.div>
        </div>

        {/* Hero Image */}
        <m.div
          className="relative flex items-center justify-center md:w-1/3"
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative">
            {/* Dynamic Glow / Gradient Halo */}
            <div className="from-primary/20 animate-pulse-slow absolute -inset-4 rounded-full bg-gradient-to-r via-purple-400/20 to-pink-400/20 blur-3xl" />
            {/* Image container */}
            <div className="border-background relative h-72 w-72 overflow-hidden rounded-full border-4 shadow-2xl md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-400/10 to-blue-400/10 opacity-50 transition-opacity duration-500 hover:opacity-70" />
              <Image
                src={HeroImage}
                alt="Madusha Sandaruwan"
                width={320}
                height={320}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                placeholder="blur"
                priority
              />
            </div>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
