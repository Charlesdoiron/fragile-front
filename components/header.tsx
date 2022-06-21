import Logo from "assets/logo.svg";
import Hand from "assets/hand.svg";

export const Header = () => {
  return (
    <div>
      <div className="bg-white w-full h-[45px] z-10 relative "></div>
      <div className="px-[60px] flex justify-between ">
        <Logo />
        <div className="-mt-[60px] z-0 hover:-mt-[0px] cursor-pointer transition-all ease-in-out ">
          <Hand />
        </div>
      </div>
      <div className="w-full mt-[150px] text-[64px] ml-60 font-fragile ">
        <h1>
          This is{" "}
          <span className="underline decoration-[#FF5C00]">Fragile studio</span>
        </h1>
        <h1>a creative & code duo</h1>
      </div>
    </div>
  );
};
