import CardSection from "@/components/CardSection";
import CarouselControlsOutside from "@/components/CarosuleCard";
import { ComponentExample } from "@/components/component-example";
import FAQsThree from "@/components/faq";
import Features from "@/components/feature";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import ModelCategory from "@/components/ModelCategory";
import StatsSection from "@/components/statusSection";
import WallOfLoveSection from "@/components/Testimonial";

export default function Page() {
return <>
<HeroSection/>
<CarouselControlsOutside/>
<Features/>
<ModelCategory/>
<CardSection/>
<StatsSection/>
<WallOfLoveSection/>
<FAQsThree/>
<FooterSection/>
</>
}