"use client"

import Image from "next/image";
import {FaTelegramPlane} from "react-icons/fa";
import Button from "@/app/components/common/Button";
import OrderModal from "@/app/components/common/OrderModal";
import React, {useState} from "react";
import {CgMenuGridR} from "react-icons/cg";
import MobileNavbar from "@/app/components/MobileNavbar";
import Link from "next/link";
import {FaChevronDown} from "react-icons/fa6";
import {IoChevronDown} from "react-icons/io5";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState('Ru')
    const {t} = useTranslation('hero')

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth' // Optional: for smooth scrolling
            });
        }
    };

    function onLang(lang) {
        setCurrentLang(lang)
        setIsOpen(false)
    }

    return (
        <>
            <div className="border-b border-neutral-600 pb-6">
                <div className="flex justify-between w-full max-w-[1660px] mx-auto px-2">
                    <div className="">
                        <a
                            className="flex place-items-center gap-2"
                            href="https://ndc.uz/"
                            target="_blank"
                        >
                            <Image
                                src="/logo.svg"
                                alt="Vercel Logo"
                                width={118}
                                height={37}
                                priority
                            />
                        </a>
                    </div>

                    <div className="w-[600px] max-[1040px]:hidden">
                        <ul className="flex justify-between items-center">
                            <li
                                className="text-[18px] cursor-pointer relative"
                                onMouseEnter={() => setIsOpen(true)}
                                onMouseLeave={() => setIsOpen(false)}
                            >

                                <div className="flex items-center">
                                    <span>{currentLang}</span>
                                    <span><IoChevronDown/></span>
                                </div>

                                {isOpen && (
                                    <div className="absolute bg-[#444344] border-none rounded-[6px] top-[100%] left-0 border border-gray-200 p-2">
                                        <div onClick={() => onLang('Uz')}>O'zbekcha</div>
                                        <div onClick={() => onLang('Ru')}>Русский</div>
                                    </div>
                                )}

                            </li>
                            <li className="text-[18px] cursor-pointer">
                                <div onClick={() => scrollToSection('obout')}>{t('title')}</div>
                            </li>
                            <li className="text-[18px] cursor-pointer">
                                <div onClick={() => scrollToSection('ourworks')}>Работы</div>
                            </li>
                            <li className="flex items-center gap-2">
                                <span><FaTelegramPlane/></span>
                                <span className="text-[28px] font-semibold"><a href="tel:+998909519129">+998 90 951 91 29</a></span>
                            </li>
                        </ul>
                    </div>
                    <button onClick={() => setIsMobile(true)} className="min-[1040px]:hidden">
                        <CgMenuGridR className="text-4xl"/>
                    </button>
                </div>
            </div>

            <div className="w-full pt-6 max-w-[1660px] mx-auto px-2 flex justify-between max-[1040px]:hidden">
                <ul className="flex justify-between items-center gap-20">
                    <li className="text-[18px] cursor-pointer">
                        <div onClick={() => scrollToSection('ourworks')}>Разработка сайтов</div>
                    </li>
                    <li className="text-[18px] cursor-pointer">
                        <div onClick={() => scrollToSection('offer')}>Мобильные приложение</div>
                    </li>
                    <li className="text-[18px] cursor-pointer">
                        <div onClick={() => scrollToSection('offer')}>Автоматизация бизнеса</div>
                    </li>
                    <li className="text-[18px] cursor-pointer">
                        <div onClick={() => scrollToSection('offer')}>Комплектная упаковка</div>
                    </li>
                </ul>
                <Button
                    className="w-[200px] h-[48px] font-semibold z-0"
                    onClick={openModal}
                >Заказать проект</Button>
            </div>
            <OrderModal isOpen={modalIsOpen} closeModal={closeModal}/>
            {isMobile && <MobileNavbar setIsMobile={setIsMobile} showContent={isMobile}/>}
        </>
    )
}

export default Navbar