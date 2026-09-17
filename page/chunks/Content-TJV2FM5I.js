"use client";
import {
  Av,
  Card,
  Mono,
  Txt
} from "/scalemap-skeleton/page/chunks/chunk-YPZZ2EMM.js";
import {
  ME,
  SCOTT
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
  SANS,
  __toESM,
  require_jsx_runtime
} from "/scalemap-skeleton/page/chunks/chunk-WSQPCPXE.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.LUsAYrNG0t/components/visuals/channels/Content.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 22e3;
var FREEZE = 0.3;
var H = 600;
var POSTS = [
  ["How we cut onboarding time 40%", "2,104 views \xB7 2 weeks ago", ME, "12:04"],
  ["The ops hire nobody makes first", "861 views \xB7 5 weeks ago", SCOTT, "8:37"],
  ["Episode 34 \u2014 scaling without SDRs", "340 plays \xB7 8 weeks ago", null, "41:22"]
];
function Scene({ t }) {
  const id = useIdentity();
  const total = POSTS.length * H;
  const scroll = t * total % total;
  const who = id.hasPerson || id.hasCompany ? id.person : "You";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", inset: 0, background: C.page } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 70, top: 40, width: 980, height: 820, overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 0, top: 0, width: 980 }, children: POSTS.map(([title, meta, thumb, dur], i) => {
      const y = ((i * H - scroll) % total + total) % total - H;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          style: {
            position: "absolute",
            left: 0,
            top: y,
            width: 980,
            background: C.card,
            border: `1px solid ${C.line}`,
            borderRadius: 16,
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "22px 26px", display: "flex", alignItems: "center", gap: 16 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Av, { src: ME, d: 54 }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { minWidth: 0 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontFamily: SANS, fontSize: 23, fontWeight: 700, color: C.ink }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, { text: who, comfort: 20, maxWidth: 520 }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 18, color: "#8A9099", style: { marginTop: 4 }, children: meta })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "relative", width: "100%", height: 360, background: "#12161A" }, children: [
              thumb ? (
                // eslint-disable-next-line @next/next/no-img-element
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "img",
                  {
                    src: thumb,
                    alt: "",
                    style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
                  }
                )
              ) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg,#17222A,#0E1418)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 14,
                    padding: "0 48px"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 19, color: "rgba(255,255,255,0.5)", children: "THE OPS ROOM \xB7 PODCAST" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 88, weight: 900, color: "#fff", style: { letterSpacing: "-0.03em", lineHeight: 0.92 }, children: "EP 34" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 30, weight: 600, color: "rgba(255,255,255,0.78)", children: "Scaling without SDRs" })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: 96,
                    height: 96,
                    marginLeft: -48,
                    marginTop: -48,
                    borderRadius: "50%",
                    background: "rgba(8,10,12,0.55)",
                    border: "3px solid rgba(255,255,255,0.8)"
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    right: 18,
                    bottom: 16,
                    background: "rgba(8,10,12,0.78)",
                    borderRadius: 6,
                    padding: "6px 12px"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 19, color: "#fff", children: dur })
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "22px 26px", display: "flex", alignItems: "center", gap: 20 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 27, weight: 700, color: C.ink, children: title }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  style: {
                    height: 42,
                    borderRadius: 21,
                    background: i === 0 ? "#EDEFEA" : "#FDECEC",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 20px"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 19, color: i === 0 ? C.sub : C.red, children: i === 0 ? "1 call booked" : "0 calls booked" })
                }
              )
            ] })
          ]
        },
        title
      );
    }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 60,
          top: 0,
          width: 1e3,
          height: 60,
          background: `linear-gradient(${C.page}, rgba(241,240,236,0))`,
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 60,
          bottom: 0,
          width: 1e3,
          height: 70,
          background: `linear-gradient(rgba(241,240,236,0), ${C.page})`,
          pointerEvents: "none"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { style: { left: 1120, top: 150, width: 410 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "28px 30px", borderBottom: `1px solid ${C.line}` }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 18, color: "#8A9099", children: "IMPRESSIONS \xB7 90D" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 66, weight: 800, color: C.ink, style: { marginTop: 10, letterSpacing: "-0.02em" }, children: "8,412" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "28px 30px", borderBottom: `1px solid ${C.line}` }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 18, color: "#8A9099", children: "FOLLOWERS" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 46, weight: 800, color: C.ink, style: { marginTop: 8 }, children: "1,046" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "28px 30px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 18, color: "#8A9099", children: "CALLS BOOKED" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          Txt,
          {
            size: 66,
            weight: 900,
            color: C.red,
            style: {
              marginTop: 10,
              textShadow: `0 0 ${8 + 16 * Math.abs(Math.sin(t * Math.PI * 2 * 2))}px rgba(229,72,77,0.4)`
            },
            children: "1"
          }
        )
      ] })
    ] })
  ] });
}
function Content() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  Content as default
};
