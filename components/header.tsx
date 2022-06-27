import Logo from "assets/logo.svg";
import Hand from "assets/hand.svg";

export const Header = ({ handleDrawer }: { handleDrawer: () => void }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-white w-full md:h-[45px] h-[20px] top-0 z-10 relative "></div>
      <div className="lg:px-[52px] px-[25px] flex justify-between w-full">
        <Logo />
        <div className="-mt-[60px] z-0 hover:-mt-[0px] hover:-mb-[60px] cursor-pointer transition-all ease-in-out ">
          <Hand onClick={handleDrawer} />
        </div>
      </div>

      <div className="w-full lg:mt-[150px] mt-[90px]  lg:text-[64px] text-[40px] lg:ml-60 px-[25px] font-fragile ">
        <h1>
          This is{" "}
          <span className="underline decoration-[#FF5C00]">Fragile studio</span>
        </h1>
        <h1>a creative & code duo</h1>
      </div>
    </div>
  );
};
