import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "GC Kollam",
    username: "Ph: 9746593998",
    body: "Vadakkavila, Polayathodu, Kollam, Kerala 691021",
    img: "https://avatar.vercel.sh/gc-kollam",
  },
  {
    name: "GC Kochi",
    username: "Ph: 9207093998",
    body: "Pathadipalam, near metro station, Ernakulam, Kochi, Kerala 682024",
    img: "https://avatar.vercel.sh/gc-kochi",
  },
  {
    name: "GC MG Road",
    username: "Ph: 9995353998",
    body: "Filler No: 709, Chenchery Building, Mahatma Gandhi Rd, Ground Junction, Ernakulam South, Kochi, Ernakulam, Kerala 682011",
    img: "https://avatar.vercel.sh/gc-mg-road",
  },
  {
    name: "GC Thrissur",
    username: "Ph: 07994323998",
    body: "First Floor, Chettupuzha Tower, Sona Hotels, Sankaraiyyer Road, Thrissur, Kerala 680004",
    img: "https://avatar.vercel.sh/gc-thrissur",
  },
  {
    name: "GC Edappal",
    username: "Ph: 9746373998",
    body: "Al-Madeena Complex, near State Bank of India, Edappal, Kerala 679576",
    img: "https://avatar.vercel.sh/gc-edappal",
  },
  {
    name: "GC Tirur",
    username: "Ph: 9037093998",
    body: "Main Road, opposite Family Wedding Center, Pan Bazaar, Tirur, Kerala 676101",
    img: "https://avatar.vercel.sh/gc-tirur",
  },
  {
    name: "GC Kottakkal",
    username: "Ph: 09605093998",
    body: "Near Thaif Womens Mall, Main Road, Kottakkal, Kerala 676503",
    img: "https://avatar.vercel.sh/gc-kottakkal",
  },
  {
    name: "GC Calicut",
    username: "Ph: 7558093998",
    body: "Mavoor Rd, near New Kalyan Jewellery, Parayancheri, Kottooli, Kozhikode, Kerala 673016",
    img: "https://avatar.vercel.sh/gc-calicut",
  },
  {
    name: "GC Kannur",
    username: "Ph: 7907489939",
    body: "Junction, near NRE Electronics, Thana, Kannur, Kerala 670012",
    img: "https://avatar.vercel.sh/gc-kannur",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-90 md:80 lg:80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* IMAGE – SIZE INCREASED ONLY */}
        <img
          src="./shop.avif"
          alt=""
          width="84"
          height="84"
          className="rounded h-16 w-16 object-cover"
        />

        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>

      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative bg-muted p-3 flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="text-center p-3">
        <h2 className="text-3xl font-semibold">Our Branches</h2>
        <p className="mt-6">
        With 10 branches across Kerala, a dedicated team of 250+ professionals, and the trust of 3 lakh+ happy brides, Golden Cup stands for elegance, reliability, and modern bridal choices.
        </p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div> */}
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
