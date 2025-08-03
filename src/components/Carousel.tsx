import useEmblaCarousel from "embla-carousel-react";

interface Slide {
  image: string;
  alt: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide: Slide, index: number) => (
          <div className="flex-[0_0_100%]" key={index}>
            <img src={slide.image} alt={slide.alt} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
