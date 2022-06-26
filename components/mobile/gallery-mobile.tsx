import Image from "next/image";
import Mock from "assets/mock.jpg";
import Mock2 from "assets/mock2.jpg";

export const GalleryMobile = ({ isOpen = false }: { isOpen: boolean }) => {
  return (
    <div
      className={`bg-black p-0  w-full flex   ${
        isOpen ? "max-h-[600px] duration-500" : "max-h-0  duration-500 none"
      }`}
    >
      <div
        className={` flex snap-x mx-auto snap-mandatory   w-screen overflow-scroll ${
          isOpen
            ? "opacity-1 duration-[800ms] translate-y-0 ease-in-out h-[250px]"
            : "opacity-0 duration-[100ms] -translate-y-1  ease-in-out "
        }  `}
      >
        <div className="snap-start  flex-shrink-0 w-[90%]   flex items-center justify-center  mr-3">
          <Image src={Mock} alt="plaf" />
        </div>
        <div className="snap-start flex-shrink-0  w-[90%]  flex items-center justify-center mr-3">
          <Image src={Mock2} alt="plaf" />
        </div>
        <div className="snap-start  flex-shrink-0 w-[90%] flex items-center justify-center mr-3">
          <Image src={Mock} alt="plaf" />
        </div>
        <div className="snap-start flex-shrink-0  w-[90%] flex items-center justify-center mr-3">
          <Image src={Mock2} alt="plaf" />
        </div>
        <div className="snap-start  flex-shrink-0 w-[90%] flex items-center justify-center mr-3">
          <Image src={Mock} alt="plaf" />
        </div>
        <div className="snap-start  flex-shrink-0 w-[90%] flex items-center justify-center mr-3">
          <Image src={Mock2} alt="plaf" />
        </div>
      </div>
    </div>
  );
};
