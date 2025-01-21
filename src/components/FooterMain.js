import Foward from "./Vector"
import Link from "next/link";
const Footer = (props)=> {
    const {forms, setForms} =props
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
        <Link href="/local">
        <button
          onClick={inputCheck}
          className="bg-[#121316] w-full h-11 text-[#FFFFFF] font-extrabold rounded-md flex justify-center items-center gap-4"
        >
          <p>Continue 1/3</p>
          <Foward color="#FFFFFF" />
        </button>
      </Link>
    )
}
export default Footer