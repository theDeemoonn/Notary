import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../../icon/Carousel@2x.webp';
import Carousel2 from '../../icon/Carousel2@2x.webp';
import Carousel3 from '../../icon/Carousel3@2x.webp';
import './_Carousel.scss';


function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel1}
                    alt="First slide"
                />
                <Carousel.Caption className='carousel'>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Carousel3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                  
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;