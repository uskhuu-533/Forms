"use client"

import { useState } from "react";
import Back from "./Back";
import Foward from "./Vector";
const Footer = (props) => {
  const { forms, setForms, setPage, page } = props;
  const [pass, setPass] = useState("")
  const filterForm = forms.filter((key) => {
    if (key.error == "error") {
      return key.error == "error";
    }
  });
  const filterForm1 = forms.filter((key) => {
    if (key.error == "def") {
      return key.error == "def";
    }
  });

  const inputCheck = () => {
    const list = forms.map((key) => {
      if(key.type == "text") {
        if(key.value.length===0){
         return{
          ...key,
          error:"error"
         }
        }else{
          return key
        }
      }
        else if(key.type == "email") {
          if(key.value.length===0){
            return{
              ...key,
              error:"error",
              errorText: "Мэйл хаяг оруулна уу"
            }
          }else if (!valid(key.value)){
            return{
              ...key,
              error:"error",
              errorText:"Зөв мэйл хаягаа оруулна уу"
            }
          }else{
            return key
          }
        }else if(key.type == "tel"){
          if(key.value.length === 0){
            
            return{
              ...key,
              error:"error",
              errorText:"Утасны дугаараа оруулна уу."
            }
          }
          else if(key.value.length<8){
            return{
              ...key,
              error:'error',
              errorText:"8 оронтой дугаар оруулна уу."
            }
          }else{
            return key
          }
        }
         else if(key.label == "Password"){
            setPass(key.value)
            if(key.value.length === 0) {
              return{
                ...key,
                error:"error",
                errorText: "Нууц үгээ оруулна уу"
              }
            }else if(key.value.length<6){
              return{
                ...key,
                error:"error",
                errorText:"6 оронтой тоо оруулна уу"
              }
            }
            // else if(!passwordRegex(key.value)){
            //   return{
            //     ...key,
            //     error:"error",
            //     errorText: "Weak password"
            //   }
            // }
            else{
              return key
            }
          }else if(key.label== "Confirm password") {
            if(key.value.length === 0){
              return{
                ...key,
                error:"error",
                errorText:"Нууц үгээ давтаж оруулна уу"
              }
            }else if(key.value !== pass){
              return{
                ...key,
                error:"error",
                errorText:"Таны оруулсан нууц үг таарахгүй байна"
              }
            }else{
              return key
            }
          }else if(key.type == "date") {
            if(key.value.length === 0){
              return{
                ...key,
                error:"error",
                errorText:"Төрсөн өдрөө оруулна уу"
              }
            }else if(birthDate(key.value)<18){
              return{
                ...key,
                error:"error",
                errorText:"Та 18 ба түүнээс дээш настай байх ёстой."
              }
            }
            else{
              return key
            }
          }else if(key.type == "file"){
            if(key.value.length === 0){
             return{ 
              ...key,
              error:"error",
            }
            }else{
              return key
            }}
          else{
            return key
          }
        
        
    });
  
   setForms(list);
   nextPage()

  };
  function valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
const passwordRegex = (pass) => {
  const patter =/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/
  return patter.test(pass)
}
const birthDate = (date)=>{
  const d = new Date()
  const arr = date.split("-")
  const age = d.getFullYear()-arr[0]
  return age
}

  const backPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {

    if (filterForm.length === 0 
      && filterForm1.length === 0
    ) {
      setPage(page + 1);
      
    }
  }

  console.log(forms)
  return (
    <div className="flex justify-between w-full gap-3">
      {page === 2 && (
        <button
          className="w-[31%] bg-[#FFFFFF] border-[#CBD5E1] border rounded-md flex justify-center items-center gap-4 "
          onClick={backPage}
        >
          <Back /> <p>Back</p>
        </button>
      )}
      {page === 3 && (
        <button
          className="w-[31%] bg-[#FFFFFF] border-[#CBD5E1] border rounded-md flex justify-center items-center gap-4 "
          onClick={backPage}
        >
          <Back /> <p>Back</p>
        </button>
      )}
      <button
        onClick={inputCheck}
        className="bg-[#121316] h-11 text-[#FFFFFF] font-extrabold rounded-md flex justify-center items-center gap-4 flex-grow"
      >
        <p>Continue {page}/3</p>
        <Foward color="#FFFFFF" />
      </button>
    </div>
  );
};
export default Footer;
