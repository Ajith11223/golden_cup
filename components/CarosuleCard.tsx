"use client";
import Glide from "@glidejs/glide";
import { useEffect } from "react";

export default function CarouselControlsOutside() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      autoplay: 1500,
      animationDuration: 700,
      gap: 24,

      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      } as any, // ✅ ignore strict classes typing safely

      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1 },
      },
    });

    slider.mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <section className="py-16 md:py-32 dark:bg-transparent">
        <div className="@container mx-auto max-w-6xl px-6">
        <div className="mt-5 gap-4 sm:grid sm:grid-cols-2 p-3">
                    <div className="sm:w-2/5">
                        <h2 className="text-3xl font-bold sm:text-4xl"> New Collections</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        {/* <p>During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p> */}
                    </div>
                </div>
        <div className="glide-04 relative w-full">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              {arr?.map((item: any) => {
                return (
                  <>
                    <li>
                      <img
                        src={`${item}.PNG`}
                        className="m-auto max-h-[420px] w-full max-w-full object-fit"
                      />
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        </div>
        {/* </div> */}
      </section>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}
