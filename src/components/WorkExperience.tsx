import JobCard, { JobCardProps } from "./JobCard";
import { useState } from "react";

export default function WorkExperience({...workExperience}:JobCardProps[]) {
    const [open, setOpen] = useState(0)

    const handleOpen = (index:number) => {
        if (open == index){
            setOpen(-1)
        } else {
            setOpen(index);
        }
      };

return (
    <div className="px-4 mx-auto max-w-screen-lg">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-center items-center">
                Work Experience
            </h2>
        </div>
        {Object.values(workExperience).map((job, i) =>(
            <JobCard
                {...job}
                index={i}
                open={open}
                handleOpen={handleOpen}
                key={i}
            />
        ))}


    </div>

);
}

