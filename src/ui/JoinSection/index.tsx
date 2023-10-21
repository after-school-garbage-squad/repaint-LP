import { ManualCard } from "../ManualSection/components/manual-card";
import { SectionLayout } from "../shared/SectionLayout";

import { joinManualText } from "./join-manual";

export const JoinSection = () => {
  return (
    <SectionLayout
      title="iPhoneアプリで参加する"
      subTitle={"Join the event"}
      sectionId="join"
    >
      <div className="mt-4 flex flex-col gap-4">
        {joinManualText.map((manual) => (
          <ManualCard key={manual.title} {...manual} />
        ))}
      </div>
    </SectionLayout>
  );
};
