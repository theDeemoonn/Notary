import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalContact() {
    const [show, setShow] = useState(false);
    const [contacts, setContacts] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleContacts = () => setContacts(!contacts);

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
                        <h3>
                            <a className='link' target="_blank"
                               href="https://notariat.ru/ru-ru/" rel="noreferrer"> Федеральная нотариальная палата
                            </a>
                        </h3>
                    </div>
                    <div className='text-center mt-2'>
                        <h3>
                            <a className='link' target="_blank"
                               href="http://npra.ru/" rel="noreferrer"> Нотариальная палата Республики Адыгея
                            </a>
                        </h3>
                    </div>
                    <div className='text-center mt-2'>
                        <h3>
                            <a className='link' target="_blank"
                               href="https://minjust.gov.ru/" rel="noreferrer"> Министерство юстиции Российской
                                Федерации
                            </a>
                        </h3>
                    </div>
                    <div className='text-center mt-2'>
                        <h3>
                            <a className='link' target="_blank"
                               href="https://to01.minjust.gov.ru/ru/" rel="noreferrer"> Управление Минюста России по
                                Республике Адыгея
                            </a>
                        </h3>
                    </div>
                    <div className='text-center mt-2'>
                        <h3 className='link' style={{cursor: "pointer"}} onClick={handleContacts}>Ближайшая нотариальная
                            контора</h3>
                        {contacts ? <div>
                                <p>
                                    385400, Республика Адыгея, а. Кошехабль, ул. Дружбы Народов, 62/11
                                </p>
                                <p>Телефон: 8 (87770)-9-11-07</p>
                            </div> :
                            null}

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

