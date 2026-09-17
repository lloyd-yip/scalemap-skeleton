"use client";
import {
  Big,
  Caption,
  Ground,
  Lbl
} from "./chunk-4SJJXYI3.js";
import {
  Visual
} from "./chunk-OFMDNVDX.js";
import "./chunk-3S2JCU5X.js";
import {
  C,
  GROUND_TINT,
  __toESM,
  require_jsx_runtime
} from "./chunk-OW6SPI7U.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/problems/LeadQuantity.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 7e3;
var FREEZE = 0.42;
var SPX = 700;
var SPW = 88;
var PIPE_Y = 150;
var PIPE_H = 58;
var NOZZLE = SPX + SPW / 2;
var BX = 620;
var BY = 420;
var BW = 420;
var BH = 380;
function Scene({ t }) {
  const level = 26 + 6 * Math.abs(Math.sin(t * Math.PI * 2));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, { tint: GROUND_TINT["lead-quantity"] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 170,
          top: PIPE_Y,
          width: SPX + SPW - 170,
          height: PIPE_H,
          borderRadius: 8,
          background: "linear-gradient(#3A4249,#22282D)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: SPX,
          top: PIPE_Y + PIPE_H - 8,
          width: SPW,
          height: 104,
          borderRadius: "0 0 14px 14px",
          background: "linear-gradient(#343C42,#1E2429)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: NOZZLE - 9,
          top: PIPE_Y - 34,
          width: 18,
          height: 40,
          background: "#454E56"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: NOZZLE - 54,
          top: PIPE_Y - 128,
          width: 108,
          height: 108,
          borderRadius: "50%",
          border: "15px solid #454E56"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 170, top: PIPE_Y - 64 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lbl, { size: 22, color: C.dimInk, children: "wide open" }) }),
    Array.from({ length: 3 }, (_, k) => {
      const d = (t + k * 0.34) % 1;
      if (d > 0.62) return null;
      const fall = d / 0.62;
      const y = PIPE_Y + PIPE_H + 96 + fall * fall * 400;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            position: "absolute",
            left: NOZZLE - 15,
            top: y,
            width: 30,
            height: 30 + fall * 26,
            borderRadius: "50%",
            background: C.green,
            boxShadow: "0 0 26px rgba(46,204,113,0.6)"
          }
        },
        `dr${k}`
      );
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: BX,
          top: BY,
          width: BW,
          height: BH,
          borderRadius: "10px 10px 34px 34px",
          border: "14px solid rgba(255,255,255,0.72)",
          borderTop: "none",
          background: "rgba(255,255,255,0.03)"
        }
      }
    ),
    [0.25, 0.5, 0.75].map((f, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            position: "absolute",
            left: BX + 20,
            top: BY + BH - BH * f,
            width: BW - 40,
            height: 2,
            background: "rgba(255,255,255,0.13)"
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: BX + BW + 24, top: BY + BH - BH * f - 14 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lbl, { size: 18, color: "rgba(255,255,255,0.22)", children: [
        Math.round(f * 100),
        "%"
      ] }) })
    ] }, `g${k}`)),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: BX + 14,
          top: BY + BH - level - 14,
          width: BW - 28,
          height: level,
          borderRadius: "0 0 22px 22px",
          background: C.green,
          boxShadow: "0 0 40px rgba(46,204,113,0.5)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          left: 1160,
          top: 560,
          display: "flex",
          flexDirection: "column",
          gap: 10
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lbl, { size: 22, color: C.dimInk, children: "replies" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { size: 170, color: C.green, children: "3" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caption, { children: "nothing is broken \u2014 it just trickles" })
  ] });
}
function LeadQuantity() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  LeadQuantity as default
};
