import React, {DetailedHTMLProps, HTMLAttributes} from 'react';

import Header from "../component/Navbar/Navbar";
import Footer from "./Footer/Footer";

import './_Layout.scss';
import './Header/_Header.scss';

export * from './Layout';

export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

    children: React.ReactNode;
}


export default function Layout({children, ...props}: LayoutProps): JSX.Element {
    return (
        <div className='wrapper'>
            <Header/>

            <div className='body'>


                {children}


            </div>
            <Footer className='footer'/>
        </div>

    );
}