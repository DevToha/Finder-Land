import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="bg-blue-300 p-5 m-10 rounded-2xl">
            <div className="mx-auto md:w-1/3 mt-10 mb-10">
                <h3 className="text-3xl mb-8 font-semibold">Please Log In</h3>
                <form
                // onSubmit={handleSignIn}
                >
                    <input className="mb-4 w-3/4 py-2 px-4 border-2 border-black rounded-md" type="name" placeholder="Name" name="name" id="" required />
                    <br />
                    <input className="mb-4 w-3/4 py-2 px-4 border-2 border-black rounded-md" type="email" placeholder="Email Address" name="email" id="" required />
                    <br />
                    <input className="mb-4 w-3/4 py-2 px-4 border-2 border-green-400 rounded-md" type="password" placeholder="Password" name="password" id="" required />
                    {/* {
                        catchError && <p className="text-base font-medium text-red-500">{catchError}</p>
                    }

                    {
                        success && <p className="text-base font-medium text-green-600">{success}</p>
                    } */}
                    <br />
                    <input className="cursor-pointer mb-4 w-3/4 py-2 px-4 border-2 rounded-md border-indigo-500 bg-slate-200" type="submit" value="LOG IN" />
                </form>

                <p>NEW TO THE WEBSITE ? <Link to="/register"> <a className="text-blue-800 font-bold" href="">REGISTER</a></Link></p>

                <button className="cursor-pointer mb-2 w-3/4 py-2 px-4 mt-4 border-2 rounded-md border-indigo-500 bg-slate-200">Google login</button>

                <button className="cursor-pointer w-3/4 py-2 px-4 mt-1 border-2 rounded-md border-indigo-500 bg-slate-200">GitHub login</button>

            </div>

            

        </div>
    );
};

export default Login;