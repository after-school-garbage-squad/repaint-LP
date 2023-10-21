export type JoinManualCardProps = {
    title: string;
    text?: string;
    children?: React.ReactNode;
  };
  
  export const JoinManualCard: React.FC<JoinManualCardProps> = ({
    title,
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
        <div className={"mt-3 whitespace-pre-wrap break-words"}>{children}</div>
      </div>
    );
  };