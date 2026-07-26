export function app_code_screen_capture_script() {
  "the browser-side capture, kept as a STRING on purpose: it runs inside the page via page.evaluate, so it must not be canonicalized (that would turn its operators into repo calls the page has never heard of). Returns overflow pixels, empty flag, a title line, and the collapsed visible text";
  let script = [
    "(() => {",
    "  const de = document.documentElement;",
    "  const overflow = de.scrollWidth - de.clientWidth;",
    "  const lines = document.body.innerText.split('\\n').map(s => s.trim()).filter(Boolean);",
    "  const title = lines.find(l => l.includes(':') && !l.startsWith('Please')) || '';",
    "  const text = lines.join('\\n');",
    "  return { overflow, empty: text.length === 0, title, text };",
    "})()",
  ].join("\n");
  return script;
}
