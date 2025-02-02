import './destination.css'

import newYork from './images/christian-ladewig-FD-gzGKS5sY-unsplash.jpg'

const Destinations = () => {
    return (
        <div className="lg:mt-8 p-10 lg:px-0 md:px-0 px-20">
            <h1 className="text-4xl font-bold mb-10 lg:ml-16">Discover Top Destinations</h1>
            <div className='lg:flex md:grid md:grid-cols-3 justify-center gap-5'>
                <div className="lg:mb-0 mb-5 card7 p-6">
                    <div className="card7-details">
                        <div>
                            <img src={newYork} alt="" />
                        </div>
                        <p className="card7-title mt-5">New York City, USA</p>
                        <p className="card7-description mt-3">
                            452 Properties
                        </p>
                    </div>
                </div>
                <div className="lg:mb-0 mb-5 card7 p-6">
                    <div className="card7-details">
                        <div>
                            <img src={newYork} alt="" />
                        </div>
                        <p className="card7-title mt-5">New York City, USA</p>
                        <p className="card7-description mt-3">
                            452 Properties
                        </p>
                    </div>
                </div>
                <div className="lg:mb-0 mb-5 card7 p-6">
                    <div className="card7-details">
                        <div>
                            <img src={newYork} alt="" />
                        </div>
                        <p className="card7-title mt-5">New York City, USA</p>
                        <p className="card7-description mt-3">
                            452 Properties
                        </p>
                    </div>
                </div>
                <div className="lg:mb-0 mb-5 card7 p-6">
                    <div className="card7-details">
                        <div>
                            <img src={newYork} alt="" />
                        </div>
                        <p className="card7-title mt-5">New York City, USA</p>
                        <p className="card7-description mt-3">
                            452 Properties
                        </p>
                    </div>
                </div>
                <div className="lg:mb-0 mb-5 card7 p-6">
                    <div className="card7-details">
                        <div>
                            <img src={newYork} alt="" />
                        </div>
                        <p className="card7-title mt-5">New York City, USA</p>
                        <p className="card7-description mt-3">
                            452 Properties
                        </p>
                    </div>
                </div>
                <div className="lg:mb-0 mb-5 card7 p-6">
                    <div className="card7-details">
                        <div>
                            <img src={newYork} alt="" />
                        </div>
                        <p className="card7-title mt-5">New York City, USA</p>
                        <p className="card7-description mt-3">
                            452 Properties
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;