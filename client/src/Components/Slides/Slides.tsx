import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

interface CardData {
  title: string;
  imageUrl: string;
}

interface CardSliderProps {
  cards: CardData[];
}

const Slides: React.FC<CardSliderProps> = ({ cards }) => {
  const splideOptions = {
  type: "loop",
  autoplay: false,
  arrows: false,
  perMove: 1,
  pagination: false,
  gap: 20,
  breakpoints: {
    1536: {
      perPage: 4,
      drag: false,
    },
    1280: {
      perPage: 4,
      drag: false,
    },
    1024: {
      perPage: 4,
      drag: false,
    },
    768: {
      perPage: 3,
      peek: 30,
      drag: true,
      autoplay: true,
    },
    640: {
      perPage: 2,
      peek: 30,
      drag: true,
      autoplay: true,
    },
     419: {
      perPage: 1,
      peek: 30,
      padding: '1rem',
      drag: true,
      autoplay: true,
    },
  },
};


  return (
    <div className="overflow-x-hidden">
      <div className="w-calc(125vw + 30px) cursor-pointer xl:cursor-default">
        <Splide options={splideOptions}>
          {cards.map((card, index) => (
            <SplideSlide key={index}>
              <figure>
                <img
                  className="w-full h-[38vh] rounded-[10px] object-cover"
                  src={card.imageUrl}
                  alt={card.title}
                />
                <h3>{card.title}</h3>
              </figure>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Slides;
