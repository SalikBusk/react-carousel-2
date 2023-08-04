import React from "react";
import Container from "../Components/Container";
import Heading from "../Components/Heading";
import Slider from "../Components/Slides/Slides";

import slide1 from '../Assets/images/Arctic-ice-tours-web.jpg'
import slide2 from '../Assets/images/Baggrund.webp'

const cards = [
  {
    title: 'Card 1',
    imageUrl: slide1,
  },
  {
    title: 'Card 2',
    imageUrl: slide2,
  },
  {
    title: 'Card 3',
    imageUrl: slide1,
  },
  {
    title: 'Card 4',
    imageUrl: slide2,
  },
];

const Index = () => {
  return (
    <div className="h-[100vh] w-full flex flex-cols justify-start items-center">
      <Container>
        <Heading title="Product card slider" subtitle="React Komponent"/>
        <section className="py-[20px]">
          <Slider cards={cards}/>
        </section>
      </Container>
    </div>
  );
};

export default Index;
