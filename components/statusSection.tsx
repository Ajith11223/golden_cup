"use client";
import { NumberTicker } from "@/components/ui/magicui/number-ticker";

export default function StatsSection() {
  return (
    <section className="bg-muted dark:bg-background py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Where legacy meets trust.
          </h2>
          <p>
            Gemini is evolving to be more than just the models. It supports an
            entire to the APIs and platforms helping developers and businesses
            innovate.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-4xl font-bold">
              <NumberTicker
                value={10}
                className="text-6xl font-medium tracking-tighter whitespace-pre-wrap text-white dark:text-white"
              />
            </div>
            <p>Show Rooms</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-bold">
              <NumberTicker
                value={300000}
                className="text-6xl font-medium tracking-tighter whitespace-pre-wrap text-white dark:text-white"
              />
            </div>
            <p>Happy Brides</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-bold">
              <NumberTicker
                value={500}
                className="text-6xl font-medium tracking-tighter whitespace-pre-wrap text-white dark:text-white"
              />
            </div>
            <p>Models</p>
          </div>
        </div>
      </div>
    </section>
  );
}
