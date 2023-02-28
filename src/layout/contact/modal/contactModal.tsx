import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalContact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Дополнительные контакты
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className='text-center mt-2'>Ближайшая нотариальная контора и иные
                        контакты</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center mt-2'>
                        <h3>Федеральная нотариальная палата</h3>
                        <p>
                            <a className='link' target="_blank"
                               href="https://notariat.ru/ru-ru/" rel="noreferrer"> notariat.ru
                            </a>
                        </p>
                    </div>
                    <div className='text-center mt-2'>
                        <h3>Нотариальная палата Республики Адыгея</h3>
                        <p>
                            <a className='link' target="_blank"
                               href="http://npra.ru/" rel="noreferrer"> npra.ru
                            </a>
                        </p>
                    </div>
                    <div className='text-center mt-2'>
                        <h3>Министерство юстиции Российской Федерации</h3>
                        <p>
                            <a className='link' target="_blank"
                               href="https://minjust.gov.ru/" rel="noreferrer"> minjust.gov.ru
                            </a>
                        </p>
                    </div>
                    <div className='text-center mt-2'>
                        <h3>Управление Минюста России по Республике Адыгея</h3>
                        <p>
                            <a className='link' target="_blank"
                               href="https://to01.minjust.gov.ru/ru/" rel="noreferrer"> to01.minjust.gov.ru
                            </a>
                        </p>
                    </div>
                    <div className='text-center mt-2'>
                        <h3>Ближайшая нотариальная контора</h3>
                        <p>
                            385400, Республика Адыгея, а. Кошехабль,ул. Дружбы Народов, 62/11
                        </p>
                        <p>Телефон: 8 (87770)-9-11-07</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

