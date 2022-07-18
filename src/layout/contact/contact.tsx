import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navibar from "../../component/Navbar/Navbar";
import Footer from "../Footer/Footer";
import './_contact.scss'
import IMG from '../../icon/DSCF6018@2x.webp'


export type ContactProps = {}

export default function Contact({}: ContactProps) {
    return (
        <div className="contact">
            <header className='_header'>
                <Navibar/>
            </header>
            <main className='_main'>

                <Container>
                    <Row>
                        <Col>
                            <div className="contact__container__img">
                                <img src={IMG}/>
                            </div>
                        </Col>
                        <Col>
                            <div className="contact__container__title">
                                <h1>Контакты</h1>
                            </div>
                            <div className="contact__container__content">
                                <div className="footer__contacts">
                                    <a href='https://yandex.ru/maps/-/CCUNR6Gq~C' target="_blank"
                                       className="footer__contacts"
                                       rel="noreferrer">385400, Республика
                                        Адыгея, Кошехабльский
                                        район, <br/> а. Кошехабль, ул. Дружбы Народов,
                                        дом 59
                                    </a>


                                </div>
                                <div className="contact__container__content__item">
                                    <h2>Телефон</h2>
                                    <a className='link' href='tel:+79184241778'>+7 918 424-17-78</a> <br/>
                                    <a className='link' href='tel:+78777092833'>+7 87770 9-28-33</a>
                                </div>
                                <div className="contact__container__content__item">
                                    <h2>Электронная почта</h2>
                                    <p>
                                        <a className='link' href="mailto:00600041@mail.ru"> 00600041@mail.ru
                                        </a>
                                    </p>
                                </div>
                            </div>


                        </Col>


                    </Row>
                    <Row className='contact__container__bottom'>
                        <Col><p>Лицензия № 60 от 14 декабря 2006 года</p></Col>
                        <Col><p>График работы:

                            Пн-Пт с 9-00 до 17-00

                            Перерыв с 13-00 до 14-00<br/>

                            Выходные дни: суббота, воскресенье</p></Col>

                    </Row>
                </Container>


            </main>


            <footer>
                <Footer/>
            </footer>
        </div>


    );
}
