"use client";

import { useMemo, useRef, useState } from "react";

type WordItem = {
  k: string;
  jp?: string;
  desc: string;
  tags?: string[];
};

const WORDS: WordItem[] = [
  { k: "아지랑이", desc: "희뿌연 열기로 인한 시야 왜곡, 여름 들판의 감각.", tags: ["열기", "시야", "여름"] },
  { k: "연무", desc: "짙은 안개처럼 스며드는 흐림과 습기.", tags: ["습기", "흐림"] },
  { k: "새벽안개", jp: "薄明(うすあけ, usuake)", desc: "서늘하고 고요한 아침의 은은한 포근함. / 새벽의 희미한 빛, 몽환적 서늘함.", tags: ["새벽", "고요"] },
  { k: "김서림", desc: "창에 맺힌 습기의 촉촉하고 따뜻한 감촉.", tags: ["응결", "촉촉"] },
  { k: "이슬맺힘", desc: "잎사귀의 차갑고 투명한 물방울 촉감.", tags: ["물방울", "차가움"] },
  { k: "잔물결", jp: "揺らぎ(ゆらぎ, yuragi)", desc: "물결의 부드럽고 반복적인 시각·청각 리듬. / 공기나 물의 가벼운 떨림, 촉각적 리듬.", tags: ["리듬", "반복"] },
  { k: "번득임", jp: "残光(ざんこう, zankou)", desc: "햇빛에 반사되는 물이나 눈의 찬란한 섬광. / 해질녘의 남은 빛, 따스한 잔향.", tags: ["반사", "빛"] },
  { k: "속삭임", desc: "나뭇잎이나 바람의 가벼운 청각·촉각 자극.", tags: ["바람", "청각"] },
  { k: "여운", jp: "夕霧(ゆうぎり, yuugiri)", desc: "사라진 후에도 남는 감각적 잔향. / 저녁에 스며드는 부드러운 안개, 아련한 여운.", tags: ["잔향", "저녁"] },
  { k: "희끄무레", jp: "霞(かすみ, kasumi)", desc: "반투명한 빛의 부옇고 신비로운 톤. / 봄 산야의 연기 같은 안개, 신비로운 희뿌옇게.", tags: ["부옇게", "신비"] },

  { k: "朝靄", jp: "朝靄(あさもや, asamoya)", desc: "아침 산속의 희뿌연 안개, 서늘한 고요함.", tags: ["아침", "산"] },
  { k: "かそけき", jp: "かそけき", desc: "희미하고 스러지는 빛이나 형태, 몽롱한 착각.", tags: ["희미", "몽롱"] },
  { k: "ゆらめき", jp: "ゆらめき", desc: "불꽃이나 열기로 인한 시야의 물결치듯 흔들림, 부옇은 움직임.", tags: ["흔들림", "열기"] },
  { k: "もや", jp: "もや", desc: "가벼운 안개나 흐림, 습기찬 공기의 포근함.", tags: ["안개", "포근"] },
  { k: "靄", jp: "靄(もや, oboro)", desc: "흐린 달빛이나 안개 낀 시야, 은은한 부드러움.", tags: ["달빛", "은은"] },
  { k: "揺らぎ", jp: "揺らぎ(ゆらぎ, yuragi)", desc: "공기나 물의 가벼운 떨림, 촉각적 리듬.", tags: ["떨림", "촉각"] },
];

export default function WordShelf() {
  const [active, setActive] = useState<number | null>(0);
  const flipAudioRef = useRef<HTMLAudioElement | null>(null);

  const current = useMemo(() => {
    if (active === null) return null;
    return WORDS[active];
  }, [active]);

  const playFlip = () => {
    const a = flipAudioRef.current;
    if (!a) return;
    try {
      a.currentTime = 0;
      a.volume = 0.35;
      void a.play();
    } catch {
      // ignore autoplay restrictions errors silently
    }
  };

  return (
    <section className="mt-10">
      {/* 헤더 */}
      <div className="mb-5">
        <h2 className="text-2xl font-medium tracking-tight">Words</h2>
        <p className="mt-2 text-sm text-zinc-600">
          단어(책등)를 클릭하면 책 커버가 “촵” 열리면서 설명이 펼쳐집니다.
        </p>
      </div>

      {/* 책등 선반 */}
      <div
        className="flex gap-3 overflow-x-auto rounded-2xl border border-zinc-200 bg-white/60 p-3 pb-4 backdrop-blur"
        style={{ WebkitOverflowScrolling: "touch" as any }}
        role="listbox"
        aria-label="Word list"
      >
        {WORDS.map((w, i) => {
          const selected = i === active;
          return (
            <button
              key={`${w.k}-${i}`}
              type="button"
              role="option"
              aria-selected={selected}
              onClick={() => {
                setActive(i);
                playFlip();
              }}
              className={[
                "shrink-0 min-w-[160px] max-w-[220px] rounded-2xl border px-4 py-3 text-left transition",
                selected
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-white hover:-translate-y-[1px] hover:border-zinc-400",
              ].join(" ")}
            >
              <div className="font-semibold">{w.k}</div>
              <div className={["mt-1 text-xs leading-relaxed line-clamp-2", selected ? "text-white/75" : "text-zinc-500"].join(" ")}>
                {w.desc}
              </div>
            </button>
          );
        })}
      </div>

      {/* 책 펼침 스테이지 */}
      <div className="mt-6">
        <div className="relative mx-auto h-[420px] w-full max-w-5xl [perspective:1400px]">
          <div
            className={[
              "relative h-full w-full transition-all duration-200",
              current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
            ].join(" ")}
            aria-live="polite"
          >
            <div className="absolute inset-0 grid grid-cols-12 gap-4">
              {/* COVER */}
              <div className="col-span-12 md:col-span-5">
                <div className="relative h-full [perspective:1400px]">
                  <div className="relative h-full w-full rounded-2xl" style={{ transformStyle: "preserve-3d" }}>
                    {/* 책등 두께 */}
                    <div
                      className="absolute inset-y-0 left-0 w-[18px] rounded-l-2xl border border-zinc-800 bg-zinc-900"
                      style={{
                        transform: "translateZ(2px)",
                        boxShadow: "inset -6px 0 12px rgba(0,0,0,.45)",
                      }}
                      aria-hidden="true"
                    />

                    {/* 안쪽면 */}
                    <div
                      className="absolute inset-0 rounded-2xl border border-zinc-200 bg-zinc-100"
                      style={{
                        transform: "translateZ(-1px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,.10)",
                      }}
                      aria-hidden="true"
                    />

                    {/* 앞커버(열림) */}
                    <div
                      key={active ?? "none"}
                      className="absolute inset-0 origin-left rounded-2xl border border-zinc-900 bg-zinc-950 text-white shadow-[0_24px_70px_rgba(0,0,0,.35)] animate-[coverOpenPop_.62s_cubic-bezier(.2,.95,.18,1)_both]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* 커버 광택 */}
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background:
                            "radial-gradient(800px 420px at 20% 10%, rgba(255,255,255,.18), transparent 55%)," +
                            "linear-gradient(180deg, rgba(122,167,255,.18), rgba(255,255,255,0))",
                        }}
                        aria-hidden="true"
                      />

                      {/* 커버 안쪽면(뒤집힌 면) */}
                      <div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          transform: "rotateY(180deg) translateZ(1px)",
                          backfaceVisibility: "hidden",
                          background: "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
                        }}
                        aria-hidden="true"
                      />

                      <div className="relative z-10 flex h-full flex-col p-6">
                        <div className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">
                          WORD
                        </div>

                        <div className="mt-4 text-3xl font-semibold tracking-tight">{current?.k ?? "—"}</div>

                        <div className="mt-3 text-sm leading-relaxed text-white/70">
                          {current?.desc ? `감각 메모: ${current.desc}` : "—"}
                        </div>

                        <button
                          type="button"
                          onClick={() => setActive(null)}
                          className="mt-auto w-fit rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/15"
                        >
                          닫기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PAGES */}
              <div className="col-span-12 md:col-span-7">
                <div className="h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.12)]">
                  <div className="flex h-full flex-col p-6">
                    <div className="text-sm font-semibold text-zinc-900">{current?.jp ? current.jp : " "}</div>
                    <div className="my-3 h-px w-full bg-zinc-200" />
                    <div className="whitespace-pre-wrap text-[15px] leading-7 text-zinc-700">{current?.desc ?? "—"}</div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-4">
                      {(current?.tags ?? []).map((t) => (
                        <span key={t} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* keyframes */}
            <style jsx>{`
              @keyframes coverOpenPop_ {
                0% {
                  transform: rotateY(0deg);
                }
                70% {
                  transform: rotateY(-160deg);
                }
                85% {
                  transform: rotateY(-146deg);
                }
                100% {
                  transform: rotateY(-150deg);
                }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* 효과음 */}
      <audio ref={flipAudioRef} src="/sounds/page-flip.mp3" preload="auto" />
    </section>
  );
}