import { e as createComponent, f as createAstro, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, n as renderScript, o as renderComponent } from '../chunks/astro/server_EaC4l25D.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body class="font-sans text-gray-800"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/sgentiletti/Desktop/martu/serein/src/layouts/Layout.astro", void 0);

const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" id="navbar"> <a href="#"> <div class="navbar__logo">serein.</div> </a> <ul class="navbar__menu"> <li><a href="#">Home</a></li> <li><a href="#design">Colección</a></li> <li><a href="#">Nosotros</a></li> <li><a href="#">Contacto</a></li> <li><a href="#">Preguntas</a></li> </ul> <div class="navbar__actions"> <a href="#" class="action"> <img src="/assets/search.svg" alt="search"> </a> <a href="#" class="action"> <img src="/assets/user.svg" alt="user"> </a> <a href="#" class="action"> <img src="/assets/cart.svg" alt="cart"> </a> </div> </nav> ${renderScript($$result, "/Users/sgentiletti/Desktop/martu/serein/src/components/Navbar/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/sgentiletti/Desktop/martu/serein/src/components/Navbar/index.astro", void 0);

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" id="hero"> <h1 class="hero__title">SOMA CHAIR</h1> <div class="hero__images"> <img src="/assets/hero.png" alt="Chairs" class="image"> </div> <div class="hero__buttons"> <button class="button button--primary">Más Información</button> <button class="button button--secondary">Comprar</button> </div> <div class="hero__description"> <p>Estructural. Único. Orgánico. Natural. Funcional.</p> </div> </section>`;
}, "/Users/sgentiletti/Desktop/martu/serein/src/components/Hero/index.astro", void 0);

const HighlightPoint = ({
  pointX,
  pointY,
  diagEndX,
  diagEndY,
  lineEndX,
  lineEndY,
  labelX,
  labelY,
  text
}) => {
  const [hovered, setHovered] = useState(false);
  const linePath = `M ${pointX} ${pointY} L ${diagEndX} ${diagEndY} L ${lineEndX} ${lineEndY}`;
  return /* @__PURE__ */ jsxs("div", { className: "highlight-container", children: [
    /* @__PURE__ */ jsxs("svg", { className: "highlight-svg", children: [
      /* @__PURE__ */ jsxs(
        "g",
        {
          onMouseEnter: () => setHovered(true),
          onMouseLeave: () => setHovered(false),
          className: `highlight-dot ${hovered ? "hovered" : ""}`,
          children: [
            /* @__PURE__ */ jsx("circle", { cx: pointX, cy: pointY, r: "4", className: "dot-inner" }),
            /* @__PURE__ */ jsx("circle", { cx: pointX, cy: pointY, r: "12", className: "dot-outer" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: linePath,
          className: `highlight-line ${hovered ? "draw" : ""}`
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `highlight-label ${hovered ? "visible" : ""}`,
        style: { left: `${labelX}px`, top: `${labelY}px` },
        children: /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: text } })
      }
    )
  ] });
};

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
    text: "Tapizados excepcionales al sentarse"
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
    text: "Comodidad que se hunde"
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
    text: "Núcleo de cojín de lujo ecológico"
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
    text: "Estructura de madera dura secada <br/> de origen sostenible"
  }
];
function HighlightImage() {
  return /* @__PURE__ */ jsxs("div", { className: "highlight-image__container", children: [
    /* @__PURE__ */ jsx("img", { src: "/assets/desing.png", alt: "sofa", className: "image" }),
    highlights.map((highlight, index) => /* @__PURE__ */ jsx(HighlightPoint, { ...highlight }, index))
  ] });
}

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="design" id="design"> <div class="content"> <h2 class="content__title">Diseño</h2> <p class="content__description">
Fabricado artesanalmente con la máxima atención al detalle, su diseño
      orgánico presenta una suave curva en el respaldo, con asiento erguido y un
      amplio siento tipo banco.
</p> <p class="content__description">
Mecanismo giratorio de 360º. Sofás a juego disponibles en dos tamaños.
</p> </div> ${renderComponent($$result, "HighlightImage", HighlightImage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sgentiletti/Desktop/martu/serein/src/components/Design/HighlightImage/index.tsx", "client:component-export": "default" })} </section>`;
}, "/Users/sgentiletti/Desktop/martu/serein/src/components/Design/index.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Serein - Soma Chair" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Index$3, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Index$2, {})} ${renderComponent($$result2, "Design", $$Index$1, {})} <!-- <Dimensions />
    <Collections /> --> </main>  ` })}`;
}, "/Users/sgentiletti/Desktop/martu/serein/src/pages/index.astro", void 0);

const $$file = "/Users/sgentiletti/Desktop/martu/serein/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
