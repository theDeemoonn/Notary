import React from 'react';
import {motion} from 'framer-motion'
import Card from 'react-bootstrap/Card';
import CarouselFadeExample from "./component/Carousel/Carousel";
import Container from "react-bootstrap/Container";
import './App.scss';
import {Button, CardGroup, Row} from 'react-bootstrap';
import RegistryIcon from './icon/registry.png';
import Dover from './icon/dover.png';
import searchingCar from './icon/searchingCar.png'
import openBook from './icon/open-book.png'

function App() {
    return (
        <motion.div className="App page"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        >

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
                            <Card border="primary" style={{
                                width: '18rem',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)'
                            }}>

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
                                          style={{
                                              width: '18rem',
                                              alignItems: 'center',
                                              textAlign: 'center',
                                              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)'
                                          }}>

                            <Card.Body>

                                <Card.Text>
                                    Выдача свидетельств, подтверждающих право на наследство.
                                </Card.Text>
                            </Card.Body>
                        </Card> <Card border="primary"
                                      style={{
                                          width: '18rem',
                                          alignItems: 'center',
                                          textAlign: 'center',
                                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)'
                                      }}>

                            <Card.Body>

                                <Card.Text>
                                    Подтверждение точности копий документов и выписок. При заверении бумаг при
                                    необходимости
                                    будут разъяснены положения законодательства.
                                </Card.Text>
                            </Card.Body>
                        </Card> <Card border="primary"
                                      style={{
                                          width: '18rem',
                                          alignItems: 'center',
                                          textAlign: 'center',
                                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)'
                                      }}>

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
            <Container>
                <div className='public__registry'>
                    <img className='registryIcon' src={RegistryIcon} alt='registryLogo'/>
                    <h2 className='h2'> Публичные реестры и сервисы</h2>


                    <CardGroup>
                        <Row xs={1} md={3} className="gap-sm-4">
                            <Card border="primary" style={{
                                width: '18rem',
                                alignItems: 'center',
                                textAlign: 'center',

                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)',
                            }}>
                                <Card.Img className='logo__card' variant="top" src={Dover}/>
                                <Card.Body>
                                    <Card.Title>Сервис проверки доверенностей</Card.Title>
                                    <Card.Text>
                                        С помощью этого сервиса можно проверить действительность выданной
                                        доверенности
                                    </Card.Text>
                                    <Button href='https://www.reestr-dover.ru/' target='_blank'
                                            variant="primary">Перейти</Button>
                                </Card.Body>
                            </Card>
                            <Card border="primary" style={{
                                width: '18rem',
                                alignItems: 'center',
                                textAlign: 'center',


                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)'
                            }}>
                                <Card.Img className='logo__card' variant="top" src={searchingCar}/>
                                <Card.Body>
                                    <Card.Title>Реестр уведомлений о залоге движимого имущества</Card.Title>
                                    <Card.Text>
                                        Перед покупкой автомобиля надо обязательно проверить его в реестре
                                        залогов
                                    </Card.Text>
                                    <Button href='https://www.reestr-zalogov.ru/state/index' target='_blank'
                                            variant="primary">Перейти</Button>
                                </Card.Body>
                            </Card>

                            <Card border="primary" style={{
                                width: '18rem',
                                alignItems: 'center',
                                textAlign: 'center',

                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.47)'
                            }}>
                                <Card.Img className='logo__card' variant="top" src={openBook}/>
                                <Card.Body>
                                    <Card.Title>Реестр наследственных дел</Card.Title>
                                    <Card.Text>
                                        Предназначен для поиск открытых наследственных дел у любого нотариуса Российской
                                        Федерации
                                    </Card.Text>
                                    <Button href='https://notariat.ru/ru-ru/help/probate-cases/' target='_blank'
                                            variant="primary">Перейти</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </CardGroup>


                </div>
            </Container>


        </motion.div>
    );
}

export default App;
