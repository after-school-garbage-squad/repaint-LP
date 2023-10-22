import { useSearchParams } from "react-router-dom";

import { SectionLayout } from "../shared/SectionLayout";

export function LinkSection() {
  const [searchParams] = useSearchParams();

  return (
    <SectionLayout
      title="ダウンロード"
      subTitle={'Download "Re:paint"'}
      sectionId="download"
    >
      <p className="mt-4 text-xl">
        <a
          className="text-blue underline"
          href={`https://app.repaint.asgs.dev/?event_id=${searchParams.get(
            "event_id"
          )}`}
        >
          こちら
        </a>
        からダウンロードしてください
      </p>
    </SectionLayout>
  );
}
