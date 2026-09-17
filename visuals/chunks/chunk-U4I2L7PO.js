import {
  fitScale
} from "/scalemap-skeleton/visuals/chunks/chunk-ILJBQGGO.js";
import {
  C,
  MONO,
  SANS,
  __toESM,
  require_jsx_runtime
} from "/scalemap-skeleton/visuals/chunks/chunk-APJWEUBL.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.ZvOiU35XK0/components/visuals/primitives.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
function Ground({ tint = "#101418" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        position: "absolute",
        inset: 0,
        background: `radial-gradient(ellipse 70% 70% at 50% 42%, ${tint} 0%, #0A0C0F 52%, #08090B 100%)`
      }
    }
  );
}
function Big({
  children,
  size,
  color,
  style
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        fontFamily: SANS,
        fontSize: size,
        fontWeight: 900,
        letterSpacing: "-0.03em",
        lineHeight: 0.9,
        color,
        ...style
      },
      children
    }
  );
}
function Lbl({
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
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color,
        whiteSpace: "nowrap",
        ...style
      },
      children
    }
  );
}
function Caption({ children, color = C.dimInk }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 44,
        textAlign: "center",
        fontFamily: MONO,
        fontSize: 28,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color
      },
      children
    }
  );
}
function Person({
  x,
  y,
  s,
  color,
  style
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      style: { position: "absolute", left: x, top: y, width: 54 * s, height: 86 * s, ...style },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: 13 * s,
              top: 0,
              width: 28 * s,
              height: 28 * s,
              borderRadius: "50%",
              background: color
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: 0,
              top: 34 * s,
              width: 54 * s,
              height: 52 * s,
              borderRadius: `${26 * s}px ${26 * s}px ${8 * s}px ${8 * s}px`,
              background: color
            }
          }
        )
      ]
    }
  );
}
function PersonOutline({
  x,
  y,
  s,
  color
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "absolute", left: x, top: y, width: 54 * s, height: 86 * s }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 13 * s,
          top: 0,
          width: 28 * s,
          height: 28 * s,
          borderRadius: "50%",
          border: `${4 * s}px dashed ${color}`
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 0,
          top: 34 * s,
          width: 54 * s,
          height: 52 * s,
          borderRadius: `${26 * s}px ${26 * s}px ${8 * s}px ${8 * s}px`,
          border: `${4 * s}px dashed ${color}`
        }
      }
    )
  ] });
}
function XMark({
  x,
  y,
  s,
  opacity = 1
}) {
  const bar = {
    position: "absolute",
    left: 0,
    top: s / 2 - s * 0.08,
    width: s,
    height: s * 0.16,
    borderRadius: s * 0.08,
    background: C.red
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "absolute", left: x, top: y, width: s, height: s, opacity }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { ...bar, transform: "rotate(45deg)" } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { ...bar, transform: "rotate(-45deg)" } })
  ] });
}
function Cursor({ x, y }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      width: 62,
      height: 74,
      viewBox: "0 0 22 26",
      style: { position: "absolute", left: x, top: y, filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.6))" },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "polygon",
        {
          points: "2,1 2,21 7,16 11,25 15,23 11,14 19,14",
          fill: "#fff",
          stroke: "#16181A",
          strokeWidth: 1.6
        }
      )
    }
  );
}
function Slot({
  text,
  comfort,
  maxWidth,
  style,
  floor
}) {
  const scale = fitScale(text, comfort, floor);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      style: {
        display: "inline-block",
        maxWidth,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        // Scaling from the left keeps the slot's start anchored, so a short name and
        // a long one begin at the same x — which is what stops the eye seeing a jump.
        transformOrigin: "0 50%",
        transform: scale === 1 ? void 0 : `scale(${scale})`,
        ...style
      },
      children: text
    }
  );
}

export {
  Ground,
  Big,
  Lbl,
  Caption,
  Person,
  PersonOutline,
  XMark,
  Cursor,
  Slot
};
