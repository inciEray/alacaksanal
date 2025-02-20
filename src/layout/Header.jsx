import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Mail,
  Phone,
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  Menu,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import {logoutUser} from "../actions/clientActions";
import md5 from "md5"; // Gravatar için email hashleme

export default function Header() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Redux'tan kullanıcı bilgilerini al
  const user = useSelector((state) => state.client.user);

  // Kullanıcı giriş yapmış mı kontrol et
  const isAuthenticated = user && user.email;

  // Kullanıcı gravatar URL'sini oluştur
  const gravatarUrl = isAuthenticated
    ? `https://www.gravatar.com/avatar/${md5(user.email)}?d=mp`
    : null;

  return (
    <header>
      {/* Üst Bilgi barı */}
      <div className="hidden md:flex bg-[#252B42] text-white justify-around items-center h-[58px]">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="m-2">
              <Phone size={16} />
            </span>
            <span className="font-bold text-[14px]">(232) 535-3535</span>
          </div>
          <div className="flex items-center">
            <span className="m-2">
              <Mail size={16} />
            </span>
            <span className="font-bold text-[14px]">alacaksanal@gmail.com</span>
          </div>
        </div>
        <div className="font-bold text-[14px] text-center">
          <h6>Bizi takip edin ve %80 indirim kazanma şansını yakalayın</h6>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="font-bold text-[14px]">Takip Et :</h6>
          <Link to="/" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} className="text-[16px]" />
          </Link>
          <Link to="/" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faYoutube} className="text-[16px]" />
          </Link>
          <Link to="/" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} className="text-[16px]" />
          </Link>
          <Link to="/" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} className="text-[16px]" />
          </Link>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="bg-white hidden md:flex flex-row justify-around items-center h-[78px]">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-black transition">AlacaksanAL</Link>
        </div>
        <nav className="text-[#737373] flex space-x-6 font-semibold">
          <Link to="/" className="hover:text-black transition">Ana Sayfa</Link>
          <Link to="/shop" className="hover:text-black transition">Mağaza</Link>
          <Link to="/about" className="hover:text-black transition">Hakkımızda</Link>
          <Link to="/blog" className="hover:text-black transition">Blog</Link>
          <Link to="/contact" className="hover:text-black transition">İletişim</Link>
          <Link to="/pages" className="hover:text-black transition">Sayfalar</Link>
        </nav>

        {/* Kullanıcı Girişi Alanı */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-2">
              <img src={gravatarUrl} alt="User Avatar" className="w-8 h-8 rounded-full" />
              <span className="text-[#23A6F0] font-bold text-[14px]">
                {user.name || "Misafir"}
              </span>
              <button
                onClick={() => dispatch(logoutUser())}
                className="px-3 py-1 rounded text-red-500 text-sm hover:bg-red-600 hover:text-white"
              >
                Çıkış Yap
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-1 text-[#23A6F0]">
              <FontAwesomeIcon icon={faUser} className="text-[12px]" />
              <Link to="/auth" className="font-bold text-[14px]">Giriş Yap</Link>
              <span className="font-bold text-[14px]">/</span>
              <Link to="/auth" className="font-bold text-[14px]">Kayıt Ol</Link>
            </div>
          )}
          <div className="flex items-center space-x-3 text-[#23A6F0]">
            <Search size={16} className="cursor-pointer" />
            <ShoppingCart size={16} className="cursor-pointer" />
            <Heart size={16} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobil Navbar */}
      <div className="bg-white md:hidden flex justify-between items-center h-[78px] px-4">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-black transition">AlacaksanAL</Link>
        </div>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
            <img src={gravatarUrl} alt="User Avatar" className="w-8 h-8 rounded-full" />
            <button
                onClick={() => dispatch(logoutUser())}
                className="text-red-500 text-sm hover:text-red-600"
              >
                Çıkış Yap
              </button>
            </>
          ) : (
            <Link to="/auth">
              <User />
            </Link>
          )}
          <Search size={20} className="cursor-pointer" />
          <ShoppingCart size={20} className="cursor-pointer" />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={24} className="text-[#737373] cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Mobil Menü (Açılıp kapanıyor) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg flex flex-col items-center text-center p-4 space-y-4">
          <Link to="/" className="hover:text-black transition">Ana Sayfa</Link>
          <Link to="/shop" className="hover:text-black transition">Mağaza</Link>
          <Link to="/about" className="hover:text-black transition">Hakkımızda</Link>
          <Link to="/blog" className="hover:text-black transition">Blog</Link>
          <Link to="/contact" className="hover:text-black transition">İletişim</Link>
          <Link to="/pages" className="hover:text-black transition">Sayfalar</Link>
        </div>
      )}
    </header>
  );
}
