import { SectionLayout } from "../shared/SectionLayout";

import { ManualCard } from "./components/manual-card";

export const ManualSection: React.FC = () => {
  return (
    <SectionLayout title="マニュアル" subTitle="manual" sectionId="#manual">
      <div className="mt-4 flex flex-col items-center">
        <ManualCard title="title">
          <div>
            <p>
              このアプリは、イベント会場を周りながら「パレット」を集めて、写真の完成を目指すアプリです。
            </p>
          </div>
        </ManualCard>
      </div>
    </SectionLayout>
  );
};
