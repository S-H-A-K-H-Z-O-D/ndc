"use client"

import {WiSnowflakeCold} from "react-icons/wi";
import {MdDone} from "react-icons/md";
import EffectCards from "../components/common/EffectCards";
import {GoGift} from "react-icons/go";
import {IoIosExpand} from "react-icons/io";
import Button from "@/app/components/common/Button";
import BlackButton from "@/app/components/common/BlackButton";
import SpinnerIcon from "@/app/components/common/SpinnerIcon";
import ServiceCard from "@/app/components/common/ServiceCard";
import WarningWindow from "@/app/components/common/WarningWindow";
import {useState} from "react";
import OrderModal from "@/app/components/common/OrderModal";
import OfferModal from "@/app/components/common/OfferModal";
import MobileOffer from "@/app/components/MobileOffer";

const Offer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [offerModalIsOpen, setOfferModalIsOpen] = useState(false);
    let isOfferModal = false; // Initialize with a default value

    if (typeof window !== 'undefined') {
        // Check if window is defined (i.e., in the client-side context)
        isOfferModal = window.innerWidth > 1460;
    }
    const openModal = () => {
        setModalIsOpen(true);
    };
    const openOfferModal = () => {
        setOfferModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const closeOfferModal = () => {
        setOfferModalIsOpen(false);
    };
    return (
        <div className="mt-20 max-w-[1420px] mx-auto px-2">
            <p className="kanit-bold text-[18px] mb-4">Что мы предлогаем</p>
            <div className="px-[50px] py-[40px] max-[720px]:px-[17px] max-[720px]:px-[24px] rounded-[30px] bg-[#1b1b1b] shadow-[0_4px_21.8px_0px_rgb(0,0,0)]">
                <div className="flex items-center gap-2 max-[1200px]:hidden">
                    <SpinnerIcon />
                    <h4 className="text-[18px]">Для бизнеса</h4>
                </div>
                <div className="flex items-center max-[1200px]:flex-col-reverse max-[1200px]:gap-y-10 max-[1200px]:mt-8">
                    <div className="w-[50%] max-[1200px]:w-full">
                        <div className="flex items-center gap-2 min-[1200px]:hidden">
                            <SpinnerIcon/>
                            <h4 className="text-[18px]">Для бизнеса</h4>
                        </div>
                        <h4 className="text-[32px] kanit-bold font-semibold">Создание бизнес сайтов</h4>
                        <p className="text-[18px]">Для формирования имиджа компании в интернете, повышения продаж и
                            доверия к бренду у целевой аудитории.</p>
                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-2 text-[#bbbbbb]">
                                <span><MdDone/></span>
                                <h4 className="text-[18px]">Индивидуальный дизайн</h4>
                            </li>
                            <li className="flex items-center gap-2 text-[#bbbbbb]">
                                <span><MdDone/></span>
                                <h4 className="text-[18px]">Мобильная версия сайта</h4>
                            </li>
                            <li className="flex items-center gap-2 text-[#bbbbbb]">
                                <span><MdDone/></span>
                                <h4 className="text-[18px]">Составление технического задания</h4>
                            </li>
                            <li className="flex items-center gap-2 text-[#bbbbbb]">
                                <span><MdDone/></span>
                                <h4 className="text-[18px]">Наполнение контента</h4>
                            </li>
                            <li className="flex items-center gap-2 text-[#bbbbbb]">
                                <span><GoGift/></span>
                                <h4 className="text-[18px]">Домен и хостинг на 1 год</h4>
                            </li>
                            <li onClick={openOfferModal} className="flex items-center gap-2 cursor-pointer">
                                <span><IoIosExpand/></span>
                                <h4 className="text-[18px]">Просмотреть вес список</h4>
                            </li>
                        </ul>

                        <div className="flex gap-4 mt-6 max-[1200px]:flex-col">
                            <Button onClick={openModal} className="py-[16px] px-[40px] font-semibold z-0 text-[18px]">Узнать
                                стоимость</Button>
                            <BlackButton
                                onClick={openOfferModal}
                                RightIcon={<IoIosExpand className={'text-xl'}/>}
                                className={'border border-neutral-600 text-[18px] rounded-[16px] py-[16px] px-[24px] max-[1200px]:flex justify-center'}
                            >
                                В разработку входит
                            </BlackButton>
                        </div>
                    </div>

                    <EffectCards/>
                </div>
            </div>
            <div className="flex gap-1 mt-6 slide-up max-[1200px]:flex-col">
                <ServiceCard
                    title={'Интернет магазины'}
                    text={'Современный интернет-магазин с возможностью оплаты товаров онлайн и в рассрочку'}
                    // onClick={}
                />
                <ServiceCard
                    title={'Интернет магазины'}
                    text={'Современный интернет-магазин с возможностью оплаты товаров онлайн и в рассрочку'}
                    // onClick={}
                />
                <ServiceCard
                    title={'Интернет магазины'}
                    text={'Современный интернет-магазин с возможностью оплаты товаров онлайн и в рассрочку'}
                    // onClick={}
                />
            </div>
            <WarningWindow />
            <OrderModal isOpen={modalIsOpen} closeModal={closeModal}/>
            {isOfferModal && <OfferModal isOpen={offerModalIsOpen} closeModal={closeOfferModal}/>}
            {!isOfferModal && offerModalIsOpen &&
                <MobileOffer showContent={offerModalIsOpen} closeModal={closeOfferModal}/>}

        </div>
    )
}
export default Offer