"use client";
import {
  Big,
  Ground,
  Lbl,
  Person
} from "/scalemap-skeleton/visuals/chunks/chunk-I3XW4O5R.js";
import {
  Visual
} from "/scalemap-skeleton/visuals/chunks/chunk-CZOOTBVB.js";
import "/scalemap-skeleton/visuals/chunks/chunk-XZJUOAQS.js";
import {
  C,
  GROUND_TINT,
  STAGE_H,
  STAGE_W,
  __toESM,
  require_jsx_runtime
} from "/scalemap-skeleton/visuals/chunks/chunk-2I5PAATC.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.uqsJpFb5oI/components/visuals/problems/Inconsistency.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 11e3;
var FREEZE = 0.36;
var P = [
  [40, 690],
  [180, 170],
  [330, 760],
  [480, 300],
  [640, 810],
  [800, 130],
  [960, 740],
  [1110, 330],
  [1270, 820],
  [1420, 200],
  [1560, 620]
];
var FLOOR = 858;
var mid = (a, b) => [
  (a[0] + b[0]) / 2,
  (a[1] + b[1]) / 2
];
var MS = P.slice(0, -1).map((p, i) => mid(p, P[i + 1]));
var PATH_D = (() => {
  let d = `M${P[0][0]} ${P[0][1]} L${MS[0][0]} ${MS[0][1]}`;
  for (let i = 1; i < P.length - 1; i++) d += ` Q${P[i][0]} ${P[i][1]} ${MS[i][0]} ${MS[i][1]}`;
  return `${d} L${P[P.length - 1][0]} ${P[P.length - 1][1]}`;
})();
var qp = (a, b, c, s) => [
  (1 - s) * (1 - s) * a[0] + 2 * (1 - s) * s * b[0] + s * s * c[0],
  (1 - s) * (1 - s) * a[1] + 2 * (1 - s) * s * b[1] + s * s * c[1]
];
function Scene({ t }) {
  const segs = P.length - 2;
  const gs = t % 1 * segs;
  const si = Math.min(segs - 1, Math.floor(gs));
  const s = gs - si;
  const pt = qp(MS[si], P[si + 1], MS[si + 1], s);
  const nx = qp(MS[si], P[si + 1], MS[si + 1], Math.min(1, s + 0.02));
  const ang = Math.atan2(nx[1] - pt[1], nx[0] - pt[0]) * 180 / Math.PI;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, { tint: GROUND_TINT.inconsistency }),
    P.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: p[0] - 3,
          top: p[1],
          width: 6,
          height: Math.max(0, FLOOR - p[1]),
          background: "rgba(255,255,255,0.09)"
        }
      },
      `sup${i}`
    )),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 0, right: 0, top: FLOOR, height: 6, background: "rgba(255,255,255,0.18)" } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "svg",
      {
        width: STAGE_W,
        height: STAGE_H,
        viewBox: `0 0 ${STAGE_W} ${STAGE_H}`,
        style: { position: "absolute", left: 0, top: 0, overflow: "visible" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: PATH_D, fill: "none", stroke: "rgba(242,179,61,0.25)", strokeWidth: 30, strokeLinecap: "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              d: PATH_D,
              fill: "none",
              stroke: C.amber,
              strokeWidth: 14,
              strokeLinecap: "round",
              style: { filter: "drop-shadow(0 0 20px rgba(242,179,61,0.4))" }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          left: pt[0] - 95,
          top: pt[1] - 150,
          width: 190,
          height: 150,
          transformOrigin: "50% 100%",
          transform: `rotate(${ang}deg)`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Person, { x: 64, y: 4, s: 1, color: C.red }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                position: "absolute",
                left: 0,
                top: 58,
                width: 190,
                height: 58,
                borderRadius: "12px 26px 10px 10px",
                background: C.white,
                boxShadow: "0 0 34px rgba(255,255,255,0.35)"
              }
            }
          ),
          [22, 118].map((wx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                position: "absolute",
                left: wx,
                top: 100,
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#20262C",
                border: "7px solid #C3C9CF"
              }
            },
            `w${i}`
          ))
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "absolute", left: 830, top: 60, display: "flex", alignItems: "baseline", gap: 16 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { size: 80, color: C.green, children: "11" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lbl, { size: 20, color: C.dimInk, children: "best week" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "absolute", left: 1290, top: 700, display: "flex", alignItems: "baseline", gap: 16 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { size: 80, color: C.red, children: "0" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lbl, { size: 20, color: C.dimInk, children: "the next eleven weeks" })
    ] })
  ] });
}
function Inconsistency() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  Inconsistency as default
};
