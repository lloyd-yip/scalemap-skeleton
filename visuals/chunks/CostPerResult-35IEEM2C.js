"use client";
import {
  Big,
  Ground,
  Lbl,
  Person
} from "./chunk-4SJJXYI3.js";
import {
  Visual
} from "./chunk-OFMDNVDX.js";
import "./chunk-3S2JCU5X.js";
import {
  C,
  GROUND_TINT,
  SANS,
  __toESM,
  require_jsx_runtime,
  sm
} from "./chunk-OW6SPI7U.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/problems/CostPerResult.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 8e3;
var FREEZE = 0.5;
var CX = 800;
var BEAM = 500;
var PIV = 430;
var COINS = [
  [0, 0],
  [1, 0],
  [2, 0],
  [0, 1],
  [1, 1],
  [0, 2]
];
function Scene({ t }) {
  const drop = t % 1;
  const settle = 15 + 1.6 * Math.sin(t * Math.PI * 2 * 2) + 1.2 * sm(0.62, 0.72, drop);
  const A = settle * Math.PI / 180;
  const lx = CX - Math.cos(A) * BEAM;
  const ly = PIV + Math.sin(A) * BEAM;
  const rx = CX + Math.cos(A) * BEAM;
  const ry = PIV - Math.sin(A) * BEAM;
  const dy = drop < 0.62 ? drop / 0.62 : 1;
  const coinStyle = {
    width: 78,
    height: 78,
    borderRadius: "50%",
    background: C.amber,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: SANS,
    fontSize: 46,
    fontWeight: 900,
    color: "#241A05"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, { tint: GROUND_TINT["cost-per-result"] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: CX - 14, top: PIV, width: 28, height: 320, background: "#39414A" } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: CX - 170,
          top: PIV + 300,
          width: 340,
          height: 26,
          borderRadius: 13,
          background: "#39414A"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: CX - BEAM,
          top: PIV - 11,
          width: BEAM * 2,
          height: 22,
          borderRadius: 11,
          background: C.white,
          transformOrigin: "50% 50%",
          transform: `rotate(${settle}deg)`,
          boxShadow: "0 0 30px rgba(255,255,255,0.2)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: CX - 26,
          top: PIV - 26,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: C.white
        }
      }
    ),
    [
      [lx, ly, "l"],
      [rx, ry, "r"]
    ].map(([px, py, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: { position: "absolute", left: px - 2, top: py, width: 4, height: 90, background: "rgba(255,255,255,0.55)" }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            position: "absolute",
            left: px - 150,
            top: py + 90,
            width: 300,
            height: 18,
            borderRadius: 9,
            background: "rgba(255,255,255,0.8)"
          }
        }
      )
    ] }, `pn${id}`)),
    COINS.map((c, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          ...coinStyle,
          position: "absolute",
          left: lx - 120 + c[0] * 84,
          top: ly + 90 - 82 - c[1] * 78,
          boxShadow: "0 6px 18px rgba(0,0,0,0.45)"
        },
        children: "$"
      },
      `co${k}`
    )),
    drop < 0.62 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          ...coinStyle,
          position: "absolute",
          left: lx - 36,
          top: 60 + dy * dy * (ly + 90 - 300)
        },
        children: "$"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Person, { x: rx - 27, y: ry + 90 - 96, s: 1.05, color: "rgba(255,255,255,0.9)" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: rx - 150, top: ry + 126, width: 300, textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lbl, { size: 22, color: C.dimInk, children: "one call" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: { position: "absolute", left: 80, top: 780, display: "flex", alignItems: "baseline", gap: 20 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { size: 110, color: C.amber, children: "$437" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lbl, { size: 22, color: C.dimInk, children: "per call" })
        ]
      }
    )
  ] });
}
function CostPerResult() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  CostPerResult as default
};
