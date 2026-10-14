
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import ComponentGenerator from "./pages/ComponentGenerator";
import PricingPage from "./pages/Pricingpage";
import ComponentsPage from "./pages/Componentspage";
import MyComponentsPage from "./pages/MyComponentsPage";

import {
  setAllComponents,
  setAllUsers,
  setUserData,
} from "./redux/userSlice";

// Production URL comes from Netlify environment variables.
export const ServerUrl = (
  import.meta.env.VITE_API_URL || "http://localhost:8000"
).replace(/\/+$/, "");

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const [authChecked, setAuthChecked] = useState(false);

  // Check whether a user is logged in.
  useEffect(() => {
    let cancelled = false;

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${ServerUrl}/api/user/currentuser`,
          { withCredentials: true }
        );

        if (!cancelled) {
          dispatch(setUserData(res.data));
        }
      } catch (error) {
        if (!cancelled) {
          dispatch(setUserData(null));
        }
      } finally {
        if (!cancelled) {
          setAuthChecked(true);
        }
      }
    };

    fetchUser();

    return () => {
      cancelled = true;
    };
  }, [dispatch]);

  // Fetch users and components when user data is available.
  useEffect(() => {
    if (!userData) return;

    let cancelled = false;

    const fetchExtraData = async () => {
      try {
        const [usersRes, componentsRes] = await Promise.all([
          axios.get(`${ServerUrl}/api/user/all-users`, {
            withCredentials: true,
          }),
          axios.get(`${ServerUrl}/api/component/all-components`, {
            withCredentials: true,
          }),
        ]);

        if (!cancelled) {
          dispatch(setAllUsers(usersRes.data));
          dispatch(setAllComponents(componentsRes.data));
        }
      } catch (error) {
        console.error(
          "Extra API Error:",
          error.response?.data || error.message
        );
      }
    };

    fetchExtraData();

    return () => {
      cancelled = true;
    };
  }, [userData, dispatch]);

  return (
    <>
      {!authChecked && (
        <div className="fixed left-0 top-0 z-50 h-1 w-full animate-pulse bg-purple-500" />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/generate" element={<ComponentGenerator />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/component" element={<ComponentsPage />} />
        <Route path="/my-components" element={<MyComponentsPage />} />
      </Routes>
    </>
  );
}

export default App;
