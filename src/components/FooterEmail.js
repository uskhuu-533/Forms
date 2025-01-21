import Back from "./Back";
import Foward from "./Vector";
const FooterE = (props)=> {
    const {forms, setForms} = props;
    const inputCheck = () => {
        const list = forms.map((key) => {
          if (key.value == "") {
            return {
              ...key,
              color: "red-400",
            };
          } else {
            return key;
          }
        });
        setForms(list);
      };
    return(
        <div className="flex justify-between w-full">
        <div
          className="w-[31%] bg-[#FFFFFF] border-[#CBD5E1] border rounded-md flex justify-center items-center gap-4 "
        
       ><Back /> <p></p></div>
        <button
        onClick={inputCheck} 
        className="bg-[#121316] w-[67%] h-11 text-[#FFFFFF] font-extrabold rounded-md flex justify-center items-center gap-4">
             <p>Continue 1/3</p>
             <Foward color="#FFFFFF"/>
        </button>
      </div>
    )
}
export default FooterE