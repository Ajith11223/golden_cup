import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";

export default function Features() {
  const services = [
    {
      title: "Customization Services",
      description:
        "Share your vision and inspirations, and our expert team will create unique designs tailored just for you, ensuring your jewelry is as individual as you are.",
    },
    {
      title: "Online & Offline Shopping",
      description:
        "Shop your way with our convenient online and offline purchasing options. Whether you prefer browsing our collection in person or from the comfort of your home, we make the process easy and enjoyable.",
    },
    {
      title: "Personalized Styling Services",
      description:
        "Step into our showrooms and indulge in our exclusive styling services. Our skilled stylists are dedicated to helping you achieve a unique and elegant look, offering expert guidance to enhance your bridal style.",
    },
    {
      title: "Trust Worthy Delivery Services",
      description:
        "We prioritize your peace of mind with our reliable delivery services. Rest assured that your selected jewelry will arrive safely and on time.",
    },
  ];
  return (
    <section className="py-10 md:py-16 overflow-hidden  dark:bg-transparent">
      <div className="relative  z-0 ">
        <div className="relative overflow-hidden ">
          <div className="absolute -mt-20 Dentobees-WhyChooseUs-TopBackground" />
          <div className="absolute Dentobees-Pages-Background -z-10"></div>
          <div className="@container mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                Preferred By Many brides
              </h2>
              <p className="mt-4">
              Your wedding day is not just an event; it's a cherished milestone, a moment that deserves to be celebrated in elegance and style. At Golden Cup, we understand the significance of this special occasion for every bride and her family. We're here to ensure that you shine brightly on your big day, creating memories that will last a lifetime.
              </p>
            </div>
            <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-4 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
              {services?.map((item) => {
                return (
                  <>
                    <div className="group shadow-zinc-950/5">
                      <CardHeader className="pb-3">
                        <CardDecorator>
                          <Zap className="size-6" aria-hidden />
                        </CardDecorator>

                        <h4 className="mt-6 font-medium text-lg font-semibold">✨ {item?.title}</h4>
                      </CardHeader>

                      <CardContent>
                        <p className="text-sm">{item?.description}</p>
                      </CardContent>
                    </div>
                  </>
                );
              })}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className=" absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
