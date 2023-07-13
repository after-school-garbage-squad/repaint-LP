type SectionLayoutProps = {
  children: React.ReactNode;
  sectionId: string;
  title: string;
  subTitle: string;
};

export function SectionLayout({
  children,
  title,
  sectionId,
  subTitle,
}: SectionLayoutProps) {
  return (
    <section className={"mx-auto w-full max-w-[1200px] px-4"}>
      <h2
        id={sectionId}
        className={"mt-8 w-max border-b-2 border-pink px-2 text-2xl"}
      >
        {title}
        <span className={"ml-3 hidden text-lg text-blue md:inline"}>
          {subTitle}
        </span>
      </h2>
      {children}
    </section>
  );
}
