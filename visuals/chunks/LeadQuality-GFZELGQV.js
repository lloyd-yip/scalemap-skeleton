"use client";
import {
  Big,
  Ground,
  Lbl,
  Person,
  PersonOutline,
  XMark
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

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/problems/LeadQuality.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 1e4;
var FREEZE = 0.55;
var CX = 720;
var CY = 400;
var MISSES = [
  [210, 120],
  [1090, 210],
  [330, 700],
  [1180, 620],
  [520, 118],
  [1010, 740],
  [180, 430]
];
function Scene({ t }) {
  const fly = t * 2 % 1;
  const land = [1330, 330];
  const start = [1660, -60];
  const prog = Math.min(1, fly / 0.55);
  const fx = start[0] + (land[0] - start[0]) * prog;
  const fy = start[1] + (land[1] - start[1]) * prog;
  const landed = fly > 0.55;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, { tint: GROUND_TINT["lead-quality"] }),
    [
      [300, "rgba(255,255,255,0.16)"],
      [210, "rgba(255,255,255,0.3)"],
      [120, "rgba(255,255,255,0.5)"]
    ].map(([r, col], k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: CX - r,
          top: CY - r,
          width: r * 2,
          height: r * 2,
          borderRadius: "50%",
          border: `10px solid ${col}`
        }
      },
      `rg${k}`
    )),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonOutline, { x: CX - 33, y: CY - 52, s: 1.22, color: "rgba(46,204,113,0.85)" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: CX - 200, top: CY + 322, width: 400, textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lbl, { size: 21, color: "rgba(46,204,113,0.6)", style: { whiteSpace: "normal" }, children: "the right buyer" }) }),
    MISSES.map((m, k) => {
      const wob = Math.sin(t * Math.PI * 2 + k * 1.3) * 3;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Person, { x: m[0], y: m[1] + wob, s: 1.05, color: "rgba(229,72,77,0.82)" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XMark, { x: m[0] + 4, y: m[1] + 8 + wob, s: 52, opacity: 0.92 })
      ] }, `ms${k}`);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Person,
      {
        x: fx,
        y: fy,
        s: 1.1,
        color: "rgba(229,72,77,0.9)",
        style: { transform: `rotate(${landed ? 0 : -18}deg)` }
      }
    ),
    landed && (() => {
      const pf = (fly - 0.55) / 0.45;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XMark, { x: land[0] + 4, y: land[1] + 8, s: 54 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: land[0] + 27 - pf * 90,
              top: land[1] + 80 - pf * 90,
              width: pf * 180,
              height: pf * 180,
              borderRadius: "50%",
              border: `5px solid rgba(229,72,77,${0.5 * (1 - pf)})`
            }
          }
        )
      ] });
    })(),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: { position: "absolute", left: 80, top: 790, display: "flex", alignItems: "baseline", gap: 22 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { size: 96, color: C.red, children: "0" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lbl, { size: 22, color: C.dimInk, children: "on profile" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: { position: "absolute", right: 80, top: 790, display: "flex", alignItems: "baseline", gap: 22 },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Big, { size: 96, color: "rgba(255,255,255,0.7)", children: "182" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lbl, { size: 22, color: C.dimInk, children: "off profile" })
        ]
      }
    )
  ] });
}
function LeadQuality() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  LeadQuality as default
};
