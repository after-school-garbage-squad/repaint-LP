import { useSearchParams } from "react-router-dom";

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
            <a
              className={
                "w-max rounded-xl bg-blue px-4 py-2 text-white shadow-lg hover:bg-blue/80"
              }
              href={`repaint://app.repaint.asgs.dev/?event_id=${searchParams.get(
                "event_id",
              )}`}
            >
              イベントに参加する
            </a>
          ) : (
            <p className={"text-xl"}>10月12日リリース予定</p>
          )}
        </div>
      </div>
    </section>
  );
}
