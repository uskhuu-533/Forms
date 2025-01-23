"use client";

import { useState } from "react";

const NameForm = (props) => {
  const [url, setUrl] = useState("image.png");
  const { forms, setForms } = props;
  const handleInputChange = (e, label) => {
    const value = e.target.value;
    const list = forms.map((key) => {
      console.log(label, key.type);

      if (key.label === label) {
        return {
          ...key,
          value: value,
          error: "",
        };
      } else {
        return key;
      }
    });
    setForms(list);
    forms.map((key) => {
      if (
        key.label === label &&
        key.type === "file" &&
        key.label !== "Date of birth date" &&
        key.label !== "Date of birth file"
      ) {
        const file = e.target.files ? e.target.files[0] : "";
        const Url = URL.createObjectURL(file);
        setUrl(Url);
        return {
          ...key,
          value: value,
          error: "",
        };
      } else {
        return key;
      }
    });
  };
  const deleteImage = () => {
    const list = forms.map((key) => {
      if (key.type == "file") {
        return {
          ...key,
          value: "",
        };
      } else {
        return key;
      }
    });
    setForms(list);
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
              value={el.value}
              className={`p-3 border rounded-lg enabled:hover:border-[#0CA5E9]`}
              style={{
                borderColor: el.error == "error" ? "red" : "#CBD5E1",
                padding: el.type == "file" ? "110px" : "12px",
              }}
            />
            {el.type == "file" && (
              <img
                src={url}
                className="w-full h-[250px] rounded-lg hidden top-[23px]"
                style={{
                  position: el.value !== "" && "absolute",
                  display: el.value !== "" && "block",
                }}
              />
            )}
            {el.type == "file" && (
              <div
                onClick={deleteImage}
                className="absolute w-3 h-3 top-7 right-2 bg-black rounded-full"
              ></div>
            )}
            {el.error == "error" ? (
              <label className="text-red-400 text-sm">{el.errorText}</label>
            ) : null}
          </div>
        ))}
      </form>
    </div>
  );
};
export default NameForm;
