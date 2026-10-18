import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
}

export function Section({ id, className, containerClassName, children, fullHeight = true }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden",
        fullHeight ? "min-h-screen py-20 lg:py-24" : "min-h-fit py-16 md:py-24",
        className
      )}
    >
      <div className={cn("max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-12 lg:pr-20", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
