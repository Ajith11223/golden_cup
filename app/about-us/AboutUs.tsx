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
                    <h3 className="w-full sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[500px] Page-Heading text-left">
                      Group Overview
                    </h3>
                    <p className="w-full sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[500px]    pr-[5%] sm:pr-[0%]">
                      Golden Cup Group is a diversified business conglomerate
                      established in 2017, with a strong operational presence
                      across Kerala. Over the past seven years, the group has
                      built an exceptional reputation in the lifestyle and
                      construction sectors. Our portfolio includes premium
                      rental jewellery, bridal outfit rentals, women's garment
                      retail, proprietary women's clothing brands, and
                      comprehensive construction services. Through a
                      customer-centric approach and unwavering commitment to
                      quality standards, Golden Cup Group continues to achieve
                      steady growth throughout the state.{" "}
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
                          delivering premium products and services while
                          creating lasting value for customers and communities
                          across Kerala and beyond.
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
                          Golden Cup Group began its journey in 2017 with a
                          clear vision4to build businesses based on quality,
                          trust, and long-term value. From a single premium
                          rental jewellery venture, the group has grown into a
                          multi-entity organization serving customers across
                          Kerala.
                        </span>
                        <span>
                          Our expansion into bridal wear, women's fashion, and
                          construction reflects our commitment to meeting
                          evolving customer needs while maintaining high
                          standards of professionalism and integrity. This
                          growth has been made possible by the trust of our
                          customers, the dedication of our team, and the support
                          of our partners.
                        </span>
                        <span>
                          As we move forward, our focus remains on responsible
                          growth, strengthening our brands, and delivering
                          excellence across every business vertical.
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
                <div className="relative overflow-hidden z-0">
                  <div className="absolute Dentobees-Founders-Background -z-10"></div>

                  <div className="Common-padding py-7 xl:py-[60px] flex flex-col items-center">
                    <div className="w-full max-w-[1700px] flex flex-col xl:flex-row gap-5 md:gap-[30px] items-center justify-between">
                      {/* LEFT – IMAGES (same width as before) */}
                      <div className="flex flex-col sm:flex-row gap-5 lg:gap-10 xl:gap-[60px] items-start order-2 xl:order-1">
                        {founders.map((item, index) => (
                          <div
                            key={index}
                            className="max-w-[315px] flex flex-col gap-[18px]"
                          >
                            <div className="rounded-[16px]">
                              <Image
                                src={item.image}
                                alt={`${item.name} - ${item.position}`}
                                width={275}
                                height={300}
                                className="w-[275px] rounded-[16px]"
                              />
                            </div>

                            <p className="flex flex-col gap-2.5 font-bold">
                              <span className="Small-heading capitalize">
                                {item.name}
                              </span>
                              <span className="Small-text">
                                {item.position}
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* RIGHT – TEXT (EXACT SAME WIDTH AS ORIGINAL) */}
                      <div className="xl:w-[480px] flex flex-col gap-[14px] items-center xl:items-start order-1 xl:order-2">
                        <h3 className="font-bold Sub-heading">
                          Meet The Founders
                        </h3>

                        <p className="flex flex-col gap-2 font-normal Normal-text text-justify">
                          <span>
                            Golden Cup Group stands today as a result of vision,
                            dedication, and a strong commitment to quality and
                            customer satisfaction. Since joining the leadership,
                            my focus has been on strengthening our operations,
                            building efficient systems, and ensuring consistent
                            standards across all our business entities.
                          </span>

                          <span>
                            Our group operates in diverse sectors including
                            premium rental jewellery, bridal outfit rentals,
                            women's fashion retail, clothing brands, and
                            construction. Managing such a diversified portfolio
                            requires discipline, teamwork, and a clear
                            operational strategy.
                          </span>
                          <span>
                            I strongly believe that sustainable growth comes
                            from understanding customer needs, empowering our
                            employees, and maintaining transparency in
                            everything we do. With a growing presence across
                            Kerala, our aim is to further strengthen our brands
                            while maintaining the trust and loyalty we have
                            earned.
                          </span>
                        </p>
                      </div>
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
