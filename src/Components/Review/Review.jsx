import './Review.css'

const Review = () => {
    return (
        <div className='flex px-28 mt-14 gap-24'>
            <div className="card1 p-10 rounded-md bg-slate-200">
                <p className="text-6xl mt-28">4.8</p>

                <ul className=" my-5">
                    <li>Trustscore on 215 reviews</li>
                </ul>
                <p className='cursor-pointer mt-14'>SEE ALL REVIEW ON</p>
            </div>
            <p className=' bg-gray-200 w-[2px] h-[475px]'></p>
            <div>
                <p className='text-4xl font-medium mb-10'>“As a buyer in a busy market where everyone <br /> is a real estate agent, I seek transparency in <br /> true numbers & Finderland is my first and only <br /> choice.Searches for multiplexes, property <br /> comparisons, and the loan estimator. Works <br /> great.”</p>
                <p className='text-lg mb-3 font-bold'>Thiago Alcatara</p>
                <p>Chicago, FL</p>
            </div>
        </div>
    );
};

export default Review;