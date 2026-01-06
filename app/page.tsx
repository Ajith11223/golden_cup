import CardSection from "@/components/CardSection";
import { ComponentExample } from "@/components/component-example";
import FAQsThree from "@/components/faq";
import Features from "@/components/feature";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/statusSection";
import Testimonials from "@/components/Testimonial";

export default function Page() {
return <>
<HeroSection/>
<Features/>
<CardSection/>
<StatsSection/>
<Testimonials/>
<FAQsThree/>
<FooterSection/>
</>
}