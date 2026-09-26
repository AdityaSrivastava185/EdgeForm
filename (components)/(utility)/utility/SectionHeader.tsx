import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const SectionHeader = ({
  title,
  description,
  children,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) => {
  return (
    <section className={cn(className)}>
      <div className="flex flex-col gap-4">
        <h3
          className={cn("text-center text-balance md:text-5xl", titleClassName)}
        >
          {title}
        </h3>
        <p className={cn("text-center text-balance", descriptionClassName)}>
          {description}
        </p>
      </div>
      {children}
    </section>
  );
};

export default SectionHeader;
