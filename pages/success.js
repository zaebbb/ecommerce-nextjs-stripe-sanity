import React, {useState, useEffect} from 'react';
import Link from "next/link"
import {BsBagCheckFill} from "react-icons/bs"

import {useStateContext} from "../context/StateContext"
import {runConfetti} from "../lib/utils"

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext()

    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runConfetti()
    }, [])

    return (
        <div className={"success-wrapper"}>
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Спасибо за заказ!</h2>
                <p className="email-msg">Проверьте ваш почтовый ящик на наличие квитанции</p>
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
                        Продолжить покупки
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Success;
