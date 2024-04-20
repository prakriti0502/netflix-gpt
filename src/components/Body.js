import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  //always use hooks on top of the component

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // adding the onAuthStateChanged logic in useEffect,
  // since we want to add this event listener kind of thing only once to my component.
  // the user should be redirected to login page if he accesses browse page without logging-in, and
  // the user should be redirected to browse page if he accesses login page while already being logged-in.
  // so for this we have to navigate to different routes in OnAuthStateChanged, but we can't use navigate outside of
  // Router provider. Therefore, we will keep this logic in a child of Body component, which is a common component. i.e. Header.
  // go to header.js for this useEffect.

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
