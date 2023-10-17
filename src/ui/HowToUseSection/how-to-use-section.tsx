import { ManualCard } from "../ManualSection/components/manual-card";
import { manualText } from "../ManualSection/manual";
import { SectionLayout } from "../shared/SectionLayout";

export function HowToUseSection() {
  return (
    <SectionLayout
      title="アプリの使いかた"
      subTitle={'How to use "Re:paint"?'}
      sectionId="howtouse"
    >
      <div className="mt-4 flex flex-col gap-4">
        {manualText.map((manual) => (
          <ManualCard key={manual.title} {...manual} />
        ))}
      </div>
    </SectionLayout>
  );
}
