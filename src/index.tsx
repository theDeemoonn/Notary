import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import AnimatedRoutes from "./component/AnimatedRoutes/AnimatedRoutes";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <BrowserRouter>
        <header>
            <Navbar/>
        </header>
        <AnimatedRoutes/>
        <footer>
            <Footer/>
        </footer>
    </BrowserRouter>
);


reportWebVitals();
