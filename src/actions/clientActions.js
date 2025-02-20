import api from "../data/axiosInstance";
import { toast } from "react-hot-toast";



export const setUser = (user) => ({ type: "SET_USER", payload: user });
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles });
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme });
export const setLanguage = (language) => ({ type: "SET_LANGUAGE", payload: language });

export const fetchRoles = () => async (dispatch, getState) => {
    if (getState().client.roles.length === 0) {
      try {
        const response = await api.get("/roles");
        dispatch(setRoles(response.data));
      } catch (error) {
        console.error("Roller alınırken hata oluştu:", error);
      }
    }
  };

  export const loginUser = (credentials, rememberMe) => async (dispatch) => {
    try {
      const response = await api.post("/login", credentials);
      const userData = response.data;
  
      dispatch(setUser(userData));
  
      // Save token in localStorage or sessionStorage based on "rememberMe"
      if (rememberMe) {
        localStorage.setItem("token", userData.token);
      } else {
        sessionStorage.setItem("token", userData.token);
      }
  
      // ✅ Show success toast
      toast.success("Giriş Başarılı!", {
        duration: 1500,
        position: "top-right",
        style: {
          background: "#4caf50",
          color: "#fff",
        },
      });
  
      // ✅ Redirect after 3 seconds
      //setTimeout(() => {
        //window.location.href = "/";
      //}, 3000);
  
      return userData;
    } catch (error) {
      console.error("Giriş Başarısız:", error);
  
      // ❌ Show error toast
      toast.error("Giriş başarısız oldu! Yönlendiriliyor...", {
        duration: 1500,
        position: "top-right",
        style: {
          background: "#e74c3c",
          color: "#fff",
        },
      });
  
      // ❌ Reload login page after 3 seconds
      setTimeout(() => {
        window.location.reload();
      }, 1500);
  
      throw error;
    }
  };

  export const verifyToken = () => async (dispatch) => {
    const token = localStorage.getItem("token");
  
    if (!token) return; // Eğer token yoksa çık
  
    try {
      // ✅ Token'ı Axios Header'a ekle
      api.defaults.headers.common["Authorization"] = token; // NOT: Bearer eklemiyoruz!
  
      // ✅ API'ye /verify isteği yap
      const response = await api.get("/verify");
      const userData = response.data;
  
      // ✅ Kullanıcıyı Redux Store'a kaydet
      dispatch(setUser(userData));
  
      // ✅ Token'ı yenileyerek tekrar localStorage'a kaydet
      localStorage.setItem("token", userData.token);
      api.defaults.headers.common["Authorization"] = userData.token;
  
      console.log("Auto Login Successful:", userData);
    } catch (error) {
      console.error("Auto login failed, token expired or invalid:", error);
  
      // ❌ Token geçersizse temizle
      localStorage.removeItem("token");
      delete api.defaults.headers.common["Authorization"];
    }
  };

  export const logoutUser = () => (dispatch) => {
    // ✅ Token'ı hem localStorage hem sessionStorage'dan sil
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  
    // ✅ Axios header'dan Authorization bilgisini kaldır
    delete api.defaults.headers.common["Authorization"];
  
    // ✅ Redux'taki kullanıcı bilgisini temizle
    dispatch(setUser(null));
  
    // ✅ Çıkış başarılı bildirimi göster
    toast.success("Başarıyla çıkış yapıldı!", {
      duration: 1500,
      position: "top-right",
      style: {
        background: "#4caf50",
        color: "#fff",
      },
    });
  
    // ✅ Anasayfaya yönlendir
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };