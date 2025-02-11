import React from "react";
import menPhoto from "../assets/images/editorpickman.png";
import womenPhoto from "../assets/images/editorpickwomen.png";
import kidPhoto from "../assets/images/editorpickkid.png";
import accesoriesPhoto from "../assets/images/editorpickaccessories.png";
import { useNavigate } from "react-router-dom";

const EditorsPick = () => {
    const navigate = useNavigate();
  
    const categories = [
      {
        title: "ERKEK",
        image: menPhoto,
        link: "/shop/men",
        className: "w-[510px] h-[500px] lg:w-[510px] lg:h-[500px] md:w-full md:h-[400px]",
      },
      {
        title: "KADIN",
        image: womenPhoto,
        link: "/shop/women",
        className: "w-[240px] h-[500px] lg:w-[240px] lg:h-[500px] md:w-full md:h-[400px]",
      },
      {
        title: "AKSESUAR",
        image: accesoriesPhoto,
        link: "/shop/accessories",
        className: "w-[240px] h-[240px] lg:w-[240px] lg:h-[240px] md:w-full md:h-[300px]",
      },
      {
        title: "ÇOCUK",
        image: kidPhoto,
        link: "/shop/kids",
        className: "w-[240px] h-[240px] lg:w-[240px] lg:h-[240px] md:w-full md:h-[300px]",
      },
    ];

  return (
    <div className="bg-lightGray w-full p-4">
      <h1 className="mb-4 text-center text-2xl font-bold">EDİTÖRÜMÜZÜN SEÇTİKLERİ</h1>
      <p className="mb-8 text-center text-gray-600">
        Uzmanlıklarımıza göz gezdirin..
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <div className={`relative ${categories[0].className}`}>
          <div className="h-full w-full overflow-hidden">
            <img
              src={categories[0].image}
              alt={categories[0].title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6">
            <button
                onClick={() => navigate(categories[0].link)}
                className="bg-white px-10 py-3 text-sm font-bold hover:bg-gray-200 transition"
              >
                {categories[0].title}
              </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className={`relative ${categories[1].className}`}>
            <div className="h-full w-full overflow-hidden">
              <img
                src={categories[1].image}
                alt={categories[1].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6">
            <button
                onClick={() => navigate(categories[1].link)}
                className="bg-white px-10 py-3 text-sm font-bold hover:bg-gray-200 transition"
              >
                {categories[1].title}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {categories.slice(2).map((category, index) => (
            <div key={index} className={`relative ${category.className}`}>
              <div className="h-full w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6">
              <button
                  onClick={() => navigate(category.link)}
                  className="bg-white px-10 py-3 text-sm font-bold hover:bg-gray-200 transition"
                >
                  {category.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;