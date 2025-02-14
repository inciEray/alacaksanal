import React from "react";
import { ChevronRight } from "lucide-react";
import ClothingCard from "../components/ShopPageClothingCard.jsx";
import { shopCard } from "../data/shopCard.js";


export default function ShopPageNavbar() {
    return (
      <div>
        <div className="bg-lightGray">
          <div className="container mx-auto">
            <div className="flex flex-col justify-center gap-4 px-4 py-4 text-center sm:flex-row sm:justify-between lg:px-10">
            <h3 className="font-bold text-2xl leading-8 tracking-wide text-center">
                Mağaza
            </h3>
              <p className="text-bold text-2xl leading-8 tracking-wide text-center flex items-center justify-center">
                Ana Sayfa
                <ChevronRight color="#BDBDBD" className="mx-2" />{" "}
                {/* İkon */}
                <span className="text-[#BDBDBD]">Mağaza</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-lightGray">
          <div className="container mx-auto">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center justify-items-center gap-y-4 py-4 lg:pb-24 xl:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
              {shopCard.map((card, index) => (
                <ClothingCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
    }