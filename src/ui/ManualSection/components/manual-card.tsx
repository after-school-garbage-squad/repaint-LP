export type ManualCardProps = {
  title: string;
  text: string;
  children?: React.ReactNode;
};

export const ManualCard: React.FC<ManualCardProps> = ({
  title,
  text,
  children,
}) => {
  return (
    <div className={"flex w-full flex-col rounded-2xl bg-beige p-4"}>
      <div>
        <span
          className={
            "grid h-10 w-max place-items-center rounded-3xl bg-purple px-2 font-bold text-white"
          }
        >
          {title}
        </span>
      </div>
      <div className={"mt-3"}>{text}</div>
      <div className={"mt-4 grid place-items-center"}>{children}</div>
    </div>
  );
};
