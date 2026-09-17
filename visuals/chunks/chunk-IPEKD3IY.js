import {
  C,
  MONO,
  SANS,
  __toESM,
  require_jsx_runtime
} from "/scalemap-skeleton/visuals/chunks/chunk-APJWEUBL.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.ZvOiU35XK0/components/visuals/chrome.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
function Av({ src, d, style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      src,
      alt: "",
      style: {
        width: d,
        height: d,
        borderRadius: "50%",
        objectFit: "cover",
        objectPosition: "center 22%",
        flex: "none",
        display: "block",
        ...style
      }
    }
  );
}
function Card({ children, style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        position: "absolute",
        background: C.card,
        borderRadius: 14,
        border: `1px solid ${C.line}`,
        boxShadow: "0 1px 3px rgba(20,22,26,0.07)",
        overflow: "hidden",
        ...style
      },
      children
    }
  );
}
function Pill({
  children,
  w,
  h,
  bg,
  color,
  style
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        width: w,
        height: h,
        borderRadius: h / 2,
        background: bg,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: SANS,
        fontSize: 24,
        fontWeight: 600,
        whiteSpace: "nowrap",
        ...style
      },
      children
    }
  );
}
function Txt({
  children,
  size,
  weight,
  color,
  style
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontFamily: SANS, fontSize: size, fontWeight: weight, color, lineHeight: 1.25, ...style }, children });
}
function Mono({
  children,
  size,
  color,
  style
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        fontFamily: MONO,
        fontSize: size,
        letterSpacing: "0.06em",
        color,
        whiteSpace: "nowrap",
        ...style
      },
      children
    }
  );
}
function ChannelCaption({ children, color = "rgba(255,255,255,0.55)" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        position: "absolute",
        left: 56,
        bottom: 44,
        fontFamily: MONO,
        fontSize: 26,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color
      },
      children
    }
  );
}

export {
  Av,
  Card,
  Pill,
  Txt,
  Mono,
  ChannelCaption
};
