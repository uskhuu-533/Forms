import Image from "next/image";
const FourthPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#F4F4F4]">
      <div className="w-[480px]  bg-[#FFFFFF] rounded-[8px] p-8 flex justify-between flex-col">
        <div className="w-full  flex flex-col gap-4">
          <div className="h-32 w-full">
            <Image src="/MainLogo.webp" alt="a" width={60} height={60} />
            <p className="text-[#202124] font-inter text-[26px] font-extrabold">
            You're All Set 🔥
            </p>
            <p className="text-[#8E8E8E] text-[18px] font-[100]">
            We have received your submission. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourthPage;
