"use client";

import { useEffect, useState } from "react";

const MainForm = (props) => {
  const [url, setUrl] = useState("image.png");
  const { forms, setForms } = props;
  const [formData, setFormData] = useState({});

  useEffect(() => {

    const initializedData = forms.reduce((acc, key) => {
      const value = localStorage.getItem(key.label) || "";
      acc[key.label] = value;
      return acc;
    }, {});
    setFormData(initializedData);
  }, [forms]);

  const handleInputChange = (e, label) => {
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;

    const updatedForms = forms.map((key) => {
      if (key.label === label) {
        localStorage.setItem(label, value instanceof File ? value.name : value);
        return {
          ...key,
          value: value instanceof File ? value.name : value,
          error: "",
          error1: "",
        };
      }
      return key;
    });

    setForms(updatedForms);

    if (e.target.type === "file" && value instanceof File) {
      const fileUrl = URL.createObjectURL(value);
      setUrl(fileUrl);
      localStorage.setItem("Profile image", fileUrl);
    }

    setFormData((prevData) => ({
      ...prevData,
      [label]: value instanceof File ? value.name : value,
    }));
  };

  const deleteImage = () => {
    const updatedForms = forms.map((key) => {
      if (key.type === "file") {
        localStorage.removeItem(key.label);
        return {
          ...key,
          value: "",
        };
      }
      return key;
    });
    setForms(updatedForms);
    setUrl("image.png");
  };

  return (
    <div className="w-full h-72">
      <form className="gap-2 flex flex-col">
        {forms.map((el) => (
          <div key={el.label} className="gap-[2px] flex flex-col relative">
            <label className="text-sm">{el.label}*</label>
            <input
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handleInputChange(e, el.label)}
              type={el.type}
              placeholder={el.placeHolder}
              value={formData[el.label] || ""}
              className={`p-3 border rounded-lg enabled:hover:border-[#0CA5E9]`}
              style={{
                borderColor: el.error1 === "error" ? "red" : "#CBD5E1",
                padding: el.type === "file" ? "110px" : "12px",
              }}
            />
            {el.type === "file" && el.value && (
              <img
                src={url}
                alt="Uploaded file preview"
                className="w-full h-[250px] rounded-lg"
                style={{
                  position: "absolute",
                  display: el.value !== "" ? "block" : "none",
                  top: "23px",
                }}
              />
            )}
            {el.type === "file" && el.value && (
              <div
                onClick={deleteImage}
                className="absolute w-3 h-3 top-7 right-2 bg-black rounded-full cursor-pointer"
              ></div>
            )}
            {el.error1 === "error" && (
              <label className="text-red-400 text-sm">{el.errorText}</label>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default MainForm;
