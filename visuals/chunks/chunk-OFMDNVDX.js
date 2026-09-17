import {
  STAGE_H,
  STAGE_W,
  __toESM,
  require_jsx_runtime,
  require_react
} from "./chunk-OW6SPI7U.js";

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/Stage.tsx
var import_react2 = __toESM(require_react());

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/useVisualClock.ts
var import_react = __toESM(require_react());
var STEP_MS = 42;
var raf = 0;
var last = 0;
var t0 = 0;
var now = 0;
var subs = /* @__PURE__ */ new Set();
function tick(ts) {
  raf = requestAnimationFrame(tick);
  if (ts - last < STEP_MS) return;
  last = ts;
  now = ts - t0;
  for (const s of subs) s();
}
function start() {
  if (raf) return;
  t0 = performance.now();
  last = 0;
  raf = requestAnimationFrame(tick);
}
function stop() {
  if (!raf) return;
  cancelAnimationFrame(raf);
  raf = 0;
}
function subscribe(fn) {
  subs.add(fn);
  if (subs.size === 1) start();
  return () => {
    subs.delete(fn);
    if (subs.size === 0) stop();
  };
}
var getSnapshot = () => now;
var noopSubscribe = () => () => {
};
var getZero = () => 0;
var getServerSnapshot = () => 0;
function useReducedMotion() {
  const [reduced, setReduced] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}
function useVisualClock(durationMs, freeze, active = true) {
  const reduced = useReducedMotion();
  const live = active && !reduced;
  const ms = (0, import_react.useSyncExternalStore)(
    live ? subscribe : noopSubscribe,
    live ? getSnapshot : getZero,
    getServerSnapshot
  );
  if (reduced) return freeze;
  return ms % durationMs / durationMs;
}

// ../../../../private/var/folders/qr/91qws8gs1w50j6wlj202tbnc0000gn/T/tmp.iE4usXHG8y/components/visuals/Stage.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
function Stage({
  children,
  onVisibility,
  className
}) {
  const body = (0, import_react2.useRef)(null);
  const [scale, setScale] = (0, import_react2.useState)(0);
  (0, import_react2.useEffect)(() => {
    const el = body.current;
    if (!el) return;
    const fit = () => {
      const w = el.clientWidth;
      if (w) setScale(w / STAGE_W);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) onVisibility?.(e.isIntersecting);
      },
      { rootMargin: "150px" }
    );
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, [onVisibility]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      ref: body,
      className,
      style: { width: "100%", aspectRatio: "16 / 9", overflow: "hidden", position: "relative" },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          style: {
            width: STAGE_W,
            height: STAGE_H,
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
            // Until the first measurement lands, scale is 0 and the stage would flash
            // at full 1600px width for one frame. Hiding it is cheaper than guessing.
            visibility: scale ? "visible" : "hidden"
          },
          children
        }
      )
    }
  );
}
function Visual({
  duration,
  freeze,
  children
}) {
  const [visible, setVisible] = (0, import_react2.useState)(true);
  const t = useVisualClock(duration, freeze, visible);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, { onVisibility: setVisible, children: children(t) });
}

export {
  Visual
};
