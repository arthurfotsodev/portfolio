"use client";

import { clsx } from "cn";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-5xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

export function GridSection({
  id,
  className,
  pad,
  children,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  pad?: boolean;
}) {
  return (
    <section
      id={id}
      className={clsx("relative", pad && "px-4 py-12 sm:px-12", className)}
    >
      <div className="relative">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={clsx("t-label", className)}>{children}</p>;
}

export function ButtonLink({
  title,
  icon,
  link,
  className,
}: {
  title: string;
  icon?: ReactNode;
  link: string;
  className?: string;
}) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(link)}
      className={className}
      variant="outline"
      size="lg"
    >
      {title}
      {icon && <span className="shrink-0">{icon}</span>}
    </Button>
  );
}
