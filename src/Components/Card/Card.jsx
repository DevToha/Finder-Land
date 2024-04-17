import { RiShoppingCartLine } from "react-icons/ri";

import './Cart.css'
import { Link } from "react-router-dom";
const Card = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-semibold mt-10">WELCOME TO SHOPPING CART</h1>

            <p className="ml-[685px] text-[160px] my-6"><RiShoppingCartLine /></p>

            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-lg font-medium my-2">You have not added any products yet.</p>
            <div className="card9-button-container">
                <Link to="/"><button>Go To Home</button></Link>
            </div>
        </div>
    );
};

export default Card;