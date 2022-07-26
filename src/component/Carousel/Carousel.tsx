import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../../icon/Carousel@2x.webp';
import Carousel2 from '../../icon/Carousel2@2x.webp';
import Carousel3 from '../../icon/Carousel3@2x.webp';
import './_Carousel.scss';


function CarouselFadeExample() {
    return (
        <Carousel fade className='carousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel3}
                    alt="First slide"
                />
                <div className='top'>
                    <p>Комфорт и юридическая чистота сделки</p>
                    <p>Ускоренная государственная регистрация <br/> прав собственности</p>
                </div>
                <div className='bottom'>
                    <p>Гарантии соблюдения законных прав</p>
                    <p className='second'>Безопасность и удобство расчетов</p>
                </div>
                <Carousel.Caption>
                    <h3>Сделки с недвижимостью в режиме одного окна с гарантией нотариуса</h3>
                    <p className='media_wrap'>Комфорт и юридическая чистота сделки</p>


                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel1}
                    alt="Second slide"
                />
                <div className='top'>
                    <p>Выдаем свидетельства о праве <br/> на наследства</p>
                    <p>Регистрируем права наследников <br/> в Росреестре</p>


                </div>
                <div className='bottom'>
                    <p>Оформление наследственных <br/> прав</p>
                    <p>Запрашиваем документы <br/> в электронном виде</p>
                </div>

                <Carousel.Caption>
                    <h3>Оформление наследства</h3>
                    <p className='media_wrap'>Запрашиваем документы в электронном виде</p>
                    <p className='media_wrap'>Регистрируем права наследников в Росреестре</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel2}
                    alt="Third slide"
                />


                <Carousel.Caption>
                    <h3>Депозит нотариуса для расчетов по сделкам</h3>
                    <p className='second_slide'>Надежно, удобно, комфортно, безопасно</p>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;