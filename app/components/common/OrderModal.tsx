import React from 'react';
import Modal from 'react-modal';
import PhoneInput from "react-phone-input-2";
import {TextInput} from "flowbite-react";
import SiteType from "@/app/components/common/SiteType";
import Image from "next/image";
import Button from "@/app/components/common/Button";
import {MdCancel} from "react-icons/md";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '11',
        overflow:"auto",
    },

    content: {
        top: '60%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#1b1b1b',
        border: '1px solid #525252',
        borderRadius: '30px',
        overflow:"auto",
        padding: '60px 40px 40px'
    }
};

interface OrderModalProps {
    isOpen: boolean;
    closeModal: any
}

const OrderModal = ({ isOpen, closeModal }:OrderModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <div className="flex gap-10 relative max-[1090px]:flex-col">
                <div className="max-w-[320px]">
                    <p className="text-[40px] kanit-bold max-[510px]:text-[28px]">Оставить заявку</p>
                    <p className="text-[18px] max-[510px]:text-[14px]">Оставьте Ваши контактные данные и наши менеджеры свяжутся с вами</p>
                </div>
                <div className="flex items-center gap-2 min-[850px]:hidden bg-black rounded-[10px] p-4">
                    <Image
                        src="/images/person.webp"
                        alt="Vercel Logo"
                        width={60}
                        height={60}
                        priority
                        className="border-4 rounded-full"
                    />
                    <div>
                        <p className="kanit-bold">Акмал Икромов</p>
                        <p className="text-[14px] text-[#adadad]">Менежер</p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-5 max-[1090px]:gap-2 max-[1090px]:flex-col">
                        <div className="w-[370px] max-[1090px]:w-full max-[510px]:text-[14px]">
                            <PhoneInput
                                country={'uz'}
                                // value={value}
                                // onChange={setValue}
                                disableCountryCode={false}
                                inputStyle={{
                                    'backgroundColor': '#252525',
                                    'paddingLeft': '20px',
                                    border: '1px solid #525252',
                                    borderRadius: "9px",
                                    height: '56px',
                                    width: "100%",
                                    fontSize: '18px'
                                }}
                                placeholder={"00 000 00 00"}
                                buttonStyle={{display: 'none'}}
                            />
                        </div>
                        <div className="w-[370px] max-[1090px]:w-full">
                            <TextInput
                                style={{
                                    'backgroundColor': '#252525',
                                    'paddingLeft': '20px',
                                    border: '1px solid #525252',
                                    borderRadius: "9px",
                                    height: '56px',
                                    width: "100%",
                                    fontSize: '18px'
                                }}
                                placeholder={'Ваше имя'}
                                type={'text'}
                            />
                        </div>
                    </div>
                    <SiteType/>
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center gap-2 max-[850px]:hidden">
                            <Image
                                src="/images/person.webp"
                                alt="Vercel Logo"
                                width={60}
                                height={60}
                                priority
                                className="border-4 rounded-full"
                            />
                            <div>
                                <p className="kanit-bold">Акмал Икромов</p>
                                <p className="text-[14px] text-[#adadad]">Менежер</p>
                            </div>
                        </div>
                        <Button className="w-[225px] h-[56px] font-semibold z-50 max-[850px]:w-full">
                            Заказать проект
                        </Button>
                    </div>
                </div>
                <button onClick={closeModal}
                        className="bg-[#303030] absolute p-2 rounded-full top-[-50px] right-[-30px]">
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

export default OrderModal;
