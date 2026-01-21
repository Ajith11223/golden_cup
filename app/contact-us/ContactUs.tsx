"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactUs = () => {
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
              Get In Touch
            </h2>
            <p className="text-white text-lg font-normal leading-7 mb-7 md:text-left text-center">
              Whether you have a concern or simply want to say hello, We are here
              to facilitate communication with you.
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
                      <Link href="#link">
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
                pagedone@gmail.com
              </h3>
            </div>
            <div>
              <h6 className="text-white text-sm font-medium leading-5 pb-3 md:text-start text-center">
                Phone Number
              </h6>
              <h3 className="text-white text-xl font-semibold leading-8 md:text-start text-center">
                470-601-1911
              </h3>
            </div>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {/* Card 1 */}
          <div className="h-96 relative flex justify-center">
            <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50" />
            <img
              src="https://pagedone.io/asset/uploads/1696246502.png"
              alt="United Kingdom"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 mb-6 text-center px-6">
              <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                United Kingdom
              </h5>
              <p className="text-white text-base font-medium leading-6">
                123 High Street, Westminster, London
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-96 relative flex justify-center">
            <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50" />
            <img
              src="https://pagedone.io/asset/uploads/1696246522.png"
              alt="Germany"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 mb-6 text-center px-6">
              <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                Germany
              </h5>
              <p className="text-white text-base font-medium leading-6">
                101 Unter den Linden, Mitte <br /> District, Berlin
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-96 relative flex justify-center">
            <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50" />
            <img
              src="https://pagedone.io/asset/uploads/1696246551.png"
              alt="France"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 mb-6 text-center px-6">
              <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                France
              </h5>
              <p className="text-white text-base font-medium leading-6">
                456 Rue de la Paix, 8th Arrondissement, Paris
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="h-96 relative flex justify-center">
            <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50" />
            <img
              src="https://pagedone.io/asset/uploads/1696246565.png"
              alt="Switzerland"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 mb-6 text-center px-6">
              <h5 className="text-white text-lg font-semibold leading-7 mb-2">
                Switzerland
              </h5>
              <p className="text-white text-base font-medium leading-6">
                987 Bahnhofstrasse, Zurich <br /> City Center, Zurich
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default ContactUs;
