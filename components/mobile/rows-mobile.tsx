import Eye from "assets/eye.svg";
import EyeClosed from "assets/eye-closed.svg";

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { GalleryMobile } from "./gallery-mobile";
import { data } from "components/rows";

export const RowsMobile = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const cleanQuery = router.asPath.replace("/?project=", "");
    setQuery(cleanQuery);
  }, [router.asPath]);

  const handleSelect = (slug: string) => {
    if (query === slug) {
      router.push("/", undefined, { shallow: true });
    } else router.push("/", { query: { project: slug } }, { shallow: true });
  };

  return (
    <div>
      {data.map(({ client, project, type, expertises, notes, id, slug }) => {
        const isSelected = query === slug;
        return (
          <>
            <div
              className={`flex w-full border-b border-t-0 border-black items-center min-h-[60px] pl-5 text-[14px] hover:bg-black cursor-pointer hover:text-white transition-all ease-in  duration-200
          ${query === slug ? "bg-black text-white" : ""}`}
              key={id}
              onClick={() => handleSelect(slug)}
            >
              <div className=" w-6/12 px-4">
                <p>{client}</p>
              </div>

              <div className="flex w-3/12 pr-4">
                <p className="text-[#949494]">{expertises}</p>
              </div>

              <div className="flex w-3/12 justify-end pr-4 text-[#949494]">
                {isSelected ? <EyeClosed /> : <Eye />}
              </div>
            </div>
            <GalleryMobile isOpen={isSelected} />
          </>
        );
      })}
    </div>
  );
};
