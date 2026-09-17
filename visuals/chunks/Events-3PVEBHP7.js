"use client";
import {
  EVENTS_PHOTO,
  EVENTS_PHOTO_CREDIT
} from "/scalemap-skeleton/visuals/chunks/chunk-CVUQ5NKE.js";
import {
  Visual
} from "/scalemap-skeleton/visuals/chunks/chunk-CZOOTBVB.js";
import {
  C,
  MONO,
  __toESM,
  require_jsx_runtime,
  sm
} from "/scalemap-skeleton/visuals/chunks/chunk-2I5PAATC.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.uqsJpFb5oI/components/visuals/channels/Events.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 12e3;
var FREEZE = 0.9;
var BASE = 230;
var LEN = 3e3;
var { pathD, gaps } = (() => {
  const pts = [];
  const g = [];
  let x = 30;
  for (let c = 0; c < 3; c++) {
    pts.push([x, BASE]);
    pts.push([x + 42, 24]);
    for (let k = 1; k <= 6; k++) pts.push([x + 42 + k * 22, 24 + (BASE - 24) * (1 - Math.exp(-k * 0.6))]);
    pts.push([x + 460, BASE]);
    g.push([x + 200, x + 460]);
    x += 460;
  }
  return {
    pathD: pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" "),
    gaps: g
  };
})();
var GAP_LABELS = ["9 weeks quiet", "11 weeks quiet", "7 weeks quiet"];
function Scene({ t }) {
  const drawn = sm(0.02, 0.34, t);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", inset: 0, background: "#0A0C0E" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        src: `${EVENTS_PHOTO}?fm=jpg&q=70&w=2400&auto=format&fit=crop`,
        alt: "",
        style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(4,6,8,0.46) 0%, rgba(4,6,8,0.1) 28%, rgba(4,6,8,0.68) 50%, rgba(4,6,8,0.88) 74%, rgba(4,6,8,0.5) 95%, rgba(4,6,8,0.22) 100%)",
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 56,
          top: 54,
          fontFamily: MONO,
          fontSize: 25,
          letterSpacing: "0.16em",
          color: "rgba(255,255,255,0.82)"
        },
        children: "INBOUND AFTER EACH STAGE \xB7 18 MONTHS"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 56, bottom: 150, width: 1440, height: 250 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "100%", height: "100%", viewBox: "0 0 1410 250", style: { overflow: "visible" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: 0, y1: BASE, x2: 1410, y2: BASE, stroke: "rgba(255,255,255,0.3)", strokeWidth: 2 }),
      gaps.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "rect",
        {
          x: g[0],
          y: 22,
          width: g[1] - g[0],
          height: BASE - 22,
          fill: "rgba(229,72,77,0.12)",
          stroke: "rgba(229,72,77,0.45)",
          strokeWidth: 2,
          strokeDasharray: "9 9",
          opacity: sm(0.16 + i * 0.06, 0.28 + i * 0.06, t)
        },
        `g${i}`
      )),
      gaps.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "text",
        {
          x: g[0] + 14,
          y: BASE - 20,
          fontFamily: MONO,
          fontSize: 21,
          letterSpacing: "0.06em",
          fill: "rgba(255,170,170,0.95)",
          opacity: sm(0.2 + i * 0.06, 0.32 + i * 0.06, t),
          children: GAP_LABELS[i]
        },
        `gt${i}`
      )),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: pathD,
          fill: "none",
          stroke: C.green,
          strokeWidth: 7,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: LEN,
          strokeDashoffset: LEN * (1 - drawn),
          style: { filter: "drop-shadow(0 0 16px rgba(46,204,113,0.5))" }
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          right: 56,
          bottom: 96,
          fontFamily: MONO,
          fontSize: 26,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.68)"
        },
        children: "the gaps are the shape"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 56,
          bottom: 26,
          fontFamily: MONO,
          fontSize: 17,
          letterSpacing: "0.06em",
          color: "rgba(255,255,255,0.4)"
        },
        children: EVENTS_PHOTO_CREDIT
      }
    )
  ] });
}
function Events() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  Events as default
};
