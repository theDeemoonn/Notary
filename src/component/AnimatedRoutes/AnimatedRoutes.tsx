import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import App from "../../App";
import Tariff from "../../layout/tariff/tariff";
import NotarialActs from "../../layout/NotarialActs/NotarialActs";
import Contact from "../../layout/contact/contact";
import './_AnimatedRoutes.scss';
import {Container} from "react-bootstrap";
import {AnimatePresence} from 'framer-motion';


const routes = [
    {path: "/", name: 'Главная', Component: <App/>},
    {path: "/tariff", name: 'Тарифы', Component: <Tariff/>},
    {path: "/notarial-acts", name: 'Нотариальные действия', Component: <NotarialActs/>},
    {path: "/contact", name: 'Контакты', Component: <Contact/>},

]

function Apps() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Container className='container'>
                <Routes location={location} key={location.pathname}>
                    {routes.map(({path, Component}) => (
                        <Route key={path} path={path} element={Component}/>
                    ))}
                </Routes>
            </Container>
        </AnimatePresence>
    );
}

export default Apps;

