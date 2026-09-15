// src/components/Button/Button.jsx
import React, { useState } from "react";

// src/components/ECommerceCard/ECommerceCard.jsx
import React2, { useState as useState2 } from "react";
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
  const [hovered, setHovered] = useState2(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React2.createElement(
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
    /* @__PURE__ */ React2.createElement("div", { style: { position: "relative", width: "100%", height: "200px", overflow: "hidden" } }, /* @__PURE__ */ React2.createElement("img", { src: image, alt: title, style: { width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" } }), /* @__PURE__ */ React2.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" } })),
    /* @__PURE__ */ React2.createElement("div", { style: { padding: "18px" } }, /* @__PURE__ */ React2.createElement("h3", { style: { fontSize: "15px", fontWeight: "700", color: "#fff", margin: "0 0 8px", lineHeight: 1.4 } }, title), /* @__PURE__ */ React2.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" } }, Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ React2.createElement("svg", { key: i, width: "14", height: "14", viewBox: "0 0 24 24", fill: i < Math.floor(rating) ? accent : "rgba(255,255,255,0.1)", stroke: i < Math.floor(rating) ? accent : "rgba(255,255,255,0.1)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React2.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }))), /* @__PURE__ */ React2.createElement("span", { style: { fontSize: "12px", color: "rgba(255,255,255,0.45)" } }, "(", reviews, " reviews)")), /* @__PURE__ */ React2.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "18px" } }, /* @__PURE__ */ React2.createElement("span", { style: { fontSize: "24px", fontWeight: "800", color: accent } }, currency, price)), /* @__PURE__ */ React2.createElement(
      "button",
      {
        onClick: onAddToCart,
        style: { width: "100%", padding: "11px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")", color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }
      },
      "Add to Cart"
    ))
  );
};
export {
  ECommerceCard
};
