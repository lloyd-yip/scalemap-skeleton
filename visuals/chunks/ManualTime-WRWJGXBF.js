"use client";
import {
  Big,
  Caption,
  Cursor,
  Ground,
  Lbl
} from "/scalemap-skeleton/visuals/chunks/chunk-I3XW4O5R.js";
import {
  Visual
} from "/scalemap-skeleton/visuals/chunks/chunk-CZOOTBVB.js";
import "/scalemap-skeleton/visuals/chunks/chunk-XZJUOAQS.js";
import {
  C,
  GROUND_TINT,
  SANS,
  __toESM,
  require_jsx_runtime
} from "/scalemap-skeleton/visuals/chunks/chunk-2I5PAATC.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.uqsJpFb5oI/components/visuals/problems/ManualTime.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 9e3;
var FREEZE = 0.7;
var CX = 800;
var CY = 380;
var R = 200;
function Scene({ t }) {
  const filled = Math.max(1, Math.min(12, Math.floor(t * 12) + 1));
  const click = t * 6 % 1;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ground, { tint: GROUND_TINT["manual-time"] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: CX - R,
          top: CY - R,
          width: R * 2,
          height: R * 2,
          borderRadius: "50%",
          border: `18px solid ${C.white}`,
          boxShadow: "0 0 70px rgba(255,255,255,0.12), inset 0 0 50px rgba(0,0,0,0.5)"
        }
      }
    ),
    Array.from({ length: 12 }, (_, k) => {
      const a = k / 12 * Math.PI * 2;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            position: "absolute",
            left: CX + Math.cos(a) * (R - 44) - 7,
            top: CY + Math.sin(a) * (R - 44) - 7,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.5)"
          }
        },
        `tk${k}`
      );
    }),
    [
      [R - 84, 12, t * 360 * 9, C.amber],
      [R - 140, 16, t * 360 * 0.75, C.white]
    ].map((hd, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: CX,
          top: CY - hd[1] / 2,
          width: hd[0],
          height: hd[1],
          borderRadius: hd[1] / 2,
          background: hd[3],
          transformOrigin: "0 50%",
          transform: `rotate(${hd[2] - 90}deg)`
        }
      },
      `hand${k}`
    )),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: CX - 16,
          top: CY - 16,
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: C.white
        }
      }
    ),
    Array.from({ length: 3 }, (_, k) => {
      const rp = (t * 6 + k / 3) % 1;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            position: "absolute",
            left: 1150 - rp * 70,
            top: 470 - rp * 70,
            width: rp * 140,
            height: rp * 140,
            borderRadius: "50%",
            border: `4px solid rgba(242,179,61,${0.55 * (1 - rp)})`
          }
        },
        `rp${k}`
      );
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, { x: 1146, y: 462 + click * 14 }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          top: 690,
          display: "flex",
          justifyContent: "center",
          gap: 14
        },
        children: Array.from({ length: 12 }, (_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              width: 68,
              height: 58,
              borderRadius: 8,
              background: k < filled ? C.amber : "rgba(255,255,255,0.08)",
              boxShadow: k === filled - 1 ? "0 0 26px rgba(242,179,61,0.7)" : "none"
            }
          },
          `hb${k}`
        ))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          left: 150,
          top: 330,
          display: "flex",
          flexDirection: "column",
          gap: 12
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lbl, { size: 22, color: C.dimInk, children: "hours lost" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Big, { size: 150, color: C.amber, style: { fontFamily: SANS }, children: [
            filled,
            "h"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caption, { children: "done by hand, every week" })
  ] });
}
function ManualTime() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  ManualTime as default
};
