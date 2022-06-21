import Logo from "assets/logo.svg";
import Hand from "assets/hand.svg";

export const Header = () => {
  return (
    <div>
      <div className="bg-white w-full md:h-[45px] h-[20px] z-10 relative "></div>
      <div className="lg:px-[60px] px-[25px] flex justify-between w-full">
        <Logo />
        <div className="-mt-[60px] z-0 hover:-mt-[0px] hover:-mb-[60px] cursor-pointer transition-all ease-in-out ">
          <Hand />
        </div>
      </div>
      <div className="w-full mt-[150px] lg:text-[64px] text-[40px] lg:ml-60 ml-[25px] font-fragile ">
        <h1>
          This is{" "}
          <span className="underline decoration-[#FF5C00]">Fragile studio</span>
        </h1>
        <h1>a creative & code duo</h1>
      </div>
    </div>
  );
};
