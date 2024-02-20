import Image from "next/image";
import Cars from "@/components/Cars";
import { WavyBackgroundPage } from "@/components/WavyBackground";
import { SVGMaskEffect } from "@/components/SVGMaskEffect";
import { ParallaxScrollSecondPage } from "@/components/ParallaxScrollSecond";
import { HeroScroll } from "@/components/HeroScroll";

export default function Home() {
  return (
    <>
      <WavyBackgroundPage />
      <SVGMaskEffect />
      <ParallaxScrollSecondPage />
      <HeroScroll />
    </>
  );
}
