import React from "react";
import Link from "next/link";

const BlurredOverlayCard = ({ image, title, content, link }) => (
    <div className="blurredOverlayCard">
        <img src={image} alt="Avatar" className="imageBehindBlur" />
        <div className="overlayOnBlurred">
            <div className="title">
                <Link href={`${link}`}>
                    <a>{title}</a>
                </Link>
            </div>
            <div className="text mt-1">{content}</div>
        </div>
    </div>
);
  
export default BlurredOverlayCard;