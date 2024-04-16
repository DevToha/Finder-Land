import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.config";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Login = () => {

    // const [user, setUser] = useState(null)


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
                // setSuccess(GoogleUser)
                // navigate('/')
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <div className="bg-blue-300 p-5 m-10 rounded-2xl">
            <div className="mx-auto md:w-1/3 mt-10 mb-10">
                <h3 className="text-3xl mb-8 font-semibold">Please Log In</h3>
                <form
                    onSubmit={handleSignIn}
                >
                    <input className="mb-4 w-3/4 py-2 px-4 border-2 border-black rounded-md" type="name" placeholder="Name" name="name" id="" required />
                    <br />
                    <input className="mb-4 w-3/4 py-2 px-4 border-2 border-black rounded-md" type="email" placeholder="Email Address" name="email" id="" required />
                    <br />
                    <input className="mb-4 w-3/4 py-2 px-4 border-2 border-green-400 rounded-md" type="password" placeholder="Password" name="password" id="" required />
                    {
                        catchError && <p className="text-base font-medium text-red-500">{catchError}</p>
                    }

                    {
                        success && <p className="text-base font-medium text-green-600">{success}</p>
                    }
                    <br />
                    <input className="cursor-pointer mb-4 w-3/4 py-2 px-4 border-2 rounded-md border-indigo-500 bg-slate-200" type="submit" value="LOG IN" />
                </form>

                <p>NEW TO THE WEBSITE ? <Link to="/register"> <a className="text-blue-800 font-bold" href="">REGISTER</a></Link></p>

                <button onClick={handleGoogleButton} className="cursor-pointer mb-2 w-3/4 py-2 px-4 mt-4 border-2 rounded-md border-indigo-500 bg-slate-200">Google login</button>

                <button className="cursor-pointer w-3/4 py-2 px-4 mt-1 border-2 rounded-md border-indigo-500 bg-slate-200">GitHub login</button>

            </div>



        </div>
    );
};

export default Login;