import './Review.css'

const Review = () => {
    return (
        <div className='lg:flex md:flex lg:px-28 mt-14 lg:gap-24 md:gap-10 md:ml-10'>
            <div className="card1 p-10 rounded-md bg-slate-200 lg:ml-0 md:ml-0 ml-10">
                <p className="text-6xl mt-28">4.8</p>

                <ul className=" my-5">
                    <li>Trustscore on 215 reviews</li>
                </ul>
                <p className='cursor-pointer mt-14'>SEE ALL REVIEW ON</p>
            </div>
            <p className=' bg-gray-200 lg:w-[2px] lg:h-[475px]'></p>
            <div>
                <p className='lg:text-4xl font-medium mb-10 lg:w-full lg:ml-0 md:ml-0 ml-10 w-[308px] lg:mt-0 mt-5'>“As a buyer in a busy market where <br /> everyone is a real estate agent, I seek <br /> transparency in true numbers & <br /> Finderland is my first and only choice. <br /> Searches for multiplexes,property <br /> comparisons, and the loan estimator. <br /> Works great.”</p>
                <p className='text-lg mb-3 font-bold lg:ml-0 md:ml-0 ml-10'>Thiago Alcatara</p>
                <p className=' lg:ml-0 md:ml-0 ml-10'>Chicago, FL</p>
            </div>
        </div>
    );
};

export default Review;