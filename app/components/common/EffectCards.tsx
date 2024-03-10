"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from "next/image";

export default function CardSwiper() {
    return (
        <div className="swiperWrapper w-[50%] max-[1200px]:w-full">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src="/images/swiper1.webp"
                        alt="Vercel Logo"
                        width={550}
                        height={350}
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/swiper2.webp"
                        alt="Vercel Logo"
                        width={550}
                        height={350}
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/swiper3.jpeg"
                        alt="Vercel Logo"
                        width={550}
                        height={350}
                        priority
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
