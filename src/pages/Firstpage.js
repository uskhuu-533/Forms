"use client"

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import FormsData from "@/components/FormsData";
import MainForm from "@/components/1";
import ButtonCont from "@/components/ButtonCont";
const Firstpage = (props)=> {
    const {setPage, page} = props
    const [forms, setForms] = useState(FormsData);
       useEffect(()=>{
      const forms1 = JSON.stringify(forms)
      localStorage.setItem("form1" ,forms1)
     },[forms])

    return(
        <div className="w-screen h-screen flex justify-center items-center bg-[#F4F4F4]">

        <div className="w-[480px] h-[655px] bg-[#FFFFFF] rounded-[8px] p-8 flex justify-between flex-col">
          <div className="w-full h-[385px] flex flex-col gap-4">
         <Header />
           {/* <NameForm forms={forms} setForms={setForms} page={page}/> */}
           <MainForm forms={forms} setForms={setForms} page={page}/>
          </div>
         <ButtonCont forms={forms} setForms={setForms}  setPage={setPage} page={page} />
        </div>
      </div>
    )
}
export default Firstpage