import { SectionLayout } from "../shared/SectionLayout";

import { ManualCard } from "./components/manual-card";
import { manualText } from "./manual";

export const ManualSection: React.FC = () => {
  return (
    <SectionLayout title="マニュアル" subTitle="manual" sectionId="#manual">
      <div className="mt-4 flex flex-col gap-4">
        {manualText.map((manual) => (
          <ManualCard key={manual.title} {...manual} />
        ))}
      </div>
    </SectionLayout>
  );
};
