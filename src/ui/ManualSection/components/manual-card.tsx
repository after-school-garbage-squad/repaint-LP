type ManualCardProps = {
  title: string;
  children?: React.ReactNode;
};

export const ManualCard: React.FC<ManualCardProps> = ({ title, children }) => {
  return (
    <div className="flex max-w-xl flex-col gap-2 overflow-hidden rounded-lg border-2 border-orange">
      <div className={"h-max bg-orange/70 py-1"}>
        <h2 className={"px-2 text-2xl font-bold text-purple"}>{title}</h2>
      </div>
      <div
        className={
          "grid h-auto flex-auto grid-cols-[100%] grid-rows-[auto_1fr] px-2 py-1"
        }
      >
        {children}
      </div>
    </div>
  );
};
