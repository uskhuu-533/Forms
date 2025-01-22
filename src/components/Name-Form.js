import { useEffect } from "react";

const NameForm = (props)=> {
    const {forms, setForms, page} = props;
    const handleInputChange = (e, label) => {
        const value = e.target.value;
        const list = forms.map((key) => {
          if (key.label === label) {
            return {
              ...key,
              value: value,
              error: ""
            };
          }else {
            return key;
          }
        });
        setForms(list);
 
      };
      function valid(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    return (
        <div className="w-full h-72">
        <form className="gap-2 flex flex-col">
          {forms.map((el) => (
            <div key={el.label} className="gap-[2px] flex flex-col">
              <label className="text-sm">{el.label}*</label>
              <input
                onChange={(e) => handleInputChange(e, el.label)}
                type={el.type}
                placeholder={el.placeHolder}
                value={el.value}
                className={`p-3 border rounded-lg enabled:hover:border-[#0CA5E9]`}
                style={{borderColor: el.error == "error" ? "red" : "#CBD5E1",
                  padding: el.type == "file" ? "110px" : "12px"  
                }}
              />
              {el.type == "file" && (<img className="w-full h-full object-cover" src={URL.revokeObjectURL(el.value)} />)}
              {el.error == "error" ? (
                <label className="text-red-400 text-sm">
                  {el.errorText}
                </label>
              ):null}
              
            </div>
          ))}
        </form>
      </div>
    )
}
export default NameForm