"use client";
import {
  Av,
  Mono,
  Pill,
  Txt
} from "./chunk-ZZUCHOD4.js";
import {
  ME,
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
  SANS,
  __toESM,
  require_jsx_runtime,
  sm,
  sweep
} from "./chunk-OW6SPI7U.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/channels/ColdEmail.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 12e3;
var FREEZE = 0.7;
var RIGHT = 600;
var SHEILA = PEOPLE.find((p) => p.name === "Sheila")?.src ?? "";
var ROWS = [
  ["Step 1 \xB7 Day 1", "Quick question about ops hiring", "Noticed you\u2019re scaling the ops team \u2014 is the bottleneck\u2026", "1,200", "6", "Mar 4"],
  ["Step 2 \xB7 Day 3", "Re: Quick question about ops hiring", "Following up on the below \u2014 worth a short look?", "1,140", "3", "Mar 6"],
  ["Step 3 \xB7 Day 7", "One idea before I close the loop", "Two clients cut onboarding time by 40% doing this\u2026", "1,080", "1", "Mar 10"],
  ["Step 4 \xB7 Day 12", "Closing the loop", "Assuming the timing isn\u2019t right \u2014 I\u2019ll leave it here.", "1,020", "0", "Mar 15"]
];
var BODY = "Hi Sheila \u2014 noticed you\u2019re scaling the ops team. Two clients cut onboarding time 40% last quarter without new tooling. Worth fifteen minutes?";
function Scene({ t }) {
  const id = useIdentity();
  const typed = BODY.slice(0, Math.floor(sm(0.06, 0.62, t) * BODY.length));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", inset: 0, background: C.card } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          height: 96,
          background: C.mailRed,
          display: "flex",
          alignItems: "center",
          gap: 26,
          padding: "0 40px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: 7 }, children: [0, 1, 2].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 30, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.85)" } }, k)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 42, height: 32, borderRadius: 5, background: "#fff" } }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 30, weight: 700, color: "#fff", children: "Mail" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              style: {
                width: 720,
                height: 54,
                borderRadius: 27,
                background: "rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                padding: "0 24px"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 21, color: "rgba(255,255,255,0.92)", children: 'in:sent \xA0"ops hiring"' })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1 } }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Av, { src: ME, d: 44, style: { border: "2px solid rgba(255,255,255,0.7)" } })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "absolute", left: 40, top: 132, width: 250, display: "flex", flexDirection: "column", gap: 10 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            width: 180,
            height: 58,
            borderRadius: 29,
            background: C.card,
            border: `1px solid ${C.line}`,
            boxShadow: "0 1px 5px rgba(20,22,26,0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 14
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 23, weight: 600, color: C.ink, children: "Compose" })
        }
      ),
      [
        ["Inbox", "2"],
        ["Starred", ""],
        ["Sent", "4,440"],
        ["Drafts", "1"]
      ].map(([label, count]) => {
        const active = label === "Sent";
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 52,
              borderRadius: 26,
              padding: "0 22px",
              background: active ? "#FCE8E6" : "transparent"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 23, weight: active ? 700 : 500, color: active ? C.mailRedDeep : C.sub, children: label }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 19, color: active ? C.mailRedDeep : "#8A9099", children: count })
            ]
          },
          label
        );
      })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          left: 330,
          top: 132,
          right: RIGHT,
          display: "flex",
          alignItems: "center",
          height: 44,
          padding: "0 20px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 20, color: "#8A9099", children: 'SENT \xB7 "OPS HIRING"' }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1 } }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 90, textAlign: "right" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 20, color: "#8A9099", style: { textAlign: "right" }, children: "SENT" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 90, textAlign: "right" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 20, color: "#8A9099", style: { textAlign: "right" }, children: "REPLIES" }) })
        ]
      }
    ),
    ROWS.map((r, i) => {
      const a = sweep(t, i, ROWS.length);
      const zero = r[4] === "0";
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          style: {
            position: "absolute",
            left: 330,
            right: RIGHT,
            top: 192 + i * 118,
            height: 108,
            borderTop: `1px solid ${C.line}`,
            background: a > 0.4 ? "#FDF7F6" : "transparent",
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "0 20px",
            boxShadow: a > 0.4 ? `inset 4px 0 0 ${C.mailRed}` : "none"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Av, { src: PEOPLE[i].src, d: 52 }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 23, weight: 700, color: C.ink, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: r[1] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 10, alignItems: "baseline", minWidth: 0, marginTop: 6 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 16, color: "#8A9099", style: { flex: "none" }, children: r[0] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 19, weight: 400, color: C.sub, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: r[2] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 25, weight: 700, color: C.ink, style: { width: 90, textAlign: "right", flex: "none" }, children: r[3] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              Txt,
              {
                size: 29,
                weight: 800,
                color: zero ? C.red : C.sub,
                style: {
                  width: 90,
                  textAlign: "right",
                  flex: "none",
                  textShadow: zero && a > 0.4 ? "0 0 22px rgba(229,72,77,0.35)" : "none"
                },
                children: r[4]
              }
            )
          ]
        },
        r[0]
      );
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          left: 330,
          top: 696,
          display: "flex",
          gap: 40,
          borderTop: `2px solid ${C.line}`,
          paddingTop: 22,
          width: 1600 - 330 - RIGHT
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 23, color: C.sub, children: "4,440 SENT" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 23, color: C.sub, children: "10 REPLIES" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 23, color: C.red, children: "1 CALL BOOKED" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          right: 48,
          bottom: 48,
          width: 520,
          background: C.card,
          borderRadius: "12px 12px 0 0",
          boxShadow: "0 -2px 44px rgba(20,22,26,0.38)",
          overflow: "hidden",
          border: `1px solid ${C.line}`
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              style: {
                height: 58,
                background: "#404346",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 22px"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 22, weight: 600, color: "#fff", children: "New Message" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: 16 }, children: [0, 1, 2].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: 16, height: 3, background: "rgba(255,255,255,0.75)", marginTop: 10 } }, k)) })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "16px 20px 12px", borderBottom: `1px solid ${C.line}`, display: "flex", gap: 12, alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 19, color: "#8A9099", children: "To" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 10, background: "#F1F3F4", borderRadius: 18, padding: "5px 14px 5px 5px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Av, { src: SHEILA, d: 28 }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontFamily: SANS, fontSize: 19, fontWeight: 500, color: C.ink }, children: "sheila@northfield-ops.com" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "10px 20px", borderBottom: `1px solid ${C.line}`, display: "flex", gap: 12, alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 19, color: "#8A9099", children: "From" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontFamily: SANS, fontSize: 19, fontWeight: 500, color: C.sub }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, { text: id.email, comfort: 30, maxWidth: 400, floor: 0.7 }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { padding: "14px 20px", borderBottom: `1px solid ${C.line}` }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 21, weight: 600, color: C.ink, children: "Quick question about ops hiring" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "18px 20px", height: 168, fontFamily: SANS, fontSize: 21, lineHeight: 1.45, color: C.ink, overflow: "hidden" }, children: [
            typed,
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { color: C.mailRed, opacity: Math.sin(t * Math.PI * 2 * 12) > 0 ? 1 : 0 }, children: "\u2582" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "0 20px 20px", display: "flex", alignItems: "center", gap: 18 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { w: 120, h: 48, bg: C.mailBlue, color: "#fff", style: { fontSize: 21, fontWeight: 700 }, children: "Send" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1 } }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 18, color: "#8A9099", children: "draft 4 of 4" })
          ] })
        ]
      }
    )
  ] });
}
function ColdEmail() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  ColdEmail as default
};
