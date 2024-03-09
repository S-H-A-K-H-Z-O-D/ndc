"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const ImageGallery = ({ images }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="imageGallery max-[920px]:flex-wrap">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`galleryImageContainer ${hoveredIndex === index ? 'enlarged' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <Image
                        src={image}
                        alt={`Image ${index}`}
                        width={150}
                        height={150}
                        className="rounded-[100%]"
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;

