import React from 'react';
import {motion} from 'framer-motion'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './_contact.scss'
import IMG from '../../icon/DSCF6018@2x.webp'
import ModalContact from "./modal/contactModal";


export default function Contact() {
    return (
        <motion.div className="contact"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <main className='_main'>

                <Container>
                    <Row>
                        <Col>
                            <div className="contact__container__img">
                                <img src={IMG} alt='notary_photo'/>
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
                                </div>
                                <div className="contact__container__content__item">
                                    <h2>Электронная почта</h2>
                                    <p>
                                        <a className='link' href="mailto:00600041@mail.ru"> 00600041@mail.ru
                                        </a>
                                    </p>
                                </div>
                                <div className="contact__container__content__item">
                                    <ModalContact/>
                                </div>
                            </div>


                        </Col>


                    </Row>
                    <Row className='contact__container__bottom'>
                        {/*<Col><p>Лицензия № 60 от 14 декабря 2006 года</p>*/}
                        <Col><p>Приказ о наделении полномочиями нотариуса <br/> № 45-л от 05.03.2007</p>
                            <p>Регистрационный номер в реестре <br/> нотариусов: 01/34-н/01</p></Col>
                        {/*<Col></Col>*/}
                        <Col><span><p>График работы:</p>

                            Пн-Пт с 9-00 до 17-00

                            Перерыв с 13-00 до 14-00<br/>

                            <p>Выходные дни:</p> суббота, воскресенье</span></Col>

                    </Row>
                </Container>


            </main>


        </motion.div>


    );
}
