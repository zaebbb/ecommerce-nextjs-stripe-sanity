import React from 'react';
import Link from "next/link"
import {BsBagXFill} from "react-icons/bs"

const Canceled = () => {

    return (
        <div className={"success-wrapper"}>
            <div className="success">
                <p className="icon">
                    <BsBagXFill />
                </p>
                <h2>Покупка была отменена!</h2>
                <p className="email-msg">Ваши товары были сохранены в корзине</p>
                <p className="description">
                    Если у вас есть какие либо вопросы напишите по электронной почте
                    <a href="mailto:vladimirmihajlov0893@gmail.com" className="email">vladimirmihajlov0893@gmail.com</a>
                </p>
                <Link href={"/"}>
                    <button
                        width={"300px"}
                        className={"btn"}
                        type={"button"}
                    >
                        Продолжить
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Canceled;
