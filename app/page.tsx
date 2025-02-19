'use client'

import { useState, useEffect } from "react";
import { HyperText } from "@/components/magicui/hyper-text";

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
      <HyperText key={key}>Coming Soon</HyperText>
    </div>
  );
}