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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Üst Bilgi barının sadece desktopta görünmesi için "hidden md:flex" kullandım. Mobile geçtiğinde 768px ve altındayken bu class sayesinde otomatik olarak gizlenecek. */}
      {/* sm: 640px ve üzeri
      md: 768px ve üzeri
      lg: 1024px ve üzeri
      xl: 1280px ve üzeri
      2xl: 1536px ve üzeri */}
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

      {/* Desktopta görünen üst beyaz navbar*/}
      <div className="bg-white hidden md:flex flex-row justify-around items-center h-[78px]">
        <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-black transition">AlacaksanAL</Link>
        </div>
        <nav className="text-[#737373] flex space-x-6 font-semibold">
          <Link to="/" className="hover:text-black transition">Ana Sayfa</Link>
          <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-gray-700 hover:text-black focus:outline-none transition"
              >
                <span className="text-[#737373] items-center flex font-semibold hover:text-black cursor-pointer">
                <Link to="/shop" className="hover:text-black transition">Mağaza</Link>
                  <ChevronDown className=" size-5 text-[#737373]" />
                </span>
              </button>

              {isOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg z-50"
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <div className="flex flex-col p-4 gap-6">
                    {/* Kadın ve Erkek Kategorilerini Flexbox ile Yan Yana Yapıyoruz */}
                    <div className="flex justify-between gap-10">
                      {/* Kadın Kategorisi */}
                      <div className="w-1/2 pr-4 flex flex-col gap-4">
                        <h4 className="font-bold text-black mb-2">Kadın</h4>
                        <ul className="space-y-1 flex flex-col gap-3">
                          <li>
                            <Link
                              to="/shop/women/bags"
                              className="hover:text-black text-[#737373] font-semibold"
                            >
                              Çantalar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/women/belts"
                              className="hover:text-black"
                            >
                              Kemerler
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/women/cosmetics"
                              className="hover:text-black"
                            >
                              Kozmetik
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/women/hats"
                              className="hover:text-black"
                            >
                              Şapkalar
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="w-1/2 flex flex-col gap-4">
                        <h4 className="font-bold text-black mb-2">Erkek</h4>
                        <ul className="space-y-1 flex flex-col gap-3">
                          <li>
                            <Link
                              to="/shop/men/bags"
                              className="hover:text-black"
                            >
                              Çantalar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/men/belts"
                              className="hover:text-black"
                            >
                              Kemerler
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/men/cosmetics"
                              className="hover:text-black"
                            >
                              Kozmetik
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/men/hats"
                              className="hover:text-black"
                            >
                              Şapkalar
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          <Link to="/about" className="hover:text-black transition">Hakkımızda</Link>
          <Link to="/blog" className="hover:text-black transition">Blog</Link>
          <Link to="/contact" className="hover:text-black transition">İletişim</Link>
          <Link to="/pages" className="hover:text-black transition">Sayfalar</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-[#23A6F0]">
            <FontAwesomeIcon icon={faUser} className="text-[12px]" />
            <Link to="/" className="font-bold text-[14px]">Giriş Yap</Link>
            <span className="font-bold text-[14px]">/</span>
            <Link to="/" className="font-bold text-[14px]">Kayıt Ol</Link>
          </div>
          <div className="flex items-center space-x-3 text-[#23A6F0]">
            <Search size={16} className="cursor-pointer" />
            <ShoppingCart size={16} className="cursor-pointer" />
            <Heart size={16} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobilde görünen sadece üst kısım. Hamburger menülü ----text-[#23A6F0] icon classnamelere bunu verirsek desktoptaki gibi mavi oluyor.*/}
      <div className="bg-white md:hidden flex justify-between items-center h-[78px] px-4">
        <div className="text-2xl font-bold">
          <h3>AlacaksanAL</h3>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/">
            <User /> 
          </Link>
          <Search size={20} className="cursor-pointer" />
          <ShoppingCart size={20} className="cursor-pointer" />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={24} className="text-[#737373] cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Mobilde Hamburger Menü Açılınca Ortalanmış Başlıklar */}
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
