"use client";
import {
  Card,
  Mono,
  Pill,
  Txt
} from "/scalemap-skeleton/visuals/chunks/chunk-IPEKD3IY.js";
import {
  Visual
} from "/scalemap-skeleton/visuals/chunks/chunk-HXNXTKDP.js";
import {
  C,
  __toESM,
  require_jsx_runtime,
  sweep
} from "/scalemap-skeleton/visuals/chunks/chunk-APJWEUBL.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.ZvOiU35XK0/components/visuals/channels/PaidAds.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 9e3;
var FREEZE = 0.55;
var ROWS = [
  ["Cold \u2014 Lookalike 1%", "Active", "14", "$344", "$4,820"],
  ["Retargeting \u2014 Site 30d", "Active", "8", "$268", "$2,140"],
  ["Broad \u2014 Interest stack", "Learning", "3", "$1,320", "$3,960"]
];
function Scene({ t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", inset: 0, background: "#F0F2F5" } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          height: 100,
          background: C.card,
          borderBottom: `1px solid ${C.line}`,
          display: "flex",
          alignItems: "center",
          gap: 38,
          padding: "0 44px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "baseline", gap: 14, marginRight: 14 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 34, weight: 800, color: C.metaBlue, style: { letterSpacing: "-0.02em" }, children: "Meta" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 18, color: "#8A9099", children: "ADS MANAGER" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 1, height: 44, background: C.line } }),
          ["Campaigns", "Ad sets", "Ads"].map((s, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                alignSelf: "stretch",
                display: "flex",
                alignItems: "center",
                borderBottom: k === 0 ? `4px solid ${C.metaBlue}` : "4px solid transparent"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 25, weight: k === 0 ? 700 : 500, color: k === 0 ? C.metaBlue : C.sub, children: s })
            },
            s
          )),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1 } }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { w: 150, h: 50, bg: C.metaBlue, color: "#fff", style: { fontSize: 22, fontWeight: 700 }, children: "+ Create" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 44, top: 128, display: "flex", gap: 14 }, children: ["Last 30 days", "All campaigns", "Objective: Leads"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          height: 46,
          borderRadius: 10,
          border: `1px solid ${C.line}`,
          background: C.card,
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          whiteSpace: "nowrap"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 19, color: C.sub, children: s })
      },
      s
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { style: { left: 44, top: 200, right: 44, width: "auto" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            height: 66,
            borderBottom: `1px solid ${C.line}`,
            padding: "0 26px",
            background: "#F7F8FA"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 86 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 17, color: "#8A9099", children: "ON" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 17, color: "#8A9099", children: "CAMPAIGN" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 190 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 17, color: "#8A9099", children: "DELIVERY" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 170, textAlign: "right" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 17, color: "#8A9099", style: { textAlign: "right" }, children: "CALLS BOOKED" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 200, textAlign: "right" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 17, color: "#8A9099", style: { textAlign: "right" }, children: "COST / CALL" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 180, textAlign: "right" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 17, color: "#8A9099", style: { textAlign: "right" }, children: "SPENT" }) })
          ]
        }
      ),
      ROWS.map((r, i) => {
        const a = sweep(t, i, ROWS.length);
        const hot = r[3] === "$1,320";
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              height: 104,
              borderBottom: `1px solid ${C.line}`,
              padding: "0 26px",
              background: a > 0.4 ? "#F5F8FD" : C.card
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 86 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "div",
                {
                  style: {
                    width: 58,
                    height: 30,
                    borderRadius: 15,
                    background: C.green,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: 3
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 24, height: 24, borderRadius: "50%", background: "#fff" } })
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: 1 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 25, weight: 600, color: C.metaBlue, children: r[0] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 17, color: "#8A9099", style: { marginTop: 6 }, children: "Leads \xB7 Manual bidding" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { width: 190, display: "flex", alignItems: "center", gap: 10 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "div",
                  {
                    style: {
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: r[1] === "Active" ? C.green : C.amber
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 21, weight: 500, color: C.sub, children: r[1] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 27, weight: 700, color: C.ink, style: { width: 170, textAlign: "right" }, children: r[2] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                Txt,
                {
                  size: 27,
                  weight: 800,
                  color: hot ? C.red : C.ink,
                  style: {
                    width: 200,
                    textAlign: "right",
                    textShadow: hot && a > 0.4 ? "0 0 22px rgba(229,72,77,0.3)" : "none"
                  },
                  children: r[3]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 27, weight: 700, color: C.ink, style: { width: 180, textAlign: "right" }, children: r[4] })
            ]
          },
          r[0]
        );
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", height: 92, padding: "0 26px", background: "#F7F8FA" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 23, weight: 700, color: C.ink, children: "Results from 3 campaigns" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 27, weight: 800, color: C.ink, style: { width: 170, textAlign: "right" }, children: "25" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 30, weight: 900, color: C.red, style: { width: 200, textAlign: "right" }, children: "$437" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 27, weight: 800, color: C.ink, style: { width: 180, textAlign: "right" }, children: "$10,920" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "absolute", left: 44, bottom: 34, display: "flex", gap: 40 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 21, color: C.sub, children: "SPEND \u2191 214% VS PRIOR 30D" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 21, color: C.red, children: "COST / CALL \u2191 168%" })
    ] })
  ] });
}
function PaidAds() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  PaidAds as default
};
