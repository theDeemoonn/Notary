import React, {DetailedHTMLProps, HTMLAttributes} from "react";

// @ts-ignore
import Menu from 'react-burger-menu/lib/menus/slide';
import './_Burger.scss';


export interface BurgerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onClose?: () => void;
}


export default function Links({...props}: BurgerProps): JSX.Element {

    const HamburgerIcon = () => (
        <div>
            <svg className="w-8 h-8 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round"
                 strokeWidth="2"
                 viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </div>)


    return (

        <Menu right customBurgerIcon={<HamburgerIcon/>}>
            <main id="page-wrap">

                <a id="home" className="menu-item" href="/">Главная</a>
                <a id="tariff" className="menu-item" href="/tariff">Тарифы</a>
                <a id="contact" className="menu-item" href="/contact">Контакты</a>


            </main>


        </Menu>


    );

}