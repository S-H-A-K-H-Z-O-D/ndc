"use client"

import SpinnerIcon from "@/app/components/common/SpinnerIcon";
import {IoIosExpand} from "react-icons/io";
import BlackButton from "@/app/components/common/BlackButton";
import OrderModal from "@/app/components/common/OrderModal";
import {useState} from "react";

interface ServiceCardProps {
    text: string
    title: string
}

const ServiceCard = ({text, title}: ServiceCardProps) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className="flex flex-col justify-between w-[472px] h-[272px] max-[1200px]:w-full
        py-[32px] px-[17px] bg-[#1b1b1b] rounded-[30px]">
            <div className="flex items-center gap-2">
                <SpinnerIcon/>
                <h4 className="text-[18px]">Разработка</h4>
            </div>
            <p className="kanit-bold font-semibold text-2xl">{title}</p>
            <p className="text-[18px] p-0 m-0">{text}</p>
            <div className="max-[1200px]:w-full">
                <BlackButton
                    onClick={openModal}
                    className={'text-[18px] rounded-[16px] py-[12px] px-[24px] bg-black max-[1200px]:w-full max-[1200px]:flex justify-center'}
                >
                    Заказать проект
                </BlackButton>
            </div>
            <OrderModal isOpen={modalIsOpen} closeModal={closeModal}/>
        </div>
    )
}
export default ServiceCard