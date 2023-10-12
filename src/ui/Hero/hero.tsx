import { useSearchParams } from "react-router-dom";

import { isMobile } from "react-device-detect";

export function Hero() {
  const [searchParams] = useSearchParams();
  return (
    <section className={"h-screen bg-beige"}>
      <div
        className={
          "m-auto h-full max-w-[1200px] bg-[url('/hero-bg.png')] bg-[length:200%] bg-center bg-no-repeat px-4 md:bg-cover"
        }
      >
        <div
          className={
            "flex h-full w-max flex-col items-center justify-center gap-8"
          }
        >
          <h1 className={"text-2xl"}>イベントにアソビ心を</h1>
          {searchParams.get("event_id") ? (
            <div className="flex flex-col items-center gap-6">
              <p className={"text-xl"}>10月12日リリース予定</p>
              {isMobile && (
                <a
                  className={
                    "w-max rounded-xl bg-blue px-6 py-4 text-white shadow-lg hover:bg-blue/80"
                  }
                  href={`repaint://app.repaint.asgs.dev/?event_id=${searchParams.get(
                    "event_id"
                  )}`}
                >
                  イベントに参加する
                </a>
              )}
            </div>
          ) : (
            <p className={"text-xl"}>10月12日リリース予定</p>
          )}
        </div>
      </div>
    </section>
  );
}
