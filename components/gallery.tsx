import Image from "next/image";

import Mock from "assets/mock.jpg";
import Mock2 from "assets/mock2.jpg";

export const Gallery = () => {
  return (
    <td className="h-fit bg-black p-0 absolute inset-0 w-full flex">
      <Image src={Mock} alt="mock" />
      <div className="ml-10 h-full min-h-full">
        <Image src={Mock2} alt="mock" />
      </div>
    </td>
  );
};
