import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // onAuthStateChanged in Body.js will dispatch the remove user action by itself.
      // navigate("/");
      // we have added this navigation logic to onAuthStateChanged.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

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


  return (
    <div className="flex w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex p-2">
        <img className="w-10 h-12 m-6"
          src={user?.photoURL}
          alt="usericon"
        />
        <button onClick={handleSignout} className="font-bold text-white">Sign out</button>
      </div>}
    </div>
  );
};

export default Header;
