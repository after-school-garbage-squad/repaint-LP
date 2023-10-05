import { SectionLayout } from "../shared/SectionLayout";

import { ManualCard, type ManualCardProps } from "./components/manual-card";
import manualListData from "./manual.json";

const manualList: ManualCardProps[] = manualListData;

export const ManualSection: React.FC = () => {
  return (
    <SectionLayout title="マニュアル" subTitle="manual" sectionId="#manual">
      <div className="mt-4 flex flex-col gap-4">
        {manualList.map((manual) => (
          <ManualCard key={manual.title} {...manual} />
        ))}
      </div>
    </SectionLayout>
  );
};
