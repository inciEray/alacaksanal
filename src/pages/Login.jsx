// Login.jsx
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../actions/clientActions";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data, true));
      navigate(-1);
    } catch (err) {
      setError("Login failed! Incorrect email or password.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Hoşgeldin! <br /> Hesabınızda oturum açın
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div>
          <input
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            placeholder="E-mail"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm block mt-1">
              Lütfen geçerli bir e-posta girin
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm block mt-1">
              Şifre gereklidir
            </p>
          )}
        </div>

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Oturum Aç
        </button>
      </form>
      <div className="mt-6 text-center">
        <a href="/forgot-password" className="text-blue-500 hover:underline text-sm">
        Şifrenizi mi unuttunuz?
        </a>
        <p className="mt-3 text-gray-600 text-sm">
        Hesabınız yok mu?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
          Hesap oluştur
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;