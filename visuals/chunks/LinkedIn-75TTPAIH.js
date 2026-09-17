"use client";
import {
  Av,
  Card,
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
  MONO,
  SANS,
  __toESM,
  require_jsx_runtime,
  sm
} from "./chunk-OW6SPI7U.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/channels/LinkedInDm.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var SHEILA = PEOPLE.find((p) => p.name === "Sheila")?.src ?? "";
function LinkedInDm({
  t,
  typed,
  sent,
  wait
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { style: { left: 1186, top: 124, width: 368 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          padding: "20px 24px",
          borderBottom: `1px solid ${C.line}`,
          display: "flex",
          alignItems: "center",
          gap: 14
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Av, { src: SHEILA, d: 52 }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 24, weight: 700, color: C.ink, children: "Sheila R." }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Txt, { size: 18, weight: 400, color: C.sub, style: { marginTop: 2 }, children: "VP Operations \xB7 2nd" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          padding: 24,
          minHeight: 270,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 14
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              style: {
                maxWidth: 330,
                background: C.blue,
                color: "#fff",
                borderRadius: "18px 18px 6px 18px",
                padding: "18px 20px",
                fontFamily: SANS,
                fontSize: 22,
                lineHeight: 1.4,
                opacity: 0.35 + 0.65 * Math.min(1, typed.length / 10 + sent)
              },
              children: [
                typed,
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { opacity: sent > 0.1 ? 0 : Math.sin(t * Math.PI * 2 * 12) > 0 ? 1 : 0 }, children: "\u2582" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mono, { size: 18, color: "#8A9099", children: sent > 0.5 ? "Sent" : "" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 12, opacity: wait }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "div",
              {
                style: {
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: C.red,
                  opacity: 0.55 + 0.45 * Math.abs(Math.sin(t * Math.PI * 2))
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontFamily: MONO, fontSize: 20, letterSpacing: "0.06em", color: C.red }, children: "4 days \xB7 no reply" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          borderTop: `1px solid ${C.line}`,
          padding: "18px 24px",
          display: "flex",
          gap: 14,
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { flex: 1, height: 46, borderRadius: 23, background: "#EDEDEA" } }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Pill,
            {
              w: 96,
              h: 46,
              bg: sent > 0.5 ? "#E9E8E4" : C.blue,
              color: sent > 0.5 ? "#9A9FA7" : "#fff",
              style: { fontSize: 21 },
              children: "Send"
            }
          )
        ]
      }
    )
  ] });
}

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/channels/LinkedInPost.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function LinkedInPost({ who, headline }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Card, { style: { left: 446, top: 244, width: 700 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { padding: "24px 26px 0", display: "flex", gap: 16, alignItems: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Av, { src: ME, d: 62 }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { minWidth: 0 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { fontFamily: SANS, fontSize: 25, fontWeight: 700, color: C.ink }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Slot, { text: who, comfort: 18, maxWidth: 420 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { fontFamily: SANS, fontSize: 19, fontWeight: 400, color: C.sub, marginTop: 3 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Slot, { text: `${headline} \xB7 3d`, comfort: 42, maxWidth: 440, floor: 0.72 }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { padding: "20px 26px 6px", fontFamily: SANS, fontSize: 25, lineHeight: 1.45, color: C.ink }, children: "Three things we fixed in a 40-person ops team last quarter \u2014 and the one that mattered most had nothing to do with tooling." }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        style: {
          marginTop: 16,
          height: 218,
          background: "#16232B",
          padding: "26px 30px",
          display: "flex",
          alignItems: "center",
          gap: 34
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { flex: "none" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { fontFamily: SANS, fontSize: 82, fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 0.92 }, children: "40%" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Mono, { size: 17, color: "rgba(255,255,255,0.62)", style: { marginTop: 8 }, children: "ONBOARDING TIME CUT" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 16 }, children: [
            ["Handoff steps", "78%"],
            ["Tool switches", "52%"],
            ["Manual checks", "34%"]
          ].map(([l, w]) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 16 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { width: 190 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Mono, { size: 17, color: "rgba(255,255,255,0.7)", children: l }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { flex: 1, height: 16, borderRadius: 8, background: "rgba(255,255,255,0.1)", overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { width: w, height: "100%", borderRadius: 8, background: C.green } }) })
          ] }, l)) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        style: {
          padding: "16px 26px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderBottom: `1px solid ${C.line}`
        },
        children: [
          PEOPLE.slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Av, { src: p.src, d: 30, style: { border: "2px solid #fff", marginRight: -10 } }, p.name)),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Txt, { size: 20, weight: 600, color: C.sub, style: { marginLeft: 18 }, children: "3" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Txt, { size: 20, weight: 400, color: C.sub, children: "\xB7 1 comment" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { padding: "16px 26px 20px", display: "flex", gap: 34 }, children: ["Like", "Comment", "Repost", "Send"].map((a) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Txt, { size: 21, weight: 600, color: C.sub, children: a }, a)) })
  ] });
}

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/channels/LinkedIn.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var DURATION = 11e3;
var FREEZE = 0.72;
function Scene({ t }) {
  const id = useIdentity();
  const msg = "Hi Sheila \u2014 saw your note on ops hiring. Quick question about how you\u2019re handling it?";
  const typed = msg.slice(0, Math.floor(sm(0.02, 0.2, t) * msg.length));
  const sent = sm(0.22, 0.3, t);
  const wait = sm(0.36, 0.44, t);
  const who = id.hasPerson || id.hasCompany ? id.person : "You";
  const headline = id.hasCompany ? `Founder \xB7 ${id.company}` : "Founder \xB7 ops consulting for mid-market";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { position: "absolute", inset: 0, background: C.page } }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          height: 86,
          background: C.card,
          borderBottom: `1px solid ${C.line}`,
          display: "flex",
          alignItems: "center",
          gap: 26,
          padding: "0 46px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { width: 46, height: 46, borderRadius: 10, background: C.blue, flex: "none" } }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "div",
            {
              style: {
                width: 380,
                height: 50,
                borderRadius: 8,
                background: "#EDEDEA",
                display: "flex",
                alignItems: "center",
                padding: "0 18px"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Mono, { size: 20, color: "#8A9099", children: "search" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { flex: 1 } }),
          [0, 1, 2, 3].map((k) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { width: 34, height: 34, borderRadius: 8, background: "#E4E4E0" } }, k)),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Av, { src: ME, d: 40 })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Card, { style: { left: 46, top: 124, width: 360 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { height: 78, background: "linear-gradient(120deg,#25343F,#3C5262)" } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "div",
        {
          style: {
            padding: "0 26px 26px",
            marginTop: -52,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Av, { src: ME, d: 104, style: { border: "4px solid #fff" } }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontFamily: SANS, fontSize: 30, fontWeight: 700, color: C.ink, maxWidth: 300, textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Slot, { text: who, comfort: 16, maxWidth: 300 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontFamily: SANS, fontSize: 20, fontWeight: 400, color: C.sub, textAlign: "center", maxWidth: 308 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Slot, { text: headline, comfort: 36, maxWidth: 308, floor: 0.7 }) })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { height: 1, background: C.line } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { padding: "20px 26px", display: "flex", flexDirection: "column", gap: 14 }, children: [
        ["Profile viewers", "41"],
        ["Post impressions", "812"]
      ].map(([l, v]) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Txt, { size: 20, weight: 500, color: C.sub, children: l }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Txt, { size: 20, weight: 700, color: C.blue, children: v })
      ] }, l)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Card, { style: { left: 446, top: 124, width: 700 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { padding: 22, display: "flex", alignItems: "center", gap: 18 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Av, { src: ME, d: 56 }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "div",
        {
          style: {
            flex: 1,
            height: 56,
            borderRadius: 28,
            border: `1px solid ${C.line}`,
            display: "flex",
            alignItems: "center",
            padding: "0 24px"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Txt, { size: 24, weight: 500, color: C.sub, children: "Start a post" })
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LinkedInPost, { who, headline }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LinkedInDm, { t, typed, sent, wait })
  ] });
}
function LinkedIn() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Scene, { t }) });
}
export {
  LinkedIn as default
};
