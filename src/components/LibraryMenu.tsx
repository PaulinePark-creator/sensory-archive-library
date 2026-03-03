"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const items = [
  { href: "/library", label: "Index" },
  { href: "/library/words", label: "Words" },
  { href: "/library/specimens", label: "Specimens" },
  { href: "/library/field-notes", label: "Field Notes" },
];

export default function LibraryMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // 바깥 클릭하면 닫히게
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      const target = e.target as Node;
      if (!wrapRef.current.contains(target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      {/* 버튼 */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative tracking-widest hover:opacity-70 transition"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        LIBRARY
        {/* 작은 표시 */}
        <span className="ml-2 inline-block text-xs opacity-60">
          {open ? "▾" : "▸"}
        </span>
      </button>

      {/* 펼쳐지는 패널(책처럼) */}
      <div
        className={[
          "absolute left-1/2 -translate-x-1/2 mt-3 w-[360px]",
          "origin-top rounded-2xl border border-zinc-200 bg-white shadow-lg",
          "overflow-hidden",
          "transition-all duration-200 ease-out",
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "pointer-events-none opacity-0 -translate-y-2 scale-95",
        ].join(" ")}
      >
        {/* 책 spine 느낌의 얇은 라인 */}
        <div className="h-[1px] bg-zinc-200" />

        <div className="grid grid-cols-2 gap-0">
          {/* 왼쪽 페이지 */}
          <div className="relative p-4">
            <div className="text-[11px] tracking-[0.24em] text-zinc-500">
              LIBRARY
            </div>
            <div className="mt-3 text-sm text-zinc-700 leading-relaxed">
              단어/표본/메모가
              <br />
              “책장처럼” 펼쳐지는 메뉴.
            </div>

            {/* 가운데 접히는 라인 */}
            <div className="absolute top-0 right-0 h-full w-[1px] bg-zinc-200" />
          </div>

          {/* 오른쪽 페이지: 링크 목록 */}
          <div className="p-2">
            <div className="flex flex-col">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm tracking-widest hover:bg-zinc-100 transition"
                >
                  {it.label.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 얇은 라인 */}
        <div className="h-[1px] bg-zinc-200" />
      </div>
    </div>
  );
}
