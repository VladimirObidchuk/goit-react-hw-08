import "modern-normalize";
// import css from "./App.module.css";

import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { AppBar } from "./AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import Layout from "./Layout/Layout";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { refReshUser } from "../redux/auth/operations";

const ContactPage = lazy(() => import("../page/ContactPage/ContactPage"));
const HomePage = lazy(() => import("../page/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../page/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../page/LoginPage/LoginPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refReshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}
