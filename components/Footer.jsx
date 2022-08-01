import React from 'react';
import {AiFillInstagram, AiOutlineTwitter, AiOutlineYoutube} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";

const Footer = () => {
    return (
        <div className={"footer-container"}>
            <p>&copy;2022 DEVSHOP Все права защищены</p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
                <BsFacebook />
                <AiOutlineYoutube />
            </p>
        </div>
    );
};

export default Footer;
