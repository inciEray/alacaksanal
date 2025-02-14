import React from "react";
import banner1 from "../assets/images/banners/banner-1.png"


export default function FirstBanner() {
    return (
        <div className="bg-white-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
            {/* Sol Taraftaki Resim */}
            <div className="w-full lg:w-auto mb-8 lg:mb-0">
              <img
                src={banner1}
                alt="Summer 2020"
                className="w-[704px] h-[682px] object-cover rounded-lg"
              />
            </div>
            {/* Sağ Taraftaki Metinler*/}
            <div className="w-full lg:w-1/2 text-center">
              <h2 className="text-lg font-semibold text-gray-600">WİNTER 2025</h2>
              <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                Soğuklardan bir parça..
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Sizi nasıl koruyacağımızı biliyoruz..
              </p>
              {/* Butonlar */}
              <div className="mt-8 flex justify-center space-x-4">
                <button className="bg-[#2DC071] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  ŞİMDİ AL
                </button>
                <button className="bg-transparent text-[#2DC071] px-6 py-3 rounded-lg font-semibold border border-[#2DC071] hover:bg-blue-50 transition">
                  DEVAMINI OKU
                </button>
              </div>
            </div>  
          </div>
        </div>
      );
    }