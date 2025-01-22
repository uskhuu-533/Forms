"use client"

import { useState } from "react";
import Header from "@/components/Header";
import NameForm from "@/components/Name-Form";
import DateProlife from "@/components/DateProlife";
import Footer from "@/components/Footer";
 const Thirdpage = (props) => {
    const {setPage, page} = props
    const [forms, setForms] = useState(DateProlife);
    console.log(forms)
    return(
        <div className="w-screen h-screen flex justify-center items-center bg-[#F4F4F4]">
      <div className="w-[480px] min-h-[655px] bg-[#FFFFFF] rounded-[8px] p-8 flex justify-between flex-col gap-3 ">
        <div className="flex-grow min-h-[385px] flex flex-col gap-4">
         <Header />
       <NameForm forms={forms} setForms={setForms} page={page}/>
        </div>
       <Footer forms={forms} setForms={setForms} setPage={setPage} page={page}/>
      </div>
    </div>
    )
 }
 export default Thirdpage