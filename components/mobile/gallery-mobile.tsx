import Image from "next/image";
import Mock from "assets/mock.jpg";
import Mock2 from "assets/mock2.jpg";

export const GalleryMobile = ({ isOpen = false }: { isOpen: boolean }) => {
  return (
    <div
      className={`bg-black p-0  w-full flex   ${
        isOpen ? "max-h-[600px] duration-500" : "max-h-0  duration-500"
      }`}
    >
      <div
        className={` flex ${
          isOpen
            ? "opacity-1 duration-[800ms] translate-y-0 ease-in-out"
            : "opacity-0 duration-[100ms] -translate-y-1  ease-in-out"
        }  `}
      >
        <Image src={Mock} alt="mock" />

        <Image src={Mock2} alt="mock" className="ml-10 relative left-2" />
      </div>
    </div>
  );
};
