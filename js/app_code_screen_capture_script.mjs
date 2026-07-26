export function app_code_screen_capture_script() {
  "the browser-side capture, kept as a STRING on purpose: it runs inside the page via page.evaluate, so it must not be canonicalized (that would turn its operators into repo calls the page has never heard of). Returns overflow pixels, an empty flag, a title line, and the visible text WITH BUTTONS EXCLUDED - the answer buttons hold randomly sampled distractors that differ every render, so including them would make every quiz look changed on every crawl. Buttons are hidden only to read the text, then restored, so a later Next click still works. Overflow is measured before hiding, on the real layout";
  let script = [
    "(() => {",
    "  const de = document.documentElement;",
    "  const overflow = de.scrollWidth - de.clientWidth;",
    "  const buttons = [...document.querySelectorAll('button')];",
    "  const previous = buttons.map(b => b.style.display);",
    "  buttons.forEach(b => { b.style.display = 'none'; });",
    "  const raw = document.body.innerText;",
    "  buttons.forEach((b, i) => { b.style.display = previous[i]; });",
    "  const lines = raw.split('\\n').map(s => s.trim()).filter(Boolean);",
    "  const title = lines.find(l => l.includes(':') && !l.startsWith('Please')) || '';",
    "  const text = lines.join('\\n');",
    "  return { overflow, empty: text.length === 0, title, text };",
    "})()",
  ].join("\n");
  return script;
}
