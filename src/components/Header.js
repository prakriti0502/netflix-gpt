import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // onAuthStateChanged in Body.js will dispatch the remove user action by itself.
        // navigate("/");
        // we have added this navigation logic to onAuthStateChanged.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  // this useEffect will be called once on page load, so the event onAuthStateChanged will be attached.
  // but the header component can be loaded multiple times in the app. So everytime header is loaded,
  // the event will be attached again and again.
  // Therefore, when the component unmounts, we should unsubscribe to this action.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User sign-in/sign-up
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe will be called when the component unmounts.
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <select
            className="py-2 px-4 mt-6 mr-2 h-12 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-4 text-white rounded-lg h-12 mt-6 m-4 bg-purple-700"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? lang[langKey].homePage : lang[langKey].gptSearch}
          </button>
          <img className="w-10 h-12 m-6" src={user?.photoURL} alt="usericon" />
          <button onClick={handleSignout} className="font-bold text-white">
            {lang[langKey].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
