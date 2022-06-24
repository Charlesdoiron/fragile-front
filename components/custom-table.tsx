import { createTable, useTableInstance } from "@tanstack/react-table";

type Data = {
  client: string;
  project: string;
  type: number;
  expertises: number;
  notes: string;
  eye: number;
};

const table = createTable().setRowType<Data>();

export const CustomTable = () => {
  const instance = useTableInstance(table);
};
