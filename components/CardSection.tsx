import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/ui/magicui/lens";

const members = [
  {
    name: "Premium Kundan Choker",
    description:
      "An elegant Kundan choker crafted for royal bridal looks, blending traditional artistry with timeless charm.",
    avatar: "11.jpeg",
    link: "#",
  },
  {
    name: "Palakka Mala",
    description:
      "A classic Kerala Palakka mala adorned with emerald tones, perfect for traditional bridal ensembles.",
    avatar: "12.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Necklace",
    description:
      "A luxurious Victorian-style necklace featuring intricate detailing for a graceful and sophisticated bridal appearance.",
    avatar: "13.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Necklace",
    description:
      "A statement Victorian necklace designed to elevate bridal elegance with antique-inspired craftsmanship.",
    avatar: "14.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Choker",
    description:
      "A refined Victorian choker that adds regal charm and a bold statement to bridal attire.",
    avatar: "15.jpeg",
    link: "#",
  },
  {
    name: "Premium Victorian Necklace",
    description:
      "An exquisitely designed Victorian necklace ideal for brides seeking a rich and timeless look.",
    avatar: "16.jpeg",
    link: "#",
  },
  {
    name: "Premium Temple Nagas Jewellery",
    description:
      "Traditional temple jewellery inspired by Nagas motifs, symbolizing heritage, divinity, and bridal grandeur.",
    avatar: "cat1.jpeg",
    link: "#",
  },
  {
    name: "Premium Jadau Kemp Jewellery",
    description:
      "Handcrafted Jadau Kemp jewellery featuring vibrant gemstones, perfect for a majestic bridal style.",
    avatar: "cat2.jpeg",
    link: "#",
  },
  {
    name: "Premium Temple Nagas Jewellery",
    description:
      "An opulent temple Nagas jewellery set that reflects South Indian craftsmanship and bridal tradition.",
    avatar: "cat3.jpeg",
    link: "#",
  },
  {
    name: "Premium Temple Nagas Jewellery",
    description:
      "A richly detailed Nagas temple jewellery piece designed for brides who embrace cultural elegance.",
    avatar: "cat4.jpeg",
    link: "#",
  },
  {
    name: "Premium Temple Chettinad Jewellery",
    description:
      "Authentic Chettinad temple jewellery known for its bold design, antique finish, and bridal significance.",
    avatar: "cat5.jpeg",
    link: "#",
  },
  {
    name: "Premium Jadau Kemp Jewellery",
    description:
      "A stunning Jadau Kemp jewellery creation combining traditional artistry with vibrant bridal appeal.",
    avatar: "cat6.jpeg",
    link: "#",
  },
];

export default function CardSection() {
  return (
    <section className="max-w-8xl  dark:bg-transparent bg-muted ">
      <div className="">
        <div
          className="
         py-4 md:py-4 lg:py-6 xl:py-[0px]  sm:px-5 md:px-[20px]  lg:px-[60px] xl:px-[110px] flex flex-col
          items-center justify-between gap-7 lg:gap-[30px] md:flex-row gap-[30px] items-center 
               backdrop-blur-[18%] rounded-[16px]"
        >
          {/* <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Models</span> */}

          <div className="mt-1 md:mt-4 p-4">
  <div className="grid gap-x-4 gap-y-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {members.map((member, index) => (
      <div
        key={index}
        className="relative flex flex-col bg-gray-100 shadow-sm border border-slate-200 rounded-lg w-full max-w-sm mx-auto"
      >
        {/* Image */}
        <div className="relative h-64 sm:h-72 md:h-80 m-2.5 overflow-hidden rounded-md">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-lg md:text-xl font-semibold">
            {member.name}
          </h6>
          <p className="text-slate-600 text-sm md:text-base leading-snug">
            {member.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
