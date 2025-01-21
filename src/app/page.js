"use client";

import { useState } from "react";
import Footer from "@/components/FooterMain";
import Header from "@/components/Header";
import NameForm from "@/components/Name-Form";
import FormsData from "@/components/FormsData";

export default function Home() {
  const [forms, setForms] = useState(FormsData);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F4F4F4]">
      <div className="w-[480px] h-[655px] bg-[#FFFFFF] rounded-[8px] p-8 flex justify-between flex-col">
        <div className="w-full h-[385px] flex flex-col gap-4">
       <Header />
         <NameForm forms={forms} setForms={setForms} />
        </div>
       <Footer forms={forms} setForms={setForms}/>
      </div>
    </div>
  );
}
