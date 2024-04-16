import PropTypes from 'prop-types';
import './Estate.css'
import { Link } from 'react-router-dom';

const Estate = ({ estate }) => {

    const { id, estate_title, image, description, location, segment_name, facilities, status, area } = estate;

    return (
        <div className="card13 mb-6 w-[385px]">
            <div className="card13-img">
                <img src={image} alt="nature-pic-CSSsnippets" />
                <div className="card13-details">
                    <h1>{estate_title}</h1>
                    <p>{description}</p>
                    <p>Segment : {segment_name}</p>
                    <div className='flex gap-3'>
                        <p>Facilities : {facilities[0]}</p>
                        <p>{facilities[1]}</p>
                        {/* <p>{facilities[2]}</p> */}
                    </div>
                    <p>location : {location}</p>
                    <div className='flex gap-14'>
                        <p>Area: {area}</p>
                        {/* <p>Status: <span className='text13'>{status}</span></p> */}
                        <div>
                            Status: <span className="text8">{status}</span>
                        </div>
                    </div>
                    <Link to={`/estateDetails/${id}`}>
                        <div>
                            <a href="#">
                                View Property
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="card13-icon"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.object
}

export default Estate;