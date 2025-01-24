"use client";

import { useEffect, useState } from "react";
import EmailData from "@/components/EmailForms";
import Header from "@/components/Header";
import MainForm from "@/components/1";
import ButtonCont from "@/components/ButtonCont";

export default function SecondPage(props) {
  const { setPage, page } = props;
  const [forms, setForms] = useState(EmailData);
  useEffect(() => {
    const forms1 = JSON.stringify(forms);
    localStorage.setItem("form2", forms1);
  }, [forms]);
  
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F4F4F4]">
      <div className="w-[480px] min-h-[655px] bg-[#FFFFFF] rounded-[8px] p-8 flex justify-between flex-col gap-3 ">
        <div className="flex-grow min-h-[385px] flex flex-col gap-4">
          <Header />
          <MainForm forms={forms} setForms={setForms} page={page}/>
        </div>
        <ButtonCont
          forms={forms}
          setForms={setForms}
          setPage={setPage}
          page={page}
        />
      </div>
    </div>
  );
}
