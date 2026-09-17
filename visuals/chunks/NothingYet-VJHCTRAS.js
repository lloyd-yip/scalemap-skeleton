"use client";
import {
  ChannelCaption
} from "/scalemap-skeleton/visuals/chunks/chunk-KE47FXAC.js";
import {
  Visual
} from "/scalemap-skeleton/visuals/chunks/chunk-CZOOTBVB.js";
import {
  MONO,
  __toESM,
  require_jsx_runtime
} from "/scalemap-skeleton/visuals/chunks/chunk-2I5PAATC.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.uqsJpFb5oI/components/visuals/channels/NothingYet.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DURATION = 6e3;
var FREEZE = 0.6;
function Scene({ t }) {
  const blink = Math.sin(t * Math.PI * 2 * 2) > 0 ? 1 : 0.05;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", inset: 0, background: "#070809" } }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(#15191B 1.5px, transparent 1.5px)",
          backgroundSize: "60px 60px",
          opacity: 0.55
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 290,
          top: 260,
          width: 1020,
          height: 380,
          borderRadius: 20,
          border: "3px dashed #1F2428"
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: { position: "absolute", left: 352, top: 408, width: 5, height: 76, background: "#575E64", opacity: blink }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          left: 384,
          top: 420,
          fontFamily: MONO,
          fontSize: 40,
          letterSpacing: "0.04em",
          color: "#363C41"
        },
        children: "no channel runs itself yet"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChannelCaption, { color: "rgba(255,255,255,0.38)", children: "an absence, rendered deliberately" })
  ] });
}
function NothingYet() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { duration: DURATION, freeze: FREEZE, children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { t }) });
}
export {
  NothingYet as default
};
