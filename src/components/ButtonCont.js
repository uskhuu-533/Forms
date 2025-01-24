"use client";

import { useEffect, useState } from "react";
import Back from "./icons/Back";
import Forward from "./icons/Vector";

const ButtonCont = (props) => {
  const { forms, setForms, setPage, page } = props;
  const [pass, setPass] = useState("");
  const [formData, setFormData] = useState({});

  useEffect (() => {
    const initializedData = forms.reduce((acc, key) => {
      const value = localStorage.getItem(key.label) || "";
      acc[key.label] = value;
      return acc;
    }, {});
    setFormData(initializedData);
  }, [forms]);
  console.log(formData)
  const inputCheck = () => {
    let hasError = false;

    const updatedForms = forms.map((key) => {
      let updatedField = { ...key };

      if (key.type === "text" && key.value === "" && formData[key.label].length === 0) {
        updatedField.error1 = "error";
        hasError = true;
      }

      if (key.type === "email") {
        if (key.value.length === 0 && formData[key.label].length === 0) {
          updatedField.error1 = "error";
          updatedField.errorText = "Мэйл хаягаа оруулна уу";
          hasError = true;
        } else if (!isValidEmail(key.value) && formData[key.label].length === 0) {
          updatedField.error1 = "error";
          updatedField.errorText = "Зөв мэйл хаягаа оруулна уу";
          hasError = true;
        }
      }

      if (key.type === "tel") {
        if (key.value.length === 0 && formData[key.label].length === 0) {
          updatedField.error1 = "error";
          updatedField.errorText = "Утасны дугаараа оруулна уу.";
          hasError = true;
        } else if (key.value.length < 8 && formData[key.label].length === 0) {
          updatedField.error1 = "error";
          updatedField.errorText = "8 оронтой дугаар оруулна уу.";
          hasError = true;
        }
      }

      if (key.label === "Password") {
        setPass(key.value);
        if (key.value.length === 0 && formData[key.label].length === 0) {
          updatedField.error1 = "error";
          updatedField.errorText = "Нууц үгээ оруулна уу";
          hasError = true;
        } else if (key.value.length < 6 && formData[key.label].length === 0) {
          updatedField.error1 = "error";
          updatedField.errorText = "6 оронтой тоо оруулна уу";
          hasError = true;
        }
      }

      if (key.label === "Confirm password") {
        if (key.value !== pass && formData[key.label].length === 0) {
          updatedField.error1 = "error";
          updatedField.errorText = "Таны оруулсан нууц үг таарахгүй байна";
          hasError = true;
        } else if (key.value.length === 0 && formData[key.label].length === 0) {
          updatedField.error1 = "error";
          updatedField.errorText = "Нууц үгээ давтаж оруулна уу";
          hasError = true;
        }
      }

      if (key.type === "date") {
        const age = calculateAge(key.value);
        if (key.value.length === 0 && formData[key.label].length === 0) {
          updatedField.error1 = "error";
          updatedField.errorText = "Birth date is required";
          hasError = true;
        } else if (age < 18) {
          updatedField.error1 = "error";
          updatedField.errorText = "You must be 18 or older";
          hasError = true;
        }
      }

      if (key.type === "file" && key.value.length === 0 && formData[key.label].length === 0) {
        updatedField.error1 = "error";
        updatedField.errorText = "Profile is required";
        hasError = true;
      }

      return updatedField;
    });

    setForms(updatedForms);

    if (!hasError) {
      nextPage();
    }
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const calculateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    return today.getFullYear() - birthDate.getFullYear();
  };

  const backPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1));
  };

  const nextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1));
  };

  return (
    <div className="flex justify-between w-full gap-3">
      {page > 1 && (
        <button
          className="w-[31%] bg-[#FFFFFF] border-[#CBD5E1] border rounded-md flex justify-center items-center gap-4"
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
        <Forward color="#FFFFFF" />
      </button>
    </div>
  );
};

export default ButtonCont;
