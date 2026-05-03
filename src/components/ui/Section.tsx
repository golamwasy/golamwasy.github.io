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
        "relative flex flex-col items-center justify-center overflow-hidden snap-start snap-always",
        fullHeight ? "min-h-screen" : "min-h-fit py-20",
        className
      )}
    >
      <div className={cn("max-w-7xl mx-auto w-full px-6 lg:px-12", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
