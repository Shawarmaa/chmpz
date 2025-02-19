'use client'

import { useState, useEffect } from "react";
import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";
import { Tilt } from "@/components/ui/tilt";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Change key to force re-render
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Tilt  isRevese>
        <Image width={200} height={200} alt="Thinking monkey pic" src={"/image.png"} className="" />
      </Tilt>
      <HyperText key={key}>Coming Soon</HyperText>
      <ModeToggle />
    </div>
  );
}