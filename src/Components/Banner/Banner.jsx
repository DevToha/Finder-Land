
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';

import slide_image_1 from '../../assets/Images/alessa-ciraulo-1HsiFH7oqBU-unsplash.jpg';
import slide_image_2 from '../../assets/Images/daniel-barnes-RKdLlTyjm5g-unsplash.jpg';
import slide_image_3 from '../../assets/Images/lycs-architecture-kUdbEEMcRwE-unsplash.jpg';
import slide_image_4 from '../../assets/Images/mohd-elle-oji_NGmBI5o-unsplash.jpg';
import slide_image_5 from '../../assets/Images/mostafa-safadel-cHjAxnJk_wQ-unsplash.jpg';
import slide_image_6 from '../../assets/Images/sara-dubler-Koei_7yYtIo-unsplash.jpg';


const Banner = () => {

    return (
        <div className='px-14 mt-5 lg:mb-10'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide_image_1} className="w-full lg:h-[600px] h-[500px] rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide_image_2 } className="w-full h-[600px] rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide_image_3} className="w-full h-[600px] rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slide_image_4} className="w-full h-[600px] rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={slide_image_5} className="w-full h-[600px] rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={slide_image_6} className="w-full h-[600px] rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
