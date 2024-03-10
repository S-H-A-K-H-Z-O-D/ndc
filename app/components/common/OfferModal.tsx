"use client"

// @ts-nocheck
import React, {useState} from 'react';
import Modal from 'react-modal';
import Button from "@/app/components/common/Button";
import EffectCards from "@/app/components/common/EffectCards";
import OrderModal from "@/app/components/common/OrderModal";
import WarningWindow from "@/app/components/common/WarningWindow";

const customStyles: any = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        zIndex: '11',
        overflow: "auto",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    content: {
        top: '95%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#1b1b1b',
        border: '1px solid #525252',
        borderRadius: '30px',
        padding: '70px 90px',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
    }
};

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

interface OfferModalProps {
    isOpen: boolean;
    closeModal: any
}
const OfferModal = ({ isOpen, closeModal }:OfferModalProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <div className="relative">

                <div className="flex items-center gap-10 border-b border-neutral-600 pb-20">
                    <div className="w-[40%]">
                        <h4 className="text-[40px] kanit-bold">Создание бизнес сайтов</h4>
                        <p className="text-[18px] max-w-[420px]">Для формирования имиджа компании в интернете, повышения
                            продаж и
                            доверия к бренду у целевой аудитории.</p>

                        <div className="flex gap-4 mt-6">
                            <Button onClick={openModal} className="py-[16px] px-[40px] font-semibold z-50 text-[18px]">Узнать
                                стоимость</Button>
                        </div>
                    </div>

                    <EffectCards/>
                </div>

                <div>
                    <p className="text-[18px] text-center mt-8 mb-4 kanit-bold">В услугу включено:</p>
                    <div className="grid grid-cols-3 gap-y-4 gap-x-6 max-w-[1300px]">
                        {services.map(item => {
                            return (
                                <div className="flex items-center gap-2">
                                <span><svg data-v-29d4f293="" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                           viewBox="0 0 24 24" fill="none"><path data-v-29d4f293=""
                                                                                 d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                                                 stroke="#A05BFF" stroke-linecap="round"
                                                                                 stroke-linejoin="round"></path></svg>
                                </span>
                                    <p className="text-[18px]">{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="mb-10">
                    <p className="text-[18px] text-center mt-8 mb-4 kanit-bold">Зачем нужен сайт:</p>
                    <div className="grid grid-cols-3 gap-2 max-w-[1300px]">
                        {reasons.map(item => {
                            return (
                                <div className="space-y-2 p-6 bg-black rounded-[30px] w-[420px]">
                                    <p className="text-[24px]">{item.title}</p>
                                    <p className="text-[18px]">{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <WarningWindow />


                <OrderModal isOpen={modalIsOpen} closeModal={closeeModal}/>
                <button onClick={closeModal}
                        className="bg-[#303030] absolute p-2 rounded-full top-[-50px] right-[-70px]">
                    <svg data-v-18c3fd30="" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         viewBox="0 0 16 16" fill="none">
                        <path data-v-18c3fd30="" d="M4.44458 4.43066L11.5552 11.54M4.44458 11.54L11.5552 4.43066"
                              stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                              stroke-linejoin="round"></path>
                    </svg>
                </button>
            </div>
        </Modal>
    );
};

export default OfferModal;
