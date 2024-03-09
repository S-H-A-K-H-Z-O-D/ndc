"use client"

import { useState } from 'react';
import {LuArrowUpRight} from "react-icons/lu";
import Image from "next/image"; // Import useState hook

interface ServiceCardProps {
    text: string;
    linkText: string;
    link: string;
    title: string;
    img: string;
}

const ProjectCard = ({ text, title, link, linkText, img }: ServiceCardProps) => {
    const [isHovered, setIsHovered] = useState(false); // State to track hover

    return (
        <div className="">
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="max-w-[700px] max-h-[500px] overflow-hidden max-[1050px]:hidden"
            >
                <Image
                    src={img}
                    alt="Vercel"
                    width={700}
                    height={500}
                    priority
                    style={{
                        marginTop: isHovered ? "-25px" : "0",
                        width: isHovered ? "780px" : "700px",
                        height: isHovered ? "550px" : "500px",
                        objectFit: "cover",
                        transition: "all 0.3s ease"
                    }}
                />
            </div>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="overflow-hidden min-[1050px]:hidden w-full"
            >
                <Image
                    src={img}
                    alt="Vercel"
                    width={700}
                    height={500}
                    priority
                    style={{
                        width: "100%",
                        height: "50%",
                        objectFit: "cover",
                        borderRadius: "30px"
                    }}
                />
            </div>
            <div className="flex items-center justify-between mt-2">
                <p className="kanit-bold font-semibold text-[28px]">{title}</p>
                <a className="flex items-center text-[18px] gap-2" href={link} target="_blank">
                    <span>{linkText}</span>
                    <span><LuArrowUpRight/></span>
                </a>
            </div>
            <p className="text-[18px]">{text}</p>
        </div>
    );
};

export default ProjectCard;
