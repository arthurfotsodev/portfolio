import { clsx } from "cn";
import { ReactNode } from "react";

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

export function GridSection({ children }: { children: React.ReactNode }) {
  return <section className="">{children}</section>;
}
