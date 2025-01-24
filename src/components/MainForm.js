"use client";

import { useEffect, useState } from "react";

const MainForm = ({ forms, setForms }) => {
  const [url, setUrl] = useState("image.png");
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

    if (e.target.type === "file" && value instanceof File) {
      const fileUrl = URL.createObjectURL(value);
      setUrl(fileUrl);

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        localStorage.setItem(label, base64);
        setFormData((prevData) => ({
          ...prevData,
          [label]: base64,
        }));
      };
      reader.readAsDataURL(value);
    } else {
      localStorage.setItem(label, value);
      setFormData((prevData) => ({
        ...prevData,
        [label]: value,
      }));
    }

    const updatedForms = forms.map((key) =>
      key.label === label
        ? { ...key, value: value instanceof File ? value.name : value, error: "", error1: "" }
        : key
    );
    setForms(updatedForms);
  };

  const deleteImage = () => {
    const updatedForms = forms.map((key) => {
      if (key.type === "file") {
        localStorage.removeItem(key.label);
        return { ...key, value: "" };
      }
      return key;
    });
    setForms(updatedForms);
    setFormData((prevData) => ({ ...prevData, "Profile image": "" }));
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
              value={el.type === "file" ? undefined : formData[el.label] || ""}
              defaultValue={el.type === "file" ? formData[el.label] || "" : undefined}
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
