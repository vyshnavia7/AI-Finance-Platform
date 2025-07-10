"use client"; //frontend-client component
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
function hero() {
  const imageRef = useRef();
  useEffect(() => {
    const imgEle = imageRef.current;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        imgEle.classList.add("scrolled");
      } else {
        imgEle.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title mb-5">
          Manages your Finances <br />
          with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel placeat
          assumenda fuga culpa id perspiciatis?
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 mb-5">
              Get Started
            </Button>
          </Link>
          <Link href="#">
            <Button size="lg" className="px-8 wd mb-5" variant="outline">
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <div ref={imageRef} className="hero-image">
          <Image
            src="/DALL·E 2025-02-17 14.50.11 - A futuristic AI robot assisting a person in managing finances. The robot is sleek, with a glowing interface, pointing at a holographic financial dashb.webp"
            width={1200}
            height={600}
            alt=""
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
export default hero;
