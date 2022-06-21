import { useRouter } from "next/router";

import Eye from "assets/eye.svg";
import React, { useEffect, useState } from "react";
import { Gallery } from "./gallery";

const th = [
  { title: "Client", showOnMobile: true },
  { title: "Expertises", showOnMobile: true },
];
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

export const TableMobile = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const currentQuery = router.asPath.replace("/?project=", "");
    setQuery(currentQuery);
  }, [router]);

  const handleSelect = (slug: string) => {
    if (query === slug) {
      router.push("/", undefined, { shallow: true });
    } else router.push("/", { query: { project: slug } }, { shallow: true });
  };

  return (
    <div className=" lg:mt-[250px]  mt-[50px] mb-36">
      <p className="lg:px-[60px] px-[25px] mb-[33px] animate-pulse">
        Work selection
      </p>
      <table className="w-full ">
        <thead className="w-full border-b border-black">
          <tr className="w-full ">
            {th.map((item, idx) => {
              return (
                <th
                  key={item.title}
                  className={`font-bold text-left pb-3 text-[12px] ${
                    idx === 0 ? "lg:px-[60px] px-[25px]" : ""
                  }`}
                >
                  {item.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({ client, project, type, expertises, notes, id, slug }) => {
              return (
                <React.Fragment key={slug}>
                  <tr
                    onClick={() => handleSelect(slug)}
                    className="border-b border-black h-12 font-light hover:bg-black cursor-pointer hover:text-white text-[14px] transition-all ease-in-out "
                  >
                    <td className="p-0 lg:pl-[60px] pl-[25px] ">{client}</td>
                    <td className="p-0">{expertises}</td>
                    <td className="lg:pr-[60px] pr-[25px] flex justify-end h-12 items-center p-0">
                      {<Eye />}
                    </td>
                  </tr>
                  <tr className="w-full relative">
                    {query === slug && <Gallery />}
                  </tr>
                </React.Fragment>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};
