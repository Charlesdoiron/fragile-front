import Eye from "assets/eye.svg";
import EyeClosed from "assets/eye-closed.svg";

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { Gallery } from "./gallery";

const data = [
  {
    client: "Bigmamma",
    project:
      "Rebuilding Bigmamma’s menus. Automatic website and pdf generation",
    type: "Website & services",
    expertises: "Full-stack",
    notes: "NodeJS | Strapi  |  React | Heroku | Postgres",
    id: "1",
    slug: "bigmamma_menu",
  },
  {
    client: "Assistance publique hopitaux de Paris",
    project: "Building a platform for researchers",
    type: "Website & services",
    expertises: "Design + front-end",
    notes: "NodeJS - Strapi - React - Heroku UX - UI",
    id: "2",
    slug: "process",
  },
  {
    client: "France messagerie",
    project:
      "Design of the first website for the leader in press distribution in France",
    type: "Website ",
    expertises: "Design",
    notes: "Design | UX - UI",
    id: "3",
    slug: "france-messagerie",
  },
];

export const Rows = () => {
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
              <div className="flex w-2/12 px-8">
                <p className="max-w-[200px]">{client}</p>
              </div>
              <div className="flex w-3/12 pr-4 ">
                <p className=" max-w-sm ">{project}</p>
              </div>
              <div className="flex w-2/12  pr-4">
                <p className="max-w-sm">{type}</p>
              </div>
              <div className="flex w-2/12 pr-4">
                <p className="max-w-sm">{expertises}</p>
              </div>
              <div className="flex w-2/12 pr-4">
                <p className="max-w-sm">{notes}</p>
              </div>
              <div className="flex w-1/12 justify-end pr-[52px]">
                {isSelected ? <EyeClosed /> : <Eye />}
              </div>
            </div>
            <Gallery isOpen={isSelected} />
          </>
        );
      })}
    </div>
  );
};
