/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export const Drawer = ({
  isOpen,
  handleDrawer,
}: {
  isOpen: boolean;
  handleDrawer: () => void;
}) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-fragile"
        onClose={handleDrawer}
      >
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md ">
                  <div className="flex h-full flex-col overflow-y-scroll bg-black py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-end">
                        <div className="ml-3 flex h-7 items-center">
                          <button type="button" onClick={handleDrawer}>
                            <span className="underline text-white">
                              No thanks !
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 sm:px-6 text-white  text-left mt-20 ml-10">
                      <h1 className="text-[44px] leading-[44px] mb-16">
                        Feel free to contact us{" "}
                      </h1>

                      <h2 className="text-[12px] uppercase mb-2">
                        FOR COLLABORATION
                      </h2>
                      <h3 className="text-[16px]">
                        <a href="mailto:project@fragile.studio">
                          project@fragile.studio
                        </a>
                      </h3>
                      <h2 className="text-[12px] uppercase mt-[60px] mb-2">
                        FOR INTERNSHIP
                      </h2>
                      <h3 className="text-[16px]">
                        <a href="mailto:coffee@fragile.studio">
                          coffee@fragile.studio
                        </a>
                      </h3>
                      <h2 className="text-[12px] uppercase mt-[60px] mb-2">
                        FOR HIGH FIVE
                      </h2>
                      <h3 className="text-[16px]">
                        <a href="mailto:charles@fragile.studio">
                          charles@fragile.studio
                        </a>
                      </h3>
                      <h3 className="text-[16px]">
                        <a href="mailto:david@fragile.studio">
                          david@fragile.studio
                        </a>
                      </h3>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
