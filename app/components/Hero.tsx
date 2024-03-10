"use client"

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useState} from "react";
import Button from "@/app/components/common/Button";
import BlackButton from "@/app/components/common/BlackButton";
import {SlArrowRightCircle} from "react-icons/sl";
import OrderModal from "@/app/components/common/OrderModal";

const Hero = () => {
    const [value, setValue] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className={'max-w-[1420px] mx-auto px-2 h-[500px] flex flex-col justify-between mt-32 hero max-[1450px]:px-12 max-[1040px]:mt-20 max-[600px]:px-2'}>
            <div className="max-[1040px]:flex max-[1040px]:flex-col justify-between max-[1040px]:h-full">
                <div className="max-[1040px]:hidden">
                    <p className="text-[62px] kanit-bold font-bold">Разработка сайта с продающим</p>
                    <p className="text-[62px] kanit-bold font-bold">wow-эффектом</p>
                </div>
                <div className="min-[1040px]:hidden z-0">
                    <p className="text-[40px] kanit-bold font-bold max-[400px]:text-[30px]">Разработка сайта с</p>
                    <p className="text-[25px] kanit-bold font-bold">продающим wow-эффектом</p>
                </div>
                <div className="flex max-[1040px]:flex-col max-[1040px]:w-full">
                    <div className="max-[1040px]:w-full">
                        <PhoneInput
                            country={'uz'}
                            value={value}
                            onChange={setValue}
                            disableCountryCode={false}
                            inputStyle={{
                                'backgroundColor': '#252525',
                                'paddingLeft': '10px',
                                border: 'none',
                                height: '56px',
                                fontSize: '18px',
                                width: '100%'
                            }}
                            placeholder={'262'}
                            buttonStyle={{display: 'none'}}
                        />
                        <span
                            className="text-[18px] text-neutral-600 pl-6 max-[1040px]:hidden">Перезвоним за 3 минуты</span>
                    </div>
                    <Button onClick={openModal} className="w-[225px] h-[56px] font-semibold z-0 max-[1040px]:w-full max-[1040px]:my-1">Заказать
                        проект</Button>
                    <div className="text-[18px] text-center text-neutral-600 pl-6 min-[1040px]:hidden">Перезвоним за 3 минуты</div>
                </div>
            </div>
            <div className="flex gap-4 max-[1040px]:hidden">
                <BlackButton
                    RightIcon={<SlArrowRightCircle className={'text-neutral-600 text-xl'}/>}
                    className={'border border-neutral-600 rounded-[35px] py-[9px] px-[32px]'}
                >
                    Каким будет ваш сайт
                </BlackButton>
                <BlackButton
                    RightIcon={<SlArrowRightCircle className={'text-neutral-600 text-xl'}/>}
                    className={'border border-neutral-600 rounded-[35px] py-[9px] px-[32px]'}
                >
                    Как мы рабоем
                </BlackButton>
                <BlackButton
                    RightIcon={<SlArrowRightCircle className={'text-neutral-600 text-xl'}/>}
                    className={'border border-neutral-600 rounded-[35px] py-[9px] px-[32px]'}
                >
                    Как получить скидку
                </BlackButton>
            </div>
            <OrderModal isOpen={modalIsOpen} closeModal={closeModal}/>
        </div>
    )
}
export default Hero