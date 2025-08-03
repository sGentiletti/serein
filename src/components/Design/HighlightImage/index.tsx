import HighlightPoint from "./HighlightPoint/index.tsx";
import "./index.scss";
import heroImage from "../../../assets/desing.png";

const highlights = [
  {
    pointX: 150,
    pointY: 150,
    diagEndX: 110,
    diagEndY: 63,
    lineEndX: 40,
    lineEndY: 63,
    labelX: -290,
    labelY: 50,
    text: "Tapizados excepcionales al sentarse",
  },
  {
    pointX: 150,
    pointY: 300,
    diagEndX: 80,
    diagEndY: 243,
    lineEndX: -55,
    lineEndY: 243,
    labelX: -290,
    labelY: 230,
    text: "Comodidad que se hunde",
  },
  {
    pointX: 150,
    pointY: 400,
    diagEndX: 80,
    diagEndY: 443,
    lineEndX: -55,
    lineEndY: 443,
    labelX: -350,
    labelY: 430,
    text: "Núcleo de cojín de lujo ecológico",
  },
  {
    pointX: 150,
    pointY: 550,
    diagEndX: 80,
    diagEndY: 605,
    lineEndX: -80,
    lineEndY: 605,
    labelX: -400,
    labelY: 580,
    text: "Estructura de madera dura secada <br/> de origen sostenible",
  },
];

export default function HighlightImage() {
  return (
    <div className="highlight-image__container">
      <img
        src={heroImage.src}
        alt="sofa"
        width={heroImage.width}
        height={heroImage.height}
        className="w-full h-auto"
      />

      {highlights.map((highlight, index) => (
        <HighlightPoint key={index} {...highlight} />
      ))}
    </div>
  );
}
