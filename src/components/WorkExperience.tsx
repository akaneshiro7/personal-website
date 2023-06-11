import JobCard from "./JobCard";
import { useState } from "react";

export default function WorkExperience() {
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
        <JobCard
            location="Bethesda, Maryland" 
            jobDescription = "Developing Full Stack Web Apps, Desktop Apps, and Backend Applications for Submarine Training Systems"
            jobTitle = "System Engineer Coop"
            company = "Leidos"
            skills = {["Javascript", "Python", "React", "Express", "SQL", "Electron", "Websockets"]}
            date="January - July 2023"
            shortDate="Jan - July 2023"
            link="https://www.leidos.com/"
            index={0}
            open={open}
            handleOpen={handleOpen}
            key={0}
        />
        <JobCard
            location="Boston, Massachusetts" 
            jobDescription = "Improve first-year engineering students’ understanding of C++, MatLab, AutoCAD, and SolidWorks "
            jobTitle = "Red Vest (Teaching Assistant)"
            company = "Northeastern Engineering Center"
            skills = {["C++", "Matlab", "AutoCAD", "SolidWorks"]}
            date="August - December 2023"
            shortDate="Aug - Dec 2023"
            link="https://www.leidos.com/"
            index={1}
            open={open}
            handleOpen={handleOpen}
            key={1}
            />
        <JobCard 
            location="Boston, Massachusetts" 
            jobDescription = "Mentor 4 groups of 5 Engineers through the engineer design process and provide feedback on technical concerns"
            jobTitle = "Mentor"
            company = "Northeastern Engineering Center"
            skills = {["C++", "Matlab", "AutoCAD", "SolidWorks"]}
            date="August - December 2023"
            shortDate="Aug - Dec 2023"
            link="https://www.leidos.com/"
            index={2}
            open={open}
            handleOpen={handleOpen}
            key={2}
            />
    </div>

);
}

