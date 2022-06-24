export const RowHeader = () => {
  return (
    <div className="flex w-full  items-center h-16 pl-5 border-b border-t-0 border-black">
      <div className="flex w-2/12 px-8 ">Client</div>
      <div className="flex w-3/12">Project</div>
      <div className="flex w-2/12 ">Type</div>
      <div className="flex w-2/12">Expertises</div>
      <div className="flex w-2/12">Notes</div>
      <div className="flex w-1/12 justify-end pr-4"></div>
    </div>
  );
};
