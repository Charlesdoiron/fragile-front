import Image from "next/image";
import Mock from "assets/mock.jpg";
import Mock2 from "assets/mock2.jpg";

export const Gallery = ({ isOpen = false }: { isOpen: boolean }) => {
  return (
    <div
      className={`bg-black p-0  w-full flex   ${
        isOpen
          ? "max-h-[600px] duration-500 min-h-[600px]"
          : "max-h-0  duration-500 none"
      }`}
    >
      <div
        className={` flex snap-x  snap-mandatory w-screen   overflow-scroll ${
          isOpen
            ? "opacity-1 duration-[800ms] translate-y-0 ease-in-out "
            : "opacity-0 duration-[100ms] -translate-y-1  ease-in-out "
        }  `}
      >
        <div className="snap-x flex snap-mandatory w-screen ">
          <div className="snap-start overflow-hidden flex-shrink-0 ">
            <Image src={Mock} alt="plaf"></Image>
          </div>
          <div className="snap-start overflow-hidden flex-shrink-0 ml-4 ">
            <Image src={Mock2} alt="plaf"></Image>
          </div>
          <div className="snap-start overflow-hidden flex-shrink-0  ml-4 ">
            <Image src={Mock} alt="plaf"></Image>
          </div>
          <div className="snap-start overflow-hidden flex-shrink-0 ml-4">
            <Image src={Mock2} alt="plaf"></Image>
          </div>
          <div className="snap-start overflow-hidden flex-shrink-0  ml-4 ">
            <Image src={Mock} alt="plaf"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
