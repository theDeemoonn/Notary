import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import Container from "react-bootstrap/Container";
import {format} from 'date-fns';
import './_Footer.scss';
import {Button} from "react-bootstrap";


export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export default function Footer({className, ...props}: FooterProps): JSX.Element {
    return (

        <footer className="footer" {...props}>
            <Container fluid style={{
                backgroundColor: '#F8F9FAFF',
                color: '#212529FF'
            }}>
                <Container style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="copyright">
                        Copyright © {format(new Date(), 'yyyy')} Нотариус <br/> Зверева Людмила Ивановна
                    </div>
                    <div className="footer__contacts">
                        <a href='https://yandex.ru/maps/-/CCUNR6Gq~C' target="_blank" className="footer__contacts"
                           rel="noreferrer"> Республика
                            Адыгея, Кошехабльский
                            район, <br/> а. Кошехабль, ул. Дружбы Народов,
                            дом 59
                        </a>


                    </div>


                    <div className="footer__social">
                        <a className='link' href="/">Главная</a>
                        <a className='link' href="/contact">Контакты</a>
                        <a className='link' href="/tariff">Тарифы</a>
                    </div>


                    <p>Сделано в <a className='link' target="_blank" href="http://sbys.me/"
                                    rel="noreferrer">SBYS</a>
                    </p>


                </Container>
                <div className="d-grid gap-2">
                    <Button href='tel:+79184241778' variant="primary" size="lg">
                        Позвонить
                    </Button>
                </div>
            </Container>

        </footer>

    );
}
