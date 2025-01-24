"use client";

import { useState } from "react";

import Firstpage from "../pages/Firstpage";
import SecondPage from "../pages/Secondpage";
import Thirdpage from "../pages/Thirdpage";
import FourthPage from "@/pages/Fourthpage";

export default function Home() {
  const [page, setPage] = useState (1)
  return (
    <>
    {page === 1 &&(<Firstpage setPage={setPage}  page={page}/>)}
    {page === 2 &&(<SecondPage setPage={setPage} page={page}/>)}
    {page == 3 &&(<Thirdpage setPage={setPage} page={page}/> )}
    {page == 4 && (<FourthPage/>)}
    </>
  );
}
