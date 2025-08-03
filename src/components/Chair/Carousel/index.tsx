import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./index.scss";

interface Slide {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 4000, // Delay más largo para una experiencia más pausada
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="carousel">
      <div className="viewport" ref={emblaRef}>
        <div className="container">
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div
                className={`slide-content ${
                  selectedIndex === index ? "slide-active" : "slide-inactive"
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dots">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={selectedIndex === index ? "is-active" : ""}
            onClick={() => scrollTo(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
