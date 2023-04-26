import React from 'react';
import { Popover, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { Fragment } from "react";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import {
  TreatmentHeader
  
} from "./headerData";
export function Treatments() {
    return (
      <Popover className="relative">
        {({ close }) => (
          <>
            <Popover.Button
              className={`
                  ${
                    close
                      ? "w-screen text-left sm:w-full outline-none"
                      : "text-opacity-90 outline-none"
                  }
                   `}
            >
              <div className="px-2 py-2">
                Treatments <HiChevronDown className="inline-block" />
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 px-4 mt-3 lg:mt-7 transform -translate-x-1/2 w-screen max-w-xl left-1/2 sm:px-0 lg:max-w-xl">
                <div className="overflow-hidden shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 bg-white">
                  <Tab.Group>
                    <Tab.List className="flex items-center justify-between bg-brandPink text-white font-content font-bold px-3 lg:px-12 py-1.5 lg:py-2 rounded-t-lg">
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full py-1 text-sm text-brandPink rounded-lg",
                            "focus:outline-none",
                            selected
                              ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                              : "text-gray-100 hover:bg-brandPink3 hover:text-white"
                          )
                        }
                      >
                        Female Infertility
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full py-1 text-sm text-brandPink rounded-lg",
                            "focus:outline-none",
                            selected
                              ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                              : "text-gray-100 hover:bg-brandPink3 hover:text-white"
                          )
                        }
                      >
                        Male Infertility
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full py-1 text-sm text-brandPink rounded-lg",
                            "focus:outline-none",
                            selected
                              ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                              : "text-gray-100 hover:bg-brandPink3 hover:text-white"
                          )
                        }
                      >
                        Advanced Options
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className="px-2 my-2 text-black transition-all ease-out duration-500">
                      <Tab.Panel>
                        <div className="grid grid-cols-3 text-center">
                          {TreatmentHeader.female.map((items) => (
                            <Link href={items.link} key={items.id}>
                              <div className="flex flex-col items-center justify-center hover:bg-pink-100 py-2 rounded-xl">
                                <img
                                  src={items.icon}
                                  alt={items.name}
                                  className="w-10 h-10 mx-auto"
                                />
                                <div className="font-content text-sm font-medium pt-2">
                                  {items.name}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className="grid grid-cols-3 text-center">
                          {TreatmentHeader.male.map((items) => (
                            <Link href={items.link} key={items.id}>
                              <div className="flex flex-col items-center justify-center hover:bg-pink-100 py-2 rounded-xl">
                                <img
                                  src={items.icon}
                                  alt={items.name}
                                  className="w-10 h-10 mx-auto"
                                />
                                <div className="font-content font-medium pt-2">
                                  {items.name}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className="grid grid-cols-3 text-center">
                          {TreatmentHeader.advanced.map((items) => (
                            <Link href={items.link} key={items.id}>
                              <div className="flex flex-col items-center justify-center hover:bg-pink-100 py-2 rounded-xl">
                                <img
                                  src={items.icon}
                                  alt={items.name}
                                  className="w-10 h-10 mx-auto"
                                />
                                <div className="font-content text-sm font-medium pt-2">
                                  {items.name}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  }