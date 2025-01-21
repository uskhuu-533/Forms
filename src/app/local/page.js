"use client";

import { useState } from "react";
import EmailData from "@/components/EmailForms";
import FooterE from "@/components/FooterEmail";
import Header from "@/components/Header";
import NameForm from "@/components/Name-Form";

export default function Home() {
  const [forms, setForms] = useState(EmailData);


  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F4F4F4]">
      <div className="w-[480px] min-h-[655px] bg-[#FFFFFF] rounded-[8px] p-8 flex justify-between flex-col gap-3">
        <div className="w-full min-h-[385px] flex flex-col gap-4">
         <Header />
       <NameForm forms={forms} setForms={setForms}/>
        </div>
       <FooterE forms={forms} setForms={setForms}/>
      </div>
    </div>
  );
}
