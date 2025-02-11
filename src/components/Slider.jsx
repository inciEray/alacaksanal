import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;
  const navigate = useNavigate(); // Sayfa yönlendirme fonksiyonu , aşağıda tıklanabilir butona koydum.

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 10000); // Burada 10 saniyede bir kaymasını sağlıyoruz otomatik olarak.

    return () => clearInterval(interval);
  }, [slideCount]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  return (
    <div className="relative w-full font-monts">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div
                className="relative h-192 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center md:ml-[100px] text-center px-4 lg:px-12">
                  <h3 className="text-xs sm:text-sm uppercase text-white mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {slide.title}
                  </h3>
                  <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {slide.subtitle}
                  </h1>
                  <p className="text-sm sm:text-lg text-white mb-6 px-8 md:px-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {slide.description}
                  </p>
                  <div className="md:flex gap-3">
                  <button
                      onClick={() => navigate("/shop")} // Yönlendirme için koydum.
                      className="px-5 py-2 font-bold bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 transition"
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Önceki ve Sonraki butonlarım */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2  bg-opacity-20 text-white md:text-[50px] p-2 rounded-full hover:bg-opacity-50 transition"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2  bg-opacity-20 text-white md:text-[50px] p-2 rounded-full hover:bg-opacity-50 transition"
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Alttaki indikatör sayacım */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-125" // Aktif indikatör daha büyük ve beyaz
                : "bg-white bg-opacity-50 hover:bg-opacity-75" // Pasif indikatör daha küçük ve opak
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}