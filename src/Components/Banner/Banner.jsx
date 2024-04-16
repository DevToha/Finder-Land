
// import { Swiper, SwiperSlide } from 'swiper/react';
// import './Banner.css'

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Button from 'react-bootstrap/Button';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import slide_image_1 from '../../assets/Images/alessa-ciraulo-1HsiFH7oqBU-unsplash.jpg';
// import slide_image_2 from '../../assets/Images/daniel-barnes-RKdLlTyjm5g-unsplash.jpg';
// import slide_image_3 from '../../assets/Images/lycs-architecture-kUdbEEMcRwE-unsplash.jpg';
// import slide_image_4 from '../../assets/Images/mohd-elle-oji_NGmBI5o-unsplash.jpg';
// import slide_image_5 from '../../assets/Images/mostafa-safadel-cHjAxnJk_wQ-unsplash.jpg';
// import slide_image_6 from '../../assets/Images/sara-dubler-Koei_7yYtIo-unsplash.jpg';



const Banner = () => {

    return (
        <Carousel className='mb-20' data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=f5f5f5"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=eee"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Button variant="info">Info</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
        </Carousel>
    );
};

export default Banner;
