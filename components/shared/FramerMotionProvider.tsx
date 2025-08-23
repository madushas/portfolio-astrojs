"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

interface FramerMotionProviderProps {
  children: ReactNode;
}

export function FramerMotionProvider({ children }: FramerMotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
