import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

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
      // confirmPassword alanını sil
      delete data.confirmPassword;

      // role_id'yi number'a çevir
      data.role_id = Number(data.role_id);

      // Eğer role_id 2 ise (mağaza sahibi), store bilgilerini düzenle
      if (data.role_id === 2) {
        data.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
        // Geçici alanları sil
        delete data.store_name;
        delete data.store_phone;
        delete data.store_tax_no;
        delete data.store_bank_account;
      }

      // Gönderilen veriyi kontrol et
      console.log("Gönderilen Veri:", JSON.stringify(data, null, 2));

      // API'ye istek gönder
      await api.post("/signup", data);
      alert("Hesabınızı aktifleştirmek için e-postanızı kontrol edin!");
      navigate(-1); // Bir önceki sayfaya yönlendir
    } catch (error) {
      console.error("Hata Detayları:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Bilinmeyen bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("name", { required: true, minLength: 3 })}
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <span className="text-red-500 text-sm">Name must be at least 3 characters.</span>}
          </div>
          
          <div>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <span className="text-red-500 text-sm">Please enter a valid email.</span>}
          </div>
          
          <div>
            <input
              {...register("password", { required: true, minLength: 8 })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <span className="text-red-500 text-sm">Password must be at least 8 characters.</span>}
          </div>
          
          <div>
            <input
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password || "Şifreler birbiri ile uyuşmuyor.",
              })}
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
            )}
          </div>
          
          <div>
            <select
              {...register("role_id")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>{role.name}</option>
              ))}
            </select>
          </div>
          
          {watch("role_id") === "2" && (
            <>
              <div>
                <input
                  {...register("store_name", { required: true, minLength: 3 })}
                  placeholder="Store Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  {...register("store_phone", { required: true })}
                  placeholder="Store Phone"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  {...register("store_tax_no", { required: true })}
                  placeholder="Tax No (TXXXXVXXXXXX)"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  {...register("store_bank_account", { required: true })}
                  placeholder="IBAN"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? "Saving..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;