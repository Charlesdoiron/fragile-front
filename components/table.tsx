import { RowHeader } from "./row-header";
import { Rows } from "./rows";

export const Table = () => {
  return (
    <div className="mt-[250px]">
      <p className="ml-[52px] mb-[33px] animate-pulse">Work selection</p>
      <RowHeader />
      <Rows />
    </div>
  );
};
