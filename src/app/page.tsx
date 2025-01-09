"use client"
import Brands from "@/components/Brands";
import FontShowcase from "@/components/Fonts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";



export default function Home() {
  return (
        <main>
        <Header/>
         <Hero/>
         <FontShowcase/>
         <Brands/>
         </main>
  );
}
