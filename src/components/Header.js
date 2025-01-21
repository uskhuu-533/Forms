
import Image from "next/image";
const Header = () => {
  return (
    <div className="h-32 w-full">
      <Image src="/MainLogo.webp" alt="a" width={60} height={60} />
      <p className="text-[#202124] font-inter text-[26px] font-extrabold">
        Join us!😎
      </p>
      <p className="text-[#8E8E8E] text-[18px] font-[100]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
export default Header;
