/*
 * Scale Map skeleton — the small amount of behaviour a static mockup needs to
 * be reactable: the pickers tick, the buttons advance, the rail tracks.
 *
 * There is deliberately no state here beyond the DOM, no fetch, and no
 * generation. Nothing on scene 3 responds to what is ticked on scene 2 — the
 * diagnosis copy is hand-written placeholder prose for one fixed prospect.
 */

/* The option lists are copied verbatim from lib/selection.ts on branch
   lloyd/diagnosis. Labels are the prospect's words and must not be reworded
   here — in the real app the same strings reach both the checkbox and the
   model, so a divergence in the mockup would quietly design the wrong thing. */
const CHANNELS = [
  { key: 'referrals',    label: 'Referrals and word of mouth' },
  { key: 'linkedin',     label: 'LinkedIn' },
  { key: 'cold_email',   label: 'Cold email' },
  { key: 'paid_ads',     label: 'Paid ads' },
  { key: 'content',      label: 'Content — video, podcast, newsletter' },
  { key: 'events',       label: 'Events and speaking' },
  { key: 'partnerships', label: 'Partnerships and affiliates' },
  { key: 'nothing',      label: 'Nothing consistent yet' },
];

const PROBLEMS = [
  { key: 'volume',        label: 'Not enough leads' },
  { key: 'quality',       label: 'The leads I get are the wrong people' },
  { key: 'manual',        label: "It's all manual and eats my time" },
  { key: 'unpredictable', label: "It swings — I can't predict it" },
  { key: 'expensive',     label: 'It costs too much for what it returns' },
];

/* The example prospect's invented selection. Two channels ⇒ `hedged`, which is
   the version most visitors will get and therefore the one worth mocking. */
const PRESET = {
  channels: ['referrals', 'events'],
  problems: ['unpredictable', 'volume', 'manual'],
};

const SCENES = [
  { id: 's1', name: 'Open' },
  { id: 's2', name: 'Ask' },
  { id: 's3', name: 'Diagnosis' },
  { id: 's4', name: 'Proof' },
  { id: 's5', name: 'CTA' },
];

/* ── pickers ──────────────────────────────────────────────────────── */

function renderPicker(host, options, preset) {
  host.innerHTML = '';
  for (const o of options) {
    const on = preset.includes(o.key);

    const label = document.createElement('label');
    label.className = 'opt';
    label.dataset.on = String(on);

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = on;
    input.value = o.key;

    const box = document.createElement('span');
    box.className = 'box';
    box.setAttribute('aria-hidden', 'true');
    box.textContent = on ? '✓' : '';

    const text = document.createElement('span');
    text.textContent = o.label;

    input.addEventListener('change', () => {
      label.dataset.on = String(input.checked);
      box.textContent = input.checked ? '✓' : '';
    });

    label.append(input, box, text);
    host.append(label);
  }
}

renderPicker(document.querySelector('[data-picker="channels"]'), CHANNELS, PRESET.channels);
renderPicker(document.querySelector('[data-picker="problems"]'), PROBLEMS, PRESET.problems);

/* ── scene navigation ─────────────────────────────────────────────── */

const snap = document.getElementById('snap');
const dots = document.getElementById('dots');
const railLabel = document.getElementById('railLabel');

SCENES.forEach((s, i) => {
  const b = document.createElement('button');
  b.className = 'dot';
  b.type = 'button';
  b.setAttribute('aria-label', `Go to scene ${i + 1}: ${s.name}`);
  b.addEventListener('click', () => {
    document.getElementById(s.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  dots.append(b);
});

for (const btn of document.querySelectorAll('[data-go]')) {
  btn.addEventListener('click', () => {
    document.querySelector(btn.dataset.go)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function setActive(i) {
  const kids = dots.children;
  for (let n = 0; n < kids.length; n++) {
    kids[n].setAttribute('aria-current', String(n === i));
  }
  railLabel.textContent = `${i + 1} / ${SCENES.length} · ${SCENES[i].name}`;
}
setActive(0);

/* Which scene is active drives the rail. Threshold is 0.5 rather than a
   scroll-position calculation so it stays correct when a tall scene (3) is
   longer than the viewport and never fully intersects. */
const active = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      const i = SCENES.findIndex((s) => s.id === e.target.id);
      if (i >= 0) setActive(i);
    }
  }
}, { root: snap, threshold: 0.5 });

/* Reveal-on-enter. Separate observer with a low threshold: the point is to fire
   as soon as any of the element is on screen, which is a different question
   from which scene is active. */
const reveal = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      reveal.unobserve(e.target);
    }
  }
}, { root: snap, threshold: 0.08 });

for (const s of SCENES) active.observe(document.getElementById(s.id));
for (const r of document.querySelectorAll('.rise')) reveal.observe(r);

/* Scene 1 is above the fold at load, and an observer on a already-visible
   element can fire a frame late — long enough to see the page pop. */
requestAnimationFrame(() => {
  for (const r of document.querySelectorAll('#s1 .rise')) r.classList.add('in');
});
