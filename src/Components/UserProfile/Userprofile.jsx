import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Userprofile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className=" px-10 mt-10">
            <div className="bg-gray-200 rounded-2xl w-[] h-[400px] pt-16 ">
                {
                    user &&
                    <div className="ml-[642px]">
                        <span className="bg-gray-400 w-[45px] mr-5 rounded-full h-[45px]"><img className="rounded-full w-[100px] h-[100px]" src={user.photoURL} alt="" /></span>
                        <p className="text-lg font-semibold"> Name : {user.displayName}</p>
                        <br />
                        <p className="text-lg font-semibold">Email : {user.email}</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Userprofile;