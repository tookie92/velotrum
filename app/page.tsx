'use client'
import Header from "@/components/section/Header";
import MonCanvas from "./components/MonCanvas";
import Hero from "@/components/section/Hero";
import AboutUs from "@/components/section/AboutUs";
import ContactUs from "@/components/section/ContactUs";
import { useLayoutEffect } from "react";



export default function Home() {
 
  return (
   
      <>
      <div className='h-screen fixed w-full top-0 '>
        <MonCanvas/>
      </div>
     
     
    </>
  )
}
