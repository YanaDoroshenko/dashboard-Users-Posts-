import { createBrowserRouter } from "react-router-dom";
import { Auth } from "./components/static/Auth";
import { Landing } from "./components/static/Landing";
import { Dashboard } from "./components/static/Dashboard";
import { PrivateRoute } from "./components/shared/PrivateRoute";
import { Settings } from "./components/static/Settings";
import { UsersList } from "./components/users/UsersList";
import React from "react";
import { PostsList } from "./components/posts/PostsList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
  },
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute fallback="/auth">
        <Dashboard />
      // </PrivateRoute>
    ),
    children: [{
      path: "users",
      element: <UsersList />
    },
    {
      path: "posts", 
      element: <PostsList/>
    },
    {
      path: "/dashboard/settings",
      element: (
        // <PrivateRoute fallback="/auth">
          <Settings />
        // </PrivateRoute>
      ),
    },
  ]
  },
  
  
]);
