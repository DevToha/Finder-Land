import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.config";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import './Login.css'

const Login = () => {

    // const [user, setUser] = useState(null)

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    // const location = useLocation();

    useEffect(() => {
        document.title = "Login Page";
    }, [location.pathname]);

    const { signInUser } = useContext(AuthContext)
    // const navigate = useNavigate()
    const [catchError, setCatchError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSignIn = (e) => {

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                navigate(location?.state ? location.state : '/')
                // navigate('/')
            })
            .catch(error => {
                console.error(error)
            })

        // password setting
        if (password.length < 6) {
            setCatchError('Password should be at least 6 characters or longer')
            return
        }

        // reset error
        setCatchError('')
        // reset success
        setSuccess('')

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('LOG IN SUCCESSFUL')
            })
            .catch(error => {
                console.log(error)
                setCatchError(error.message)
            })
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleButton = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const GoogleUser = result.user
                console.log(GoogleUser)

                navigate(location?.state ? location.state : '/')

                // setSuccess(GoogleUser)
                // navigate('/')
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const gitHubProvider = new GithubAuthProvider()


    const handleGitHubButton = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const gitHubUser = result.user
                console.log((gitHubUser))
                navigate(location?.state ? location.state : '/')
                // setUser(gitHubUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    // mx-auto

    return (
        <div className="bg-white shadow8 py-5 pl-[115px] ml-[450px] m-10 rounded-3xl w-[600px]">
            <div className=" md:w-1/3 mt-10 mb-10">
                <h3 className="text-3xl mb-8 ml-[60px] font-semibold w-[230px]">Let's get started!</h3>
                <form
                    onSubmit={handleSignIn}
                >
                    <input className="mb-4 w-[352px] py-2 px-4 border-2 border-gray-300 rounded-md" type="email" placeholder="Email Address" name="email" id="" required />
                    <br />
                    <input className="mb-4 w-[352px] py-2 px-4 border-2 border-gray-300 rounded-md" type="password" placeholder="Password" name="password" id="" required />
                    {
                        catchError && <p className="text-base font-medium text-red-500">{catchError}</p>
                    }

                    {
                        success && <p className="text-base font-medium text-green-600">{success}</p>
                    }
                    <br />
                    <input className="cursor-pointer mb-4 w-[352px] py-2 px-4 border-2 rounded-md border-gray-300 bg-blue-600 text-white font-semibold" type="submit" value="LOG IN" />
                </form>

                <div className="flex gap-4 mb-3 ml-2 w-[355px]">
                    <div className="bg-gray-500 w-[138px] h-[2px] mt-3"></div>
                    <div className="">OR</div>
                    <div className="bg-gray-500 w-[138px] h-[2px] mt-3"></div>
                </div>

                <div className="mb-4 relative">
                    <button onClick={handleGoogleButton} className="cursor-pointer w-[352px] py-2 px-4 border-2 rounded-md border-gray-300 bg-white text-base font-semibold">Continue With Google</button>

                    <span className="absolute top-3 left-16 text-xl"><FcGoogle /></span>
                </div>

                {/* <div className="flex gap-4 ml-2 mb-3">
                    <div className="bg-gray-500 w-[138px] h-[2px] mt-3"></div>
                    <div className="">OR</div>
                    <div className="bg-gray-500 w-[138px] h-[2px] mt-3"></div>
                </div> */}

                <div className="relative">
                    <button onClick={handleGitHubButton} className="cursor-pointer w-[352px] py-2 px-4 border-2 rounded-md border-gray-300 bg-white text-base font-semibold">Continue With GitHub</button>

                    <span className="absolute top-3 left-16 text-xl"><FaGithub /></span>
                </div>

                <p className="mt-4 ml-[53px] w-[270px] font-medium">NEW TO THE WEBSITE ? <Link to="/register"> <a className="text-blue-800 font-bold underline underline-offset-4" href="">REGISTER</a></Link></p>

            </div>

        </div>
    );
};

export default Login;