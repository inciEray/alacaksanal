import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AuthPage from "./pages/AuthPage";
import { Toaster } from "react-hot-toast";
import { verifyToken } from "./actions/clientActions";
import { Provider } from "react-redux";
import store from "./data/store";

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
