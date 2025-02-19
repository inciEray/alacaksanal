// Signup.jsx
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../data/axiosInstance";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("/roles").then((res) => {
      setRoles(res.data);
    });
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      delete data.confirmPassword;
      data.role_id = Number(data.role_id);

      if (data.role_id === 2) {
        data.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
        delete data.store_name;
        delete data.store_phone;
        delete data.store_tax_no;
        delete data.store_bank_account;
      }

      console.log("Gönderilen Veri:", JSON.stringify(data, null, 2));
      await api.post("/signup", data);
      alert("Hesabınızı aktifleştirmek için e-postanızı kontrol edin!");
      navigate(-1);
    } catch (error) {
      console.error("Hata Detayları:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Bilinmeyen bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
      Hesap oluşturun!
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("name", { required: true, minLength: 3 })}
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
          />
          {errors.name && (
            <span className="text-red-500 text-sm block mt-1">
              İsim en az 3 karakterden oluşmalıdır.
            </span>
          )}
        </div>

        <div>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
          />
          {errors.email && (
            <span className="text-red-500 text-sm block mt-1">
              Lütfen geçerli bir e-posta girin.
            </span>
          )}
        </div>

        <div>
          <input
            {...register("password", { required: true, minLength: 8 })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
          />
          {errors.password && (
            <span className="text-red-500 text-sm block mt-1">
              Şifre en az 8 karakterden oluşmalıdır.
            </span>
          )}
        </div>

        <div>
          <input
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match.",
            })}
            type="password"
            placeholder="Şifreyi Onayla"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm block mt-1">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div>
          <select
            {...register("role_id")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {watch("role_id") === "2" && (
          <>
            <div>
              <input
                {...register("store_name", {
                  required: true,
                  minLength: 3,
                })}
                placeholder="Store Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
              />
            </div>
            <div>
              <input
                {...register("store_phone", { required: true })}
                placeholder="Store Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
              />
            </div>
            <div>
              <input
                {...register("store_tax_no", { required: true })}
                placeholder="Tax No (TXXXXVXXXXXX)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
              />
            </div>
            <div>
              <input
                {...register("store_bank_account", { required: true })}
                placeholder="IBAN"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow shadow-sm hover:shadow-md"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          {loading ? "Creating Account..." : "Hesap Oluştur"}
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
        Veya sosyal medyayı kullanarak hesap oluşturun!
        </p>
        <div className="flex justify-center space-x-3 mt-2">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            {/* Social Media Icons can be added here (e.g., using FontAwesome or similar) */}
            {/* Example: <i className="fab fa-facebook-f"></i> */}
            Facebook
          </a>
          <a href="#" className="text-gray-500 hover:text-red-500">
            Google
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-400">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;