import { SectionLayout } from "../shared/SectionLayout";

export function LinkSection() {
  return (
    <SectionLayout
      title="ダウンロード"
      subTitle={'Download "Re:paint"'}
      sectionId="download"
    >
      <p className="mt-4 text-xl">近日リリース予定</p>
    </SectionLayout>
  );
}
