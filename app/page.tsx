'use client'
import CardSection from "@/components/CardSection";
import CarouselControlsOutside from "@/components/CarosuleCard";
import { ComponentExample } from "@/components/component-example";
import FAQsThree from "@/components/faq";
import Features from "@/components/feature";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ModelCategory from "@/components/ModelCategory";
import StatsSection from "@/components/statusSection";
import { MarqueeDemo } from "@/components/Test";
import WallOfLoveSection from "@/components/Testimonial";
import TopBrands from "@/components/TopBrands";
import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/magicui/dot-pattern"
export default function Page() {
return <>
<HeroSection/>
<CarouselControlsOutside/>
<Features/>
<CardSection/>
<StatsSection/>
<MarqueeDemo/>
{/* <ModelCategory/> */}
<WallOfLoveSection/>
{/* <TopBrands/> */}
<FAQsThree/>
<FooterSection/>
</>
}