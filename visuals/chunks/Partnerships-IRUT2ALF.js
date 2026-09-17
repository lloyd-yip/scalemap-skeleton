"use client";
import {
  Av,
  ChannelCaption,
  Mono,
  Txt
} from "./chunk-ZZUCHOD4.js";
import {
  PEOPLE
} from "./chunk-XOU77S2L.js";
import {
  Slot
} from "./chunk-4SJJXYI3.js";
import {
  Visual
} from "./chunk-OFMDNVDX.js";
import {
  useIdentity
} from "./chunk-3S2JCU5X.js";
import {
  C,
  MONO,
  __toESM,
  require_jsx_runtime,
  sm
} from "./chunk-OW6SPI7U.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/channels/Partnerships.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 16e3;
var FREEZE = 0.34;
var X0 = 300;
var X1 = 1480;
var MID = [706, 890];
var YS = [252, 452, 652];
var byName = (n) => PEOPLE.find((p) => p.name === n)?.src ?? "";
var CHAINS = [
  ["Cedric", "Agency partner", 0.36, "stalled \xB7 3 weeks", "their retainer client"],
  ["Philipp", "Affiliate", 0.72, "waiting on the intro \xB7 6 weeks", "someone in their list"],
  ["Jason", "Integration partner", null, null, "their onboarding call"]
];
function Scene({ t }) {
  const id = useIdentity();
  const live = sm(0.12, 0.78, t);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 24% 14%, #0E1418 0%, #070A0C 62%)"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 56,
          top: 84,
          fontFamily: MONO,
          fontSize: 24,
          letterSpacing: "0.16em",
          color: "#5C6470"
        },
        children: "HOW A PARTNER DEAL ACTUALLY ARRIVES"
      }
    ),
    ["THEM", "THEIR CLIENT", null].map((s, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: [176, 706, 1352][k],
          top: 148,
          fontFamily: MONO,
          fontSize: 19,
          letterSpacing: "0.14em",
          color: "#454C55",
          textTransform: "uppercase"
        },
        children: s ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, { text: id.hasCompany ? id.company : "YOU", comfort: 12, maxWidth: 200, floor: 0.6 })
      },
      k
    )),
    CHAINS.map((c, i) => {
      const [name, role, stalledAt, stallLabel, midLabel] = c;
      const y = YS[i];
      const stalled = stalledAt != null;
      const prog = stalled ? stalledAt : live;
      const tokX = X0 + prog * (X1 - X0);
      const arrived = !stalled && live > 0.985;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: {
              position: "absolute",
              left: 70,
              top: y - 46,
              display: "flex",
              alignItems: "center",
              gap: 18
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Av, { src: byName(name), d: 92, style: { border: "3px solid rgba(255,255,255,0.16)" } }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 28, weight: 700, color: "#fff", children: name }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 17, color: "#6E7681", style: { marginTop: 6 }, children: role })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: X0,
              top: y - 2,
              width: X1 - X0,
              height: 4,
              borderRadius: 2,
              background: "repeating-linear-gradient(90deg, rgba(255,255,255,0.16) 0 12px, rgba(255,255,255,0) 12px 24px)"
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: X0,
              top: y - 3,
              width: tokX - X0,
              height: 6,
              borderRadius: 3,
              background: stalled ? "rgba(229,72,77,0.55)" : C.green,
              boxShadow: stalled ? "none" : "0 0 18px rgba(46,204,113,0.5)"
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: MID[0],
              top: y - 44,
              width: MID[1] - MID[0] + 84,
              height: 88,
              borderRadius: 12,
              border: "2px solid rgba(255,255,255,0.14)",
              background: "#0B1014",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 14px"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 17, color: "#7E858A", style: { textAlign: "center", whiteSpace: "normal", lineHeight: 1.3 }, children: midLabel })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: tokX - 16,
              top: y - 16,
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: stalled ? C.red : C.green,
              opacity: stalled ? 0.55 + 0.45 * Math.abs(Math.sin(t * Math.PI * 2 * 0.8 + i)) : 1,
              boxShadow: stalled ? "0 0 16px rgba(229,72,77,0.5)" : "0 0 22px rgba(46,204,113,0.7)"
            }
          }
        ),
        stalled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: tokX + 26,
              top: y - 52,
              fontFamily: MONO,
              fontSize: 19,
              letterSpacing: "0.06em",
              color: "rgba(255,150,150,0.9)"
            },
            children: stallLabel
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              position: "absolute",
              left: X1 + 10,
              top: y - 34,
              width: 54,
              height: 68,
              borderRadius: 10,
              border: `3px solid ${arrived ? C.green : "rgba(255,255,255,0.16)"}`,
              background: arrived ? "rgba(46,204,113,0.16)" : "transparent",
              boxShadow: arrived ? "0 0 30px rgba(46,204,113,0.45)" : "none"
            }
          }
        )
      ] }, name);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 300,
          top: 790,
          fontFamily: MONO,
          fontSize: 21,
          letterSpacing: "0.06em",
          color: "#5C6470"
        },
        children: "one of three completes \u2014 on their clock, in their quarter, for their reason"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelCaption, { children: "a cycle you don\u2019t set" })
  ] });
}
function Partnerships() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  Partnerships as default
};
