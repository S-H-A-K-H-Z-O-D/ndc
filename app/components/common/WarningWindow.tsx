"use client"

import BlackButton from "@/app/components/common/BlackButton";
import {IoIosExpand} from "react-icons/io";
import {SlArrowRightCircle} from "react-icons/sl";
import React, {useState} from "react";
import OrderModal from "@/app/components/common/OrderModal";
import {BiLogoTelegram} from "react-icons/bi";
import {GoArrowRight} from "react-icons/go";

const WarningWindow = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div
            className="bg-[#d84471] rounded-[30px] px-[32px] py-[27px] flex justify-between items-center mt-1 max-[1000px]:flex-col">
            <div className="w-[450px] max-[1000px]:w-full max-[1000px]:text-center">
                <p className="kanit-bold text-[18px] max-[1000px]:text-[24px]">Свяжитесь с нами - и вы сами увидите!</p>
                <p className="text-[18px] max-[1000px]:hidden">делаем ваш бизнес сильнее с помощью цифровых
                    технологий</p>
            </div>
            <div className="flex justify-center min-[1000px]:hidden max-[1000px]:mt-3 max-[1000px]:mb-7">
                <a href="#">
                    <div className="flex gap-2 items-center justify-center px-[8px]
                    py-[4px] rounded-[10px] text-white bg-[rgba(255,255,255,0.2)] w-[180px]">
                        <span><BiLogoTelegram/></span>
                        <span>@ndc_manager</span>
                        <span><GoArrowRight/></span>
                    </div>
                </a>
            </div>
            <div className="flex items-center gap-8">
                <span className="text-[28px] font-semibold max-[1000px]:hidden">+998 90 951 91 29</span>
                <BlackButton
                    onClick={openModal}
                    RightIcon={<SlArrowRightCircle className={'text-xl'}/>}
                    className={'border kanit-bold text-[18px] rounded-[16px] py-[12px] px-[24px]'}
                >
                    Заказать звонок
                </BlackButton>
            </div>
            <OrderModal isOpen={modalIsOpen} closeModal={closeModal}/>
        </div>
    )
}
export default WarningWindow