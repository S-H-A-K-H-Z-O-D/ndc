"use client"

import Image from "next/image";
import {FaTelegramPlane} from "react-icons/fa";
import Button from "@/app/components/common/Button";
import WarningWindow from "@/app/components/common/WarningWindow";
import {BiLogoTelegram} from "react-icons/bi";
import {GoArrowRight} from "react-icons/go";
import React from "react";

const Footer = () => {
    const scrollToSection = (sectionId: any) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth' // Optional: for smooth scrolling
            });
        }
    };
    return (
        <>
            <div className="mt-20 max-[1040px]:hidden">
                <div className="max-w-[1420px] mx-auto px-2 flex justify-between max-[1040px]:hidden">
                    <div className="w-[70%] mb-12">
                        <p className="text-[64px] leading-[75px]">
                            <a href="tel:+998909519129">+998 90 951 91 29</a>
                        </p>
                        <p className="text-[64px] leading-[75px]">
                            <a href="mailto: abc@example.com">info@ndc.uz</a>
                        </p>
                        <p className="text-[64px] leading-[75px]">Ташкент, Шайхантахурский район, Джангох (Ц-15) ж/м,
                            37</p>
                    </div>
                    <div className="w-[140px] ">
                        <p className="text-[20px] text-neutral-600 hover:text-white mb-6 cursor-pointer">
                            <a onClick={() => scrollToSection('offer')}>UX/UI design</a>
                        </p>
                        <p className="text-[20px] text-neutral-600 hover:text-white mb-6">
                            <a href="#">Мобильные приложения</a>
                        </p>
                        <p className="text-[20px] text-neutral-600 hover:text-white mb-6">
                            <a href="#">Crm system</a>
                        </p>
                        <p className="text-[20px] text-neutral-600 hover:text-white mb-6">
                            <a href="#">Social Media Marketing</a>
                        </p>
                        <p className="text-[20px] text-neutral-600 hover:text-white">
                            <a href="#">Брендинг</a>
                        </p>
                    </div>
                </div>

                <div className="flex px-64 justify-between w-full border-t border-neutral-600 py-8">
                    <p className="text-[18px] text-neutral-600">©2023 Все права защищены.</p>

                    <div className="w-[300px]">
                        <ul className="flex justify-between items-center text-neutral-600">
                            <li className="text-[18px]">
                                <a href="#">Facebook</a>
                            </li>
                            <li className="text-[18px]">
                                <a href="#">Instagram</a>
                            </li>
                            <li className="text-[18px]">
                                <a href="#">Telegram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-16 min-[1040px]:hidden">
                <WarningWindow/>
                <div className="mt-6">
                    <iframe width="100%" height="500" frameBorder="0" scrolling="no"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=navroz%20parki+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
                <div className="flex text-[20px] text-center my-6">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                               data-v-3640bbee=""><path
                        d="M11.9979 21.332C11.9979 21.332 4.23389 16.667 4.23389 10.444C4.23389 6.14802 7.71589 2.66602 12.0119 2.66602C16.3079 2.66602 19.7899 6.14802 19.7899 10.444C19.7899 16.667 11.9979 21.332 11.9979 21.332Z"
                        stroke="#D84471" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" data-v-3640bbee=""></path> <path
                        d="M12.0119 13.556C13.73 13.556 15.1229 12.1632 15.1229 10.445C15.1229 8.72686 13.73 7.33402 12.0119 7.33402C10.2937 7.33402 8.90089 8.72686 8.90089 10.445C8.90089 12.1632 10.2937 13.556 12.0119 13.556Z"
                        stroke="#D84471" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" data-v-3640bbee=""></path></svg></span>
                    <p className="">Ташкент, Шайхантахурский район, Джангох (Ц-15) ж/м, 37</p>
                </div>
                <p className="text-[18px] text-center mb-6">©2023 Все права защищены.</p>
            </div>
        </>
    )
}

export default Footer