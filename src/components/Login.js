import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data here
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;

    if (!isSignIn) {
      //Sign up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            })
            .catch((error) => {
              setErrMessage(error.code + ":" + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + ":" + errorMessage);
        });
    } else {
      //Sign in logic here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          //const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + ":" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_large.jpg"
          alt="Login"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 p-10 my-44 mx-auto left-0 right-0 bg-black text-white flex flex-col rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder=" Enter Your Name"
            className="p-2 my-4 w-full bg-[#2d2d2d] rounded-sm"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder=" Email Address"
          className="p-2 my-4 w-full bg-[#2d2d2d] rounded-sm"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder=" Password"
          className="p-2 my-4 w-full bg-[#2d2d2d] rounded-sm"
        ></input>

        <p className="text-red-500">{errMessage}</p>

        <button
          className="bg-[#e50914] my-6 p-4 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <span
            className="text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {" "}
            {isSignIn ? "Sign Up " : "Sign In "}
          </span>
          Now
        </p>
      </form>
    </div>
  );
};

export default Login;
