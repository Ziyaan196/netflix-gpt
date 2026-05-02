import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }


  return (
    <div>
        <Header />
        <div className="absolute ">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_large.jpg" alt="Login"></img>
        </div>
        <form className="absolute w-4/12 p-10 my-44 mx-auto left-0 right-0 bg-black text-white flex flex-col rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input type="text" placeholder=" Enter Your Name" className="p-2 my-4 w-full bg-[#2d2d2d] rounded-sm"></input>}
            <input type="text" placeholder=" Email Address" className="p-2 my-4 w-full bg-[#2d2d2d] rounded-sm"></input>
            <input type="password" placeholder=" Password" className="p-2 my-4 w-full bg-[#2d2d2d] rounded-sm"></input>
            <button className="bg-[#e50914] my-6 p-4 rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className="text-gray-400">{isSignIn ? "Don't have an account?" : "Already have an account?"}<span className="text-white cursor-pointer" onClick={toggleSignInForm}> {isSignIn ? "Sign Up " : "Sign In "}</span>Now</p>
        </form>
    </div>
  )
}

export default Login