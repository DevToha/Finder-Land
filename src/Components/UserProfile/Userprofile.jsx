import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import 'animate.css';



const Userprofile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className=" px-10 mt-10">
            <div className="bg-white shadow-lg h-[420px] py-5 pl-[115px] ml-[450px] m-10 rounded-3xl w-[590px]">
                {
                    user &&
                    <div className="">
                        <h1 className="text-3xl font-semibold my-5 animate__bounceInUp ml-20">User profile</h1>
                        <span className="bg-gray-400 w-[45px] rounded-full h-[45px]"><img className="rounded-full ml-28 w-[100px] h-[100px]" src={user.photoURL} alt="" /></span>
                        <p className="text-lg font-semibold mt-5 ml-[85px]"> Name : {user.displayName}</p>
                        <br />
                        <p className="text-lg font-semibold ml-3">Email : {user.email}</p>
                    </div>
                }

                {/* <button className="btn btn-warning mt-10 ml-[110px]">Edit Profile</button> */}
            </div>
        </div>
    );
};

export default Userprofile;