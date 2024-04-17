import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const UpdateProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=" pl-[700px] mt-10">
            <div>
                {
                    user &&
                    <div>
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

export default UpdateProfile;