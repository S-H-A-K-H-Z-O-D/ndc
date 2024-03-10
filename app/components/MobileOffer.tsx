"use client"

import {useState} from 'react';
import Button from "@/app/components/common/Button";
import EffectCards from "@/app/components/common/EffectCards";
import OrderModal from "@/app/components/common/OrderModal";
import WarningWindow from "@/app/components/common/WarningWindow";
import React from "react";

const services = [
    {text: 'Индивидуальный дизайн'},
    {text: 'Регистрация в поисковых системах Yandex, Google'},
    {text: 'Мультиязычный сайт (Ру/O‘z/Eng)'},
    {text: 'Доменное имя в зоне UZ (1 штук) на 1 год'},
    {text: 'Интеграция систем аналитики Google Analytics / Yandex Metrika'},
    {text: 'Первичное наполнение и оптимизация сайта'},
    {text: 'Подключение SSL сертификат безопасности'},
    {text: 'Telegram бот для оповещений и заявок'},
    {text: 'Административная панель для управление контентом'},
    {text: 'Базовая SEO оптимизация'},
    {text: 'Онлайн чат'},
    {text: 'Обучение персонала'},
    {text: 'Добавление компанию в Google Business'},
    {text: 'Корпоративная почта (info@ваш_сайт.uz)'},
    {text: 'Хостинг на 1 год'},
]

const reasons = [
    {title: 'Привлечение новых клиентов', text: 'Если кто-то заинтересуется вашей компанией, то наверняка попытается найти вас через Гугл или Яндекс. Потенциальный клиент найдет страницу, получит нужную информацию и продолжит свой клиентский путь. Но если никаких официальных данных о вас нет, то он уйдет к конкурентам'},
    {title: 'Презентация продукции.', text: 'Сайт подробно расскажет о товаре или услуге, чтобы закрыть все вопросы клиента. Детальное описание помогает клиенту сформировать полноценное мнение о продукте и принять окончательное решение о заказе.'},
    {title: 'Вы получите доверие', text: 'Наличие веб-сайта свидетельствует о технической продвинутости компании и соответствии требованиям времени. Также присутствие в Интернете делает вас более авторитетным.'},
    {title: 'Сайт убирает географические границы.', text: 'Компания может находиться в любой стране/регионе и охватывать аудиторию далеко за пределами своей сферы влияния'},
    {title: 'Онлайн-офис 24 часа в сутки', text: 'Сайт убирает географические границы. Компания может находиться в любой стране/регионе и охватывать аудиторию далеко за пределами своей сферы влияния'},
    {title: 'Привлечение новых партнеров', text: 'Только постоянный приток новых деловых партнеров позволяет компании постоянно развиваться. На сайте могут размещаться инвестиционные предложения, программы для дилеров.'}
]

interface MobileOfferProps {
    closeModal: any
    showContent: boolean
}

const MobileOffer = ({ showContent, closeModal }:MobileOfferProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className={`mobile_offer px-6 pb-6 flex flex-col justify-between w-full h-screen bg-[#1b1b1b] ${showContent ? "content-open" : ""}`}>

            <div className={`bg-[#1b1b1b] rounded-t-[16px] pt-8 ${showContent ? 'slide-up' : ''}`}>

                <div className="flex justify-center mb-8 mt-4">
                    <button onClick={() => closeModal()}
                            className="w-[60px] h-[60px] bg-[#303030] rounded-[50%] flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"
                             data-v-3e6bb2e1="">
                            <path d="M11.1116 11.0767L28.8882 28.85M11.1116 28.85L28.8882 11.0767" stroke="white"
                                  stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                  stroke-linejoin="round" data-v-3e6bb2e1=""></path>
                        </svg>
                    </button>
                </div>
                <div className="flex items-center gap-10 border-b border-neutral-600 pb-20 max-[1200px]:flex-col-reverse">
                    <div className="w-[40%] max-[1040px]:w-full">
                        <h4 className="text-[40px] kanit-bold max-[1040px]:text-[32px]">Создание бизнес сайтов</h4>
                        <p className="text-[18px] max-w-[420px] max-[1040px]:text-[16px]">Для формирования имиджа компании в интернете, повышения
                            продаж и
                            доверия к бренду у целевой аудитории.</p>

                        <div className="flex gap-4 mt-6 max-[1040px]:w-full">
                            <Button onClick={openModal} className="py-[16px] px-[40px] font-semibold z-50 text-[18px] max-[1040px]:w-full max-[1040px]:text-[16px]">Узнать
                                стоимость</Button>
                        </div>
                    </div>

                    <EffectCards/>
                </div>
                <div className="grid place-items-center">
                    <p className="text-[18px] text-center mt-8 mb-4 kanit-bold">В услугу включено:</p>
                    <div className="grid grid-cols-3 gap-y-4 gap-x-6 max-w-[1300px] max-[1040px]:grid-cols-2 max-[600px]:grid-cols-1">
                        {services.map(item => {
                            return (
                                <div className="flex items-center gap-2">
                                <span><svg data-v-29d4f293="" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                           viewBox="0 0 24 24" fill="none"><path data-v-29d4f293=""
                                                                                 d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                                                 stroke="#A05BFF" stroke-linecap="round"
                                                                                 stroke-linejoin="round"></path></svg>
                                </span>
                                    <p className="text-[18px] max-[1040px]:text-[16px]">{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="mb-10 grid place-items-center">
                    <p className="text-[18px] text-center mt-8 mb-4 kanit-bold">Зачем нужен сайт:</p>
                    <div className="grid grid-cols-3 gap-2 max-w-[1300px] max-[1040px]:grid-cols-2 max-[600px]:grid-cols-1">
                        {reasons.map(item => {
                            return (
                                <div className="space-y-2 p-6 bg-black rounded-[30px] max-w-[420px] max-[600px]:max-w-full">
                                    <p className="text-[24px]">{item.title}</p>
                                    <p className="text-[18px]">{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <WarningWindow/>
                <OrderModal isOpen={modalIsOpen} closeModal={closeeModal}/>
            </div>
        </div>
    );
};

export default MobileOffer;

