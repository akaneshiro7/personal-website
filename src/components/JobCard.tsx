import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Icon from "./Icon";

interface JobProps {
    location: string;
    jobDescription: string;
    jobTitle: string;
    company: string;
    skills: string[];
    date: string;
    shortDate: string;
    link:string;
    index: number
    open: number
    handleOpen: any
  }

export interface JobCardProps {
    location: string;
    jobDescription: string;
    jobTitle: string;
    company: string;
    skills: string[];
    date: string;
    shortDate: string;
    link:string;
}
export default function JobCard({location, jobDescription, jobTitle, company, skills, date, shortDate, link, index, open, handleOpen}: JobProps) {
 
  
    const customAnimation = {
      mount: { scale: 1 },
      unmount: { scale: 0.9 },
    };

  return (
    <Fragment>
        <Accordion className="pb-4 rounded-lg" open={open === index} animate={customAnimation}>
            <AccordionHeader className="text-extrabold bg-indigo-800 text-white flex justify-end px-4 rounded-lg py-4" onClick={() => handleOpen(index)}>
                <div className="text-lg sm:text-xl flex flex-col sm:flex-row justify-between w-full items-center gap-4">
                    <div>{jobTitle} @ {company} </div>
                    <div className="flex items-center gap-2">
                        <div>
                            <time className="md:hidden">{shortDate}</time>
                            <time className="hidden md:block"> {date} </time>
                        </div>

                    <Icon id={index} open={open} />
                    </div>
                </div>
                </AccordionHeader>
                <AccordionBody className="mt-4 bg-slate-500 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="flex flex-col gap-2 text-lg w-full">
                            <div className="flex gap-4 font-semibold dark:text-gray-200 items-center">
                                <div className="flex justify-center  items-center gap-2">
                                    <img src="pin.svg" className="w-6 h-6"/>
                                    <div>{location}</div>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <img src="out.svg" className="w-6 h-6"/>
                                    <a href={link} target="_blank" className="hover:text-yellow-600">{company}</a>
                                </div>
                            </div>
                            <div className="dark:text-white">
                                {jobDescription}
                            </div>
                            <div className="">
                                <ul className="flex flex-wrap dark:text-gray-200 font-semibold gap-3">
                                    {skills.map(skill => (
                                        <li className="rounded-2xl px-3 py-1.5 bg-yellow-600 ">
                                        {skill}
                                        </li>
                                        )
                                    )}

                                </ul>
                            </div>

                        </div>
                        <img>
                        {/*  Logo */}
                        </img>
                    </div>
                </AccordionBody>
            </Accordion>

        </Fragment>
  )
}
