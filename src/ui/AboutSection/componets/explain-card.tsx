import { Icon } from "@iconify/react";

type ExplainCardProps = {
  cardIndex: number;
  text: string;
  icon: string;
};

export function ExplainCard({ cardIndex, text, icon }: ExplainCardProps) {
  return (
    <div className="flex h-64 w-64 flex-col rounded-lg border-4 border-orange">
      <div className={"h-max"}>
        <div
          className={
            "grid h-11 w-11 place-items-center rounded-br-2xl bg-orange"
          }
        >
          <p className={"text-2xl text-blue"}>{cardIndex}</p>
        </div>
      </div>
      <div
        className={
          "grid h-auto flex-auto grid-cols-[100%] grid-rows-[auto_1fr] place-items-center"
        }
      >
        <p>{text}</p>
        <Icon className={"h-24 w-24"} icon={icon} />
      </div>
    </div>
  );
}
