import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearchView);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex items-center gap-3">
          {showGptSearch && (
            <select
              onChange={handleLangChange}
              className="bg-transparent text-white border border-white/50 rounded-md px-3 py-2 text-sm cursor-pointer hover:border-white focus:outline-none focus:border-white transition-all duration-200"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-black text-white"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 m-2 bg-[#e50914] text-white text-sm font-semibold rounded-md hover:bg-[#f40612] hover:scale-105 active:scale-95 transition-all duration-200"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Go Back" : "GPT Search"}
          </button>

          <img
            className="w-10 h-10 object-cover "
            src={user.photoURL}
            alt="user"
          />
          <button
            onClick={handleSignOut}
            className="py-2 px-4 m-2 bg-transparent text-white text-sm font-semibold border border-white/50 rounded-md hover:border-white hover:text-white/80 active:scale-95 transition-all duration-200"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
