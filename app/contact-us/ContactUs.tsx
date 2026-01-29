"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactUs = () => {


  const branchData = [
    {
      img:"/branch/calicut.jpeg",
      branch:"Calicut",
        "num1": "+91 7558 093 998",
    "num2": "+91 9947 493 998",
    body: "Mavoor Rd, near New Kalyan Jewellery, Parayancheri, Kottooli, Kozhikode, Kerala 673016",

    },
    {
      img:"/branch/edappal.jpeg",
       branch:"Edappal",
         "num1": "+91 9633 163 998",
    "num2": "+91 9746 373 998",
    body: "Al-Madeena Complex, near State Bank of India, Edappal, Kerala 679576",

    },
    {
      img:"/branch/kannur.jpeg",
       branch:"Kannur",
          "num1": "+91 7907 489 939",
    "num2": "+91 9633 241 074",
    body: "Junction, near NRE Electronics, Thana, Kannur, Kerala 670012",

    },
    {
      img:"/branch/kollam.jpeg",
       branch:"Kollam",
        "num1": "+91 9746 593 998",
    "num2": "+91 9895 693 998",
    body: "Vadakkavila, Polayathodu, Kollam, Kerala 691021",

    },
    {
      img:"/branch/kottakkal.jpeg",
       branch:"kottakal",
          "num1": "+91 9605 093 998",
    "num2": "+91 8606 093 998",
    body: "Near Thaif Womens Mall, Main Road, Kottakkal, Kerala 676503",

    },
    {
      img:"/branch/mgroad.jpeg",
       branch:"Kochi - (MG road)",
        "num1": "+91 62384 73294",
    "num2": "+91 97465 23998",
    body: "Filler No: 709, Chenchery Building, Mahatma Gandhi Rd, Ground Junction, Ernakulam South, Kochi, Ernakulam, Kerala 682011",

    },
    {
      img:"/branch/thrissur.jpeg",
       branch:"thrissur",
       "num1": "+91 9895 693 998",
       "num2": "+91 9746 594 998",
       "num3": "+91 7994 983 998",
    body: "First Floor, Chettupuzha Tower, Sona Hotels, Sankaraiyyer Road, Thrissur, Kerala 680004",

    },
    {
      img:"/branch/tirur.jpeg",
       branch:"tirur",
        "num1": "+91 9037 093 998",
    "num2": "+91 7736 057 892",
    body: "Main Road, opposite Family Wedding Center, Pan Bazaar, Tirur, Kerala 676101",

    },
    {
      img:"/branch/tvm.jpeg",
       branch:"Trivandrum",
       num1:"",
       num2:"",
    body: "",

    },
   

  ]
  return (
    <div className="relative overflow-hidden z-0 ">
      <div className="relative overflow-hidden ">
        {/* <div className="absolute opacity-50 Dentobees-WhyChooseUs-Background-Gradient" /> */}
        <div className="absolute -mt-10 -md:mt-16 -xl:mt-20 Dentobees-WhyChooseUs-TopBackground" />

        <div className="absolute Dentobees-Pages-Background -z-10"></div>
        <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
        {/* Top Content */}
        <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
          <div className="md:mb-0 mb-4">
            <h2 className="text-white  font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">
              OUR BRANCHES
            </h2>
            <p className="text-white text-lg font-normal leading-7 mb-7 md:text-left text-center">
            Golden Cup proudly serves brides across Kerala withour exquisite collection and exceptional service.
            Visit us at any of our locations:
            </p>
            <div className="flex md:items-center md:justify-start justify-center">
              {/* <button className="w-36 h-12 rounded-full bg-indigo-600 transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6">
                Contact Us
              </button> */}
                <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="https://wa.me/918089933998?text=I%20would%20like%20to%20know%20more%20about%20Products">
                        <span className="text-nowrap">
                          Contact Us
                        </span>
                      </Link>
                    </Button>
                  </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-l-2 md:border-indigo-600 border-white px-10 py-6">
            <div className="mb-8">
              <h6 className="text-white text-sm font-medium leading-5 pb-3 md:text-start text-center">
                Email Address
              </h6>
              <h3 className="text-white text-xl font-semibold leading-8 md:text-start text-center">
              goldencupheadoffice@gmail.com
              </h3>
            </div>
            <div>
              <h6 className="text-white text-sm whitespace-nowrapwrap font-medium leading-5 pb-3 md:text-start text-center">
                Phone Number
              </h6>
              <h3 className="text-white text-xl whitespace-nowrap font-semibold leading-8 md:text-start text-center">
              +91 7736 206 117  <br />
              +91 8089 651 212
              </h3>
            </div>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

{
  branchData?.map((item)=>{
    return(
      <>
      <div className="h-96 relative flex justify-center rounded-md transition-transform duration-500 hover:scale-105">
            <div className="w-full h-full absolute " />
            <img
              src={item?.img}
              alt="United Kingdom"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute bottom-0 mb-6 text-center px-6">
              <h5 className="text-white uppercase text-lg font-semibold leading-7 mb-2">
                {item?.branch}
              </h5>
             
          <p className="text-white text-base font-medium leading-6">
            {item?.body}
          </p>
          <p className="text-white text-base font-medium leading-6">
                {
                  item?.num1
                }, <br /> {
                  item?.num2
                }
              </p>
            </div>
          </div>
      </>
    )
  })
}

          {/* Card 1 */}
          

          

          
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default ContactUs;
