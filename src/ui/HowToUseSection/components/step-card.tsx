import type { ReactNode } from "react";

export type StepCardProps = {
  number: number;
  text: ReactNode;
  children?: ReactNode;
};

export function StepCard({ number, text, children }: StepCardProps) {
  return (
    <div className={"flex w-full flex-col rounded-2xl bg-beige p-4"}>
      <div>
        <span
          className={
            "grid h-10 w-20 place-items-center rounded-3xl bg-purple font-bold text-white"
          }
        >
          Step.{number}
        </span>
      </div>
      <div className={"mt-3"}>{text}</div>
      <div className={"mt-4 grid place-items-center"}>{children}</div>
    </div>
  );
}
