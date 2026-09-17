"use client";
import {
  ME,
  PEOPLE
} from "/scalemap-skeleton/page/chunks/chunk-2D4JJCYY.js";
import {
  Slot
} from "/scalemap-skeleton/page/chunks/chunk-P7DNM2BD.js";
import {
  Visual
} from "/scalemap-skeleton/page/chunks/chunk-BGP3GMJL.js";
import {
  useIdentity
} from "/scalemap-skeleton/page/chunks/chunk-NRH7PXTB.js";
import {
  C,
  MONO,
  __toESM,
  require_jsx_runtime
} from "/scalemap-skeleton/page/chunks/chunk-WSQPCPXE.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.LUsAYrNG0t/components/visuals/channels/Referrals.tsx
var import_jsx_runtime = (
  // eslint-disable-next-line @next/next/no-img-element -- fixed-size decorative
  // stage element inside a transform-scaled 1600x900 scene; next/image's layout
  // machinery fights the scale and buys nothing for an asset this size.
  __toESM(require_jsx_runtime())
);
var DURATION = 18e3;
var FREEZE = 0.52;
var cx = 800;
var cy = 430;
function Avatar({ src, d, style }) {
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
function Scene({ t }) {
  const id = useIdentity();
  const N = PEOPLE.length;
  const rot = t * Math.PI * 2 * 0.14;
  const centreLabel = id.hasPerson ? id.person : "YOU";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 48%, #13201A 0%, #0B100D 30%, #050706 52%, #000 78%)"
        }
      }
    ),
    Array.from({ length: 16 }, (_, k) => {
      const a = k / 16 * Math.PI * 2 + t * 0.4;
      const r = 470 + k % 3 * 75;
      const x = cx + Math.cos(a) * r * 1.45;
      const y = cy + Math.sin(a) * r * 0.92;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            position: "absolute",
            left: x - 44,
            top: y - 44,
            width: 88,
            height: 88,
            borderRadius: "50%",
            border: "2px dashed rgba(255,255,255,0.09)",
            background: "rgba(255,255,255,0.012)"
          }
        },
        `gh${k}`
      );
    }),
    PEOPLE.map((p, i) => {
      const a = rot + i / N * Math.PI * 2;
      const x = cx + Math.cos(a) * 268;
      const y = cy + Math.sin(a) * 250;
      const pulse = 0.35 + 0.65 * Math.max(0, Math.sin(t * Math.PI * 2 * 1.5 - i * 0.8));
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: cx,
              top: cy,
              width: 260,
              height: 2,
              transformOrigin: "0 50%",
              transform: `rotate(${a * 180 / Math.PI}deg)`,
              background: `linear-gradient(90deg, rgba(46,204,113,${0.12 + 0.3 * pulse}), rgba(46,204,113,0.06))`
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: {
              position: "absolute",
              left: x - 64,
              top: y - 64,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Avatar,
                {
                  src: p.src,
                  d: 128,
                  style: {
                    border: `4px solid rgba(46,204,113,${0.35 + 0.45 * pulse})`,
                    boxShadow: `0 0 30px rgba(46,204,113,${0.1 + 0.2 * pulse})`
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontFamily: MONO, fontSize: 20, letterSpacing: "0.06em", color: "rgba(255,255,255,0.72)" }, children: p.name })
            ]
          }
        )
      ] }, `p${i}`);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          left: cx - 90,
          top: cy - 104,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
          width: 180
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Avatar,
            {
              src: ME,
              d: 180,
              style: { border: `5px solid ${C.green}`, boxShadow: "0 0 60px rgba(46,204,113,0.35)" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontFamily: MONO, fontSize: 24, letterSpacing: "0.2em", color: "#fff", textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, { text: centreLabel, comfort: 9, maxWidth: 230, floor: 0.55 }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 64% 72% at 50% 48%, rgba(0,0,0,0) 46%, rgba(0,0,0,0.78) 66%, #000 86%)",
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
          bottom: 44,
          fontFamily: MONO,
          fontSize: 26,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)"
        },
        children: "past them, it goes dark"
      }
    )
  ] });
}
function Referrals() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  Referrals as default
};
