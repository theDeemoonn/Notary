import React from 'react';
import Card from 'react-bootstrap/Card';

import Navibar from "./component/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import CarouselFadeExample from "./component/Carousel/Carousel";
import Container from "react-bootstrap/Container";
import './App.scss';
import {CardGroup, Row} from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navibar/>


            </header>
            <CarouselFadeExample/>
            <Container>
                <div className='container__body'>

                    <h1>Добро пожаловать на официальный сайт нотариуса Зверевой Людмилы
                        Ивановны!</h1>
                    <div>


                        <p className='text-body'>
                            Нотариальная контора нотариуса Зверевой Людмилы Ивановны предоставляет
                            широкий спектр нотариальных услуг и нотариальных действий, предусмотренных «Основами
                            законодательства РФ о нотариате» и другими нормативными актами Российской Федерации.
                            Нотариус
                            совершает нотариальные действия от имени Российской Федерации.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='h2'> Когда следует идти к нoтaриyсу? </h2>

                    <p className='text-body'>Нотариальные услуги направлены на оказание юридической помощи гражданам,
                        индивидуальным предпринимателям и организациям. Нотариат как институт права создан давно, он
                        является важнейшей частью государственной юридической системы. К нотариусу необходимо обращаться
                        во многих случаях, наиболее распространенные среди них следующие:</p>

                    <CardGroup className='card-group'>
                        <Row xs={1} md={3} className="gap-sm-4">
                            <Card border="primary" style={{width: '18rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)'}}>

                                <Card.Body>

                                    <Card.Text>
                                        Удостоверение подлинности подписи. Нотариальный акт подтверждает, что
                                        документация
                                        составлена с соблюдением юридических норм. Обращение к специалисту при
                                        оформлении
                                        договора
                                        позволит подтвердить факт добровольности сделки.
                                    </Card.Text>
                                </Card.Body>
                            </Card> <Card border="primary"
                                          style={{width: '18rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)'}}>

                            <Card.Body>

                                <Card.Text>
                                    Выдача свидетельств, подтверждающих право на наследство.
                                </Card.Text>
                            </Card.Body>
                        </Card> <Card border="primary"
                                      style={{width: '18rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)'}}>

                            <Card.Body>

                                <Card.Text>
                                    Подтверждение точности копий документов и выписок. При заверении бумаг при
                                    необходимости
                                    будут разъяснены положения законодательства.
                                </Card.Text>
                            </Card.Body>
                        </Card> <Card border="primary"
                                      style={{width: '18rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)'}}>

                            <Card.Body>

                                <Card.Text>
                                    Удостоверение доверенности на распоряжение имуществом.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Row>
                    </CardGroup>


                </div>
            </Container>


            <Footer/>
        </div>
    );
}

export default App;
