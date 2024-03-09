import React from 'react';
import Image from "next/image";

function SpinnerIcon({img=false}) {

    return (
        <div className="spinner-container">
            {img && <Image
                    src='/images/sun.png'
                    alt="Vercel Logo"
                    width={118}
                    height={37}
                    priority
                    className="bigSpinner"
                />
            }

            {!img && <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                className="spinner" // Add class for styling
            >
                <path
                    d="M5.89724 4.26817V0H7.09461V4.26817L9.22871 0.570176L10.2632 1.17293L8.12908 4.87093L11.8271 2.73684L12.4217 3.7713L8.73184 5.90539H13V7.10276H8.73184L12.4217 9.23685L11.8271 10.2713L8.12908 8.13722L10.2632 11.8352L9.22871 12.4298L7.09461 8.73183V13H5.89724V8.73183"
                    fill="#A05BFF"
                ></path>
                <path
                    d="M7.09461 4.26817V0H5.89724V4.26817L3.76316 0.57832L2.7287 1.17293L4.86279 4.87093L1.16479 2.73684L0.570179 3.7713L4.26817 5.90539H0V7.10276H4.26817L0.570179 9.23685L1.16479 10.2713L4.86279 8.13722L2.7287 11.8352L3.76316 12.4298L5.89724 8.73183V13H7.09461V8.73183"
                    fill="#A05BFF"
                ></path>
            </svg>
            }
        </div>
    );
}

export default SpinnerIcon;
