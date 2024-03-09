import React, { useState } from "react";
import { LuChevronRightCircle } from "react-icons/lu";
import Image from "next/image";
import {BiLogoTelegram} from "react-icons/bi";
import {GoArrowRight} from "react-icons/go";

const MobileNavbar = ({ setIsMobile, showContent }) => {
    const [lang, setLang] = useState('ru');

    return (
        <div className={`mobile_nav flex flex-col justify-between w-full min-h-screen min-[1040px]:hidden bg-[#0f0f0f] ${showContent ? "content-open" : ""}`}>
            <div>
                <div className={`grid grid-cols-2 bg-[#202020] m-4 rounded-[12px] ${showContent ? "slide-in" : ""}`}>
                    <button
                        onClick={() => setLang('ru')}
                        className={`rounded-[6px] h-[48px] m-[6px] ${lang === 'ru' ? "bg-[#525252]" : ""}`}
                    >Русский
                    </button>
                    <button
                        onClick={() => setLang('uz')}
                        className={`rounded-[6px] h-[48px] m-[6px] ${lang === 'uz' ? "bg-[#525252]" : ""}`}
                    >O'zbek tili
                    </button>
                </div>
                <div className="transition-all duration-500">
                    <ul className={`space-y-[1px] ${showContent ? "slide-in" : ""}`}>
                        <li className="flex justify-between py-[12px] px-[16px] bg-[#202020] rounded-[10px]">
                            <span className="text-[14px]">Разработка сайтов</span>
                            <span><LuChevronRightCircle className="text-[20px]"/></span>
                        </li>
                        <li className="flex justify-between py-[12px] px-[16px] bg-[#202020] rounded-[10px]">
                            <span className="text-[14px]">Мобильные приложение</span>
                            <span><LuChevronRightCircle className="text-[20px]"/></span>
                        </li>
                        <li className="flex justify-between py-[12px] px-[16px] bg-[#202020] rounded-[10px]">
                            <span className="text-[14px]">Автоматизация бизнеса</span>
                            <span><LuChevronRightCircle className="text-[20px]"/></span>
                        </li>
                        <li className="flex justify-between py-[12px] px-[16px] bg-[#202020] rounded-[10px]">
                            <span className="text-[14px]">Комплектная упаковка</span>
                            <span><LuChevronRightCircle className="text-[20px]"/></span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`bg-[#a44fe6] rounded-t-[16px] pt-8 ${showContent ? 'slide-up' : ''}`}>
                <p className="text-center kanit-bold text-[16px]">Связаться с нами</p>
                <p className="text-center text-[18px]">Мы будем рады вашим звонкам</p>
                <div className="flex justify-center items-center gap-2 mt-6">
                    <Image
                        src="/images/person.webp"
                        alt="Vercel Logo"
                        width={90}
                        height={90}
                        priority
                        className="border-4 rounded-full"
                    />
                    <div>
                        <p className="kanit-bold text-[24px]">Акмал Икромов</p>
                        <p className="text-[16px] text-center">Менежер</p>
                    </div>
                </div>
                <div className="w-full flex">
                    <a href="tel:+998909519129"
                       className="px-[32px] py-[16px] text-center border rounded-[12px] kanit-bold text-white m-6 mb-4 w-full">+998
                        90 951 91 29</a>
                </div>
                <div className="flex justify-center">
                    <a href="#">
                        <div className="flex gap-2 items-center justify-center px-[8px]
                    py-[4px] rounded-[10px] text-white bg-[#a26adf] w-[180px]">
                            <span><BiLogoTelegram/></span>
                            <span>@ndc_manager</span>
                            <span><GoArrowRight/></span>
                        </div>
                    </a>
                </div>
                <div className="flex justify-center my-8">
                    <button onClick={() => setIsMobile(false)} className="w-[60px] h-[60px] bg-[#1b1b1b] rounded-[50%] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"
                             data-v-3e6bb2e1="">
                            <path d="M11.1116 11.0767L28.8882 28.85M11.1116 28.85L28.8882 11.0767" stroke="white"
                                  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                  stroke-linejoin="round" data-v-3e6bb2e1=""></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
