"use client";
import React from "react";
import Image from "next/image";

const visions = [
  {
    heading: "Deliver High-Quality Products &Services",
    description:
      "Consistently exceed customer expectations through excellence in every offering",
  },
  {
    heading: "Build Strong, Customer-Focused Brands",
    description:
      "Create brands that resonate with customer needs and aspirations",
  },
  {
    heading: "Expand Responsibly Across Kerala",
    description: `Pursue strategic growth while maintaining operational
excellence and quality standards`,
  },
  {
    heading: `Uphold Transparency, Trust &
Professionalism`,
    description: `
Maintain integrity in all business practices and
stakeholder relationships
`,
  },
];

const founders = [
  {
    image: "/ceo/manager.jpeg",
    name: "Anas",
    position: "Managing Director",
  },
];

const founders2 = [
  {
    image: "/ceo/chairman.jpeg",
    name: "Nihal",
    position: "Founder & Chairman",
  },
];

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden z-0 bg-muted">
      <div className="relative overflow-hidden ">
        {/* <div className="absolute opacity-50 Dentobees-WhyChooseUs-Background-Gradient" /> */}
        <div className="absolute -mt-10 -md:mt-16 -xl:mt-20 Dentobees-WhyChooseUs-TopBackground" />

        <div className="absolute Dentobees-Pages-Background -z-10"></div>
        <div className="pt-[110px] md:pt-[100px] xl:pt-[120px] mt-3 flex flex-col gap-10 md:gap-16 xl:gap-[80px]">
          <div className="Common-padding flex flex-col items-center">
            <hr />
            <div className="w-full max-w-[1700px] flex flex-col gap-10 md:gap-16 xl:gap-[80px]">
              <div className="flex flex-col sm:flex-row gap-5 md:gap-[30px] sm:items-center sm:justify-between ">
                <div className="flex flex-col gap-5 lg:gap-[30px]">
                  <h3 className="w-full  sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[500px]  Page-Heading text-left">
                    Golden Cup
                  </h3>
                  <p className="w-full sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[500px]    pr-[5%] sm:pr-[0%]">
                    Founded in 2017, Golden Cup Premium Bridal Jewellery has
                    grown into one of Kerala’s most trusted bridal jewellery
                    rental brands. What began as a vision to make bridal luxury
                    smarter and more accessible has today become a statewide
                    presence.
                  </p>
                  <p className="w-full sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[500px]    pr-[5%] sm:pr-[0%]">
                    With 10 branches across Kerala, a dedicated team of 250+
                    professionals, and the trust of 3 lakh+ happy brides, Golden
                    Cup stands for elegance, reliability, and modern bridal
                    choices.
                  </p>
                  <p className="w-full sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[500px]    pr-[5%] sm:pr-[0%]">
                    We offer carefully curated premium bridal jewellery, backed
                    by strict hygiene standards, professional styling support,
                    and a seamless rental experience. From weddings to
                    receptions and special occasions, Golden Cup helps brides
                    look royal—without the burden of ownership.
                  </p>

                  <p className="w-full sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[500px]    pr-[5%] sm:pr-[0%]">
                    <b>
                      Golden Cup is not just a rental brand. It is a smarter way
                      to celebrate bridal luxury.
                    </b>
                  </p>
                </div>
                <div className="rounded-[16px]">
                  <Image
                    src="/shop.avif"
                    alt="Image"
                    width={628}
                    height={524}
                    className="w-full md:w-[250px] xl:w-[400px] lg:w-[300px] rounded-[16px]"
                  />
                </div>
              </div>
              <hr />

              <div
                className="bg-[linear-gradient(135deg,_#004d4d_65%,_#6b8f75_100%,_#003737_40%,_#001e1e_10%)] py-8 md:py-10 xl:py-[60px]  px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[60px] flex flex-row items-center justify-between gap-7 lg:gap-[40px] md:flex-row gap-[30px] items-center 
               backdrop-blur-[18%] rounded-[16px]"
              >
                <div className="hidden md:flex rounded-[16px]">
                  <Image
                    src="/5.PNG"
                    alt="Image"
                    width={205}
                    height={185}
                    className="md:w-[100px] lg:w-[150px] xl:w-[255px] rounded-[16px]"
                  />
                </div>
                <div className=" md:w-[400px] lg:w-[450px] xl:w-[500px] flex flex-col gap-5 xl:gap-[36px] text-white">
                  <div className="flex flex-col gap-5 items-center md:items-start">
                    <h5 className="font-bold Sub-heading ">Our Vision</h5>

                    <p className="flex flex-col gap-5 font-normal Normal-text text-justify">
                      <span>
                        To become a trusted and respected business group
                        delivering premium products and services while creating
                        lasting value for customers and communities across
                        Kerala and beyond.
                      </span>
                    </p>
                  </div>
                  <div className="md:hidden rounded-[16px]">
                    <Image
                      src="/3.PNG"
                      alt="Dentobees Mission"
                      width={405}
                      height={385}
                      className="w-[400px] rounded-[16px]"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[linear-gradient(135deg,_#004d4d_65%,_#6b8f75_100%,_#003737_40%,_#001e1e_10%)] py-8 md:py-10 xl:py-[60px] px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[60px] flex flex-col gap-7 lg:gap-[40px] items-center  backdrop-blur-[18%] rounded-[16px]">
                <h3 className="font-bold Sub-heading text-white">
                  Our Mission
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-7 xl:gap-[60px] w-full">
                  {visions.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row md:flex-col gap-[14px] items-start sm:items-center"
                    >
                      <div className="shrink-0">
                        <Image
                          src="/target.png"
                          alt="Image"
                          width={102}
                          height={102}
                          className="w-[50px] lg:w-[72px]"
                        />
                      </div>
                      <div className="flex flex-col gap-3 md:gap-[18px] items-start md:items-center text-white">
                        <p className="font-bold Small-heading">
                          {item.heading}
                        </p>
                        <p className="font-normal Normal-text text-left md:text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="flex flex-col md:flex-row gap-[30px]  items-center justify-between">
                <div className="hidden md:flex rounded-[16px]">
                  <Image
                    src="/5.PNG"
                    alt="Image"
                    width={305}
                    height={285}
                    className="md:w-[150px] lg:w-[200px] xl:w-[405px] rounded-[16px]"
                  />
                </div>
                <div className=" md:w-[400px] lg:w-[450px] xl:w-[500px] flex flex-col gap-5 xl:gap-[36px]">
                  <div className="flex flex-col gap-5 items-center md:items-start">
                    <h5 className="font-bold Sub-heading ">Our Mission</h5>
                    <div className="md:hidden rounded-[16px]">
                      <Image
                        src="/3.PNG"
                        alt="Dentobees Mission"
                        width={405}
                        height={385}
                        className="w-[400px] rounded-[16px]"
                      />
                    </div>
                  </div>
                  <p className="flex flex-col gap-5 font-normal Normal-text text-justify">
                    <span>
                      Our mission is to transform dental clinic operations with
                      intelligent, cloud-based solutions that automate routine
                      tasks, optimize patient engagement, and provide deep
                      operational insights.
                    </span>
                    <span>
                      We are committed to making clinic management simpler,
                      smarter, and more human-centric helping dental
                      professionals focus on what truly matters: exceptional
                      patient outcomes and sustainable clinic growth.
                    </span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="relative  overflow-hidden z-0  ">
            <div
              className=" py-8 md:py-10 xl:py-[60px] bg-background  px-3 sm:px-5 md:px-[30px] lg:px-[50px] xl:px-[60px] flex flex-col items-center
             justify-between gap-7 lg:gap-[40px] md:flex-row gap-[30px] items-center  backdrop-blur-[18%]"
            >
              <div className="absolute Dentobees-Founders-Background -z-10 "></div>
              <div className="Common-padding py-7 xl:py-[60px] flex flex-col items-center">
                <div className="w-full max-w-[1700px] flex flex-col xl:flex-row gap-5 md:gap-[30px] items-center justify-between ">
                  <div className="xl:w-[480px] flex flex-col gap-[14px] items-center xl:items-start">
                    <h3 className="font-bold Sub-heading">
                      Chairman's Message
                    </h3>
                    <p className="flex flex-col gap-2 font-normal Normal-text text-justify">
                      <span>
                        Golden Cup Group was founded in 2017 with a clear
                        commitment to quality, trust, and long-term value
                        creation. What began as a premium rental jewellery
                        venture has evolved into a diversified business group
                        with a strong presence across Kerala.
                      </span>
                      <span>
                        Our expansion into bridal wear, women’s fashion, and
                        construction reflects our focus on meeting changing
                        customer needs while maintaining the highest standards
                        of professionalism and integrity. This journey has been
                        driven by the trust of our customers, the dedication of
                        our team, and the continued support of our partners.
                      </span>
                      <span>
                        As we move forward, Golden Cup Group remains focused on
                        responsible growth, strengthening our brands, and
                        delivering consistent excellence across all business
                        verticals.
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 xl:gap-[60px] items-start">
                    {founders2.map((item, index) => (
                      <div
                        key={index}
                        className="max-w-[315px] flex flex-col gap-[18px]"
                      >
                        <div className="rounded-[16px]">
                          <Image
                            src={item.image}
                            alt="Founders"
                            width={275}
                            height={300}
                            className="w-[315px] rounded-[16px]"
                          />
                        </div>
                        <p className="flex flex-col gap-2.5 font-bold">
                          <span className="Small-heading  capitalize">
                            {item.name}
                          </span>
                          <span className="Small-text">{item.position}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Common-padding py-7 xl:py-[60px] flex flex-col items-center">
                <div className="w-full max-w-[1700px] flex flex-col xl:flex-row gap-5 md:gap-[30px] items-center justify-between ">
                  <div className="xl:w-[480px] flex flex-col gap-[14px] items-center xl:items-start">
                    <h3 className="font-bold Sub-heading">
                      Managing Director’s Message
                    </h3>
                    <p className="flex flex-col gap-2 font-normal Normal-text text-justify">
                      <span>
                        Golden Cup Group’s growth is driven by a clear vision,
                        strong systems, and an unwavering focus on quality and
                        customer satisfaction. My role has been centered on
                        strengthening operations, building efficient processes,
                        and ensuring consistent standards across all business
                        verticals.
                      </span>

                      <span>
                        With a diversified presence in premium rental jewellery,
                        bridal wear, women’s fashion, and construction, we
                        continue to grow by understanding customer needs,
                        empowering our teams, and maintaining transparency in
                        every aspect of our operations. As we expand across
                        Kerala, our focus remains on strengthening our brands
                        while preserving the trust we have earned.
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 xl:gap-[60px] items-start">
                    {founders.map((item, index) => (
                      <div
                        key={index}
                        className="max-w-[315px] flex flex-col gap-[18px]"
                      >
                        <div className="rounded-[16px]">
                          <Image
                            src={item.image}
                            alt="Founders"
                            width={275}
                            height={300}
                            className="w-[315px] rounded-[16px]"
                          />
                        </div>
                        <p className="flex flex-col gap-2.5 font-bold">
                          <span className="Small-heading  capitalize">
                            {item.name}
                          </span>
                          <span className="Small-text">{item.position}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="Common-padding py-7 xl:py-[60px] flex flex-col gap-5 lg:gap-[25px] items-center bg-gradient-to-b from-[#000000] to-[#12A87F]">
            <h3 className="font-bold Sub-heading ">Our Team</h3>
            <div>
              <Image src="/7.PNG" alt="Dentobees Team" width={1250} height={485} className="w-[1250px] rounded-[16px]" />
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
