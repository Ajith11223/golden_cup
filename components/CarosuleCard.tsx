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
      <section className="dark:bg-transparent border Dentobees-Pages-Background ">
      <div className="relative overflow-hidden z-0 bg-muted">
      <div className="relative overflow-hidden ">
      <div className="absolute -mt-10 -md:mt-16 -xl:mt-20 Dentobees-WhyChooseUs-TopBackground" />
      <div className="absolute Dentobees-Pages-Background -z-10"></div>

        <div className="@container mx-auto max-w-8xl px-6 ">
        <div className="
         py-8 md:py-10 xl:py-[60px]  px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[60px] flex flex-row items-center justify-between gap-7 lg:gap-[40px] md:flex-row gap-[30px] items-center 
               backdrop-blur-[18%] rounded-[16px]">
     
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
                        className="m-auto max-h-[420px] w-full max-w-full object-fit rounded-lg"
                      />
                    </li>
                  </>
                );
              })}
            </ul>
            <h4 className="Sub-heading font-bold">
            Our Collections
          </h4>
          </div>
          
        </div>
        </div>
        </div>
        </div>
        </div>
        {/* </div> */}
      </section>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}
