import { SectionLayout } from "../shared/SectionLayout";

export function HowToUseSection() {
  return (
    <SectionLayout
      title="アプリの使いかた"
      subTitle={'How to use "Re:paint"?'}
      sectionId="howtouse">
      <p className="mt-4 px-4">
        アプリの使い方は
        <a href="/manual" className="px-1 text-purple underline">
          マニュアル
        </a>
        をご覧ください。
      </p>
    </SectionLayout>
  );
}
