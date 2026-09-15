var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  ECommerceCard: () => ECommerceCard
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.jsx
var import_react = __toESM(require("react"));

// src/components/ECommerceCard/ECommerceCard.jsx
var import_react2 = __toESM(require("react"));
var ECommerceCard = ({
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  title = "Wireless Headphones",
  price = 99.99,
  currency = "$",
  rating = 4.5,
  reviews = 120,
  accent = "#6366f1",
  bg = "#0f172a",
  onAddToCart = () => {
  }
}) => {
  const [hovered, setHovered] = (0, import_react2.useState)(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }
    },
    /* @__PURE__ */ import_react2.default.createElement("div", { style: { position: "relative", width: "100%", height: "200px", overflow: "hidden" } }, /* @__PURE__ */ import_react2.default.createElement("img", { src: image, alt: title, style: { width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" } }), /* @__PURE__ */ import_react2.default.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" } })),
    /* @__PURE__ */ import_react2.default.createElement("div", { style: { padding: "18px" } }, /* @__PURE__ */ import_react2.default.createElement("h3", { style: { fontSize: "15px", fontWeight: "700", color: "#fff", margin: "0 0 8px", lineHeight: 1.4 } }, title), /* @__PURE__ */ import_react2.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" } }, Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ import_react2.default.createElement("svg", { key: i, width: "14", height: "14", viewBox: "0 0 24 24", fill: i < Math.floor(rating) ? accent : "rgba(255,255,255,0.1)", stroke: i < Math.floor(rating) ? accent : "rgba(255,255,255,0.1)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ import_react2.default.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }))), /* @__PURE__ */ import_react2.default.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.45)" } }, "(", reviews, " reviews)")), /* @__PURE__ */ import_react2.default.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "18px" } }, /* @__PURE__ */ import_react2.default.createElement("span", { style: { fontSize: "24px", fontWeight: "800", color: accent } }, currency, price)), /* @__PURE__ */ import_react2.default.createElement(
      "button",
      {
        onClick: onAddToCart,
        style: { width: "100%", padding: "11px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")", color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }
      },
      "Add to Cart"
    ))
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ECommerceCard
});
