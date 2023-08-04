# React Splide 
React Splide er en Komponent til React til en Splide-Slider/Carousel. Splide er en fleksibel, let og tilgængelig slider/carsousel skrevet i TypeScript. Det hjælper dig med at oprette forskellige slags slider/carousel blot at ændre muligheder, såsom flere slider/carousel thumbnails, nested sliders, vertical direction og mere. [React Splide](https://splidejs.com/v3/integration/react-splide/) - [Eksempler](https://splidejs.github.io/react-splide/)


## Brug
    npm install @splidejs/react-splide

Import

    import { Splide, SplideSlide } from "@splidejs/react-splide";

#### interface
    interface CardData {
      title: string;
      imageUrl: string;
    }

    interface CardSliderProps {
      cards: CardData[];
    }

#### Options

Fortæller hvordan slider skal fungere

    
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
         - // - 
         419: {
          perPage: 1,
          peek: 30,
          padding: '1rem',
          drag: true,
          autoplay: true,
        },
       },
     };


### App 

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
