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
  } from "lucide-react";
  
  import { Link } from "react-router-dom";
  import NavbarLayout from "../layout/NavbarLayout";
  import { useState } from "react";
  
  export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <NavbarLayout>
        {/* Üst Bilgi Barı */}
        <div className="bg-[#252B42] text-white flex justify-around items-center h-[58px]">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="m-2">
                <Phone size={16} />
              </span>
              <span className="font-bold text-[14px]">(555) 555-5555</span>
            </div>
            <div className="flex items-center">
              <span className="m-2">
                <Mail size={16} />
              </span>
              <span className="font-bold text-[14px]">alacaksanal@gmail.com</span>
            </div>
          </div>
  
          <div className="font-bold text-[14px]">
            <h6>Follow Us and get a chance to win 80% off</h6>
          </div>
  
          <div className="flex items-center gap-3">
            <h6 className="font-bold text-[14px]">Follow Us :</h6>
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
  
        {/* Ana Menü */}
        <div className="bg-white flex justify-around items-center h-[78px]">
          <div className="text-2xl font-bold">
            <h3>AlacaksanAL</h3>
          </div>
  
          <nav className="text-[#737373] flex space-x-6 font-semibold">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-gray-700 hover:text-black focus:outline-none transition"
              >
                <span className="text-[#737373] items-center flex font-semibold hover:text-black cursor-pointer">
                  Shop
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
                              Bags
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/women/belts"
                              className="hover:text-black"
                            >
                              Belts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/women/cosmetics"
                              className="hover:text-black"
                            >
                              Cosmetics
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/women/hats"
                              className="hover:text-black"
                            >
                              Hats
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
                              Bags
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/men/belts"
                              className="hover:text-black"
                            >
                              Belts
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/men/cosmetics"
                              className="hover:text-black"
                            >
                              Cosmetics
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/shop/men/hats"
                              className="hover:text-black"
                            >
                              Hats
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
  
            <Link to="/about" className="hover:text-black transition">
              About
            </Link>
            <Link to="/blog" className="hover:text-black transition">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-black transition">
              Contact
            </Link>
            <Link to="/pages" className="hover:text-black transition">
              Pages
            </Link>
          </nav>
  
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-[#23A6F0]">
              <FontAwesomeIcon icon={faUser} className="text-[12px]" />
              <Link to="/" className="font-bold text-[14px]">
                Login
              </Link>
              <span className="font-bold text-[14px]">/</span>
              <Link to="/" className="font-bold text-[14px]">
                Register
              </Link>
            </div>
            <div className="flex items-center space-x-3 text-[#23A6F0]">
              <div className="flex items-center gap-1">
                <Search size={16} className=" cursor-pointer"/>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <ShoppingCart size={16} className=" cursor-pointer"/>1
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <Heart size={16} className=" cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
      </NavbarLayout>
    );
  }