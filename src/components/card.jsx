import React, { useState } from "react";
import arrow from "../assets/arrow-right-short 1.png";
import eye from "../assets/eye-slash 1.png";
import vector from "../assets/Vector.png";
import { Info, Star } from "lucide-react";
import bookHeart from "../assets/bookmark-heart 1.png";

function Card({ title, projects, years, ratings, bg }) {
  const [bookmarked, setBookmarked] = useState(false);

  function renderStars(rating) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-black" />);
    }
    if (hasHalf) {
      stars.push(
        <span key="half" className="relative w-4 h-4 inline-block">
          <Star
            className="w-4 h-4 text-black absolute left-0 top-0"
            style={{ color: "#000", fill: "none" }}
          />
          <Star
            className="w-4 h-4 text-black absolute left-0 top-0"
            style={{
              color: "#000",
              clipPath: "inset(0 50% 0 0)",
              fill: "#000",
            }}
          />
        </span>
      );
    }
    while (stars.length < 5) {
      stars.push(<Star key={stars.length} className="w-4 h-4 text-black" />);
    }
    return stars;
  }

  return (
    <div
      className="flex justify-between gap-2"
      style={{ backgroundColor: bg || "#FFFCF2" }}
    >
      <div className="px-4 py-5">
        <h3 className="text-[18px] font-bold text-black mb-2">{title}</h3>
        <div className="flex gap-1 justify-start items-start">
          {renderStars(ratings)}
        </div>
        <p className="text-[10px] text-black mt-5">
          Passionate team of 4 designers working out of Bangalore with an
          experience of 4 years.
        </p>
        <div className="flex items-start gap-7 pt-7">
          <div className="flex items-center flex-col">
            <h3 className="text-[24px] font-semibold text-black">{projects}</h3>
            <p className="text-[10px] -mt-1 text-black">Projects</p>
          </div>
          <div className="flex items-center flex-col">
            <h3 className="text-[24px] font-semibold text-black">{years}</h3>
            <p className="text-[10px] -mt-1 text-black">Years</p>
          </div>
          <div className="flex items-center flex-col">
            <h3 className="text-[24px] font-semibold text-black">$$</h3>
            <p className="text-[10px] -mt-1 text-black">Price</p>
          </div>
        </div>
        <div className="flex items-start flex-col pt-7 gap-1">
          <p className="text-[15px] font-medium h-5">+91 - 984532853</p>
          <p className="text-[15px] font-medium h-5">+91 - 984532854</p>
        </div>
      </div>
      <hr className="border-t border-[#E0DCD9] opacity-60" />
      <div className="flex flex-col justify-between items-center gap-4 px-4 py-5">
        <div className="flex flex-col items-center">
          <img src={arrow} className="w-[23px] h-[22px]" alt="Arrow Icon" />
          <p className="text-[10px] mt-0.5 text-[#8D4337]">Details</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={eye} className="w-[20px] h-[20px]" alt="Eye Icon" />
          <p className="text-[10px] mt-0.5 text-[#8D4337]">Hide</p>
        </div>
        <div
          onClick={() => setBookmarked(!bookmarked)}
          className="flex flex-col items-center"
        >
          {bookmarked ? (
            <img
              src={bookHeart}
              className="w-[23px] h-[21px] fill-red-500"
              alt="Bookmarked Icon"
            />
          ) : (
            <img src={vector} className="w-[17px] h-[21px]" alt="Vector Icon" />
          )}
          <p className="text-[10px] mt-0.5 text-[#8D4337]">Shortlist</p>
        </div>
        <div className="flex flex-col items-center">
          <Info className="w-4 h-4 text-[#8D4337]" />
          <p className="text-[10px] mt-0.5 text-[#8D4337]">Report</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
