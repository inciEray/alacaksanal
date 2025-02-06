import { useState } from "react";
import { Menu, X, Home, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Üst Kısım - Siyah */}
      <div className="bg-black text-white p-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone size={16} />
            <span>+90 506 051 8849</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail size={16} />
            <span>info@alacaksanal.com</span>
          </div>
        </div>
        <div className="text-center font-semibold">Hoşgeldiniz!</div>
        <div className="flex space-x-3">
          <Facebook size={16} />
          <Twitter size={16} />
          <Instagram size={16} />
        </div>
      </div>
      
      {/* Alt Kısım - Beyaz */}
      <div className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Home size={24} />
          <h1 className="text-xl font-bold">ALACAKSAN-AL</h1>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-black hover:text-gray-600">Ana Sayfa</a></li>
          <li><a href="#" className="text-black hover:text-gray-600">Hakkımızda</a></li>
          <li><a href="#" className="text-black hover:text-gray-600">Hizmetler</a></li>
          <li><a href="#" className="text-black hover:text-gray-600">İletişim</a></li>
        </ul>
        <div className="space-x-4">
          <button className="text-black border px-3 py-1 rounded hover:bg-gray-100">Login</button>
          <button className="text-white bg-black px-3 py-1 rounded hover:bg-gray-800">Register</button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Responsive Menü */}
      {isOpen && (
        <div className="bg-white p-4 shadow-md md:hidden">
          <ul className="space-y-4">
            <li><a href="#" className="text-black hover:text-gray-600">Ana Sayfa</a></li>
            <li><a href="#" className="text-black hover:text-gray-600">Hakkımızda</a></li>
            <li><a href="#" className="text-black hover:text-gray-600">Hizmetler</a></li>
            <li><a href="#" className="text-black hover:text-gray-600">İletişim</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
