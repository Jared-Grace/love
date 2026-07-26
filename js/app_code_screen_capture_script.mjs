export function app_code_screen_capture_script() {
  "the browser-side capture, kept as a STRING on purpose: it runs inside the page via page.evaluate, so it must not be canonicalized (that would turn its operators into repo calls the page has never heard of). Walks the DOM collecting text but SKIPPING every button subtree - the answer buttons hold randomly sampled distractors that differ every render, and a global stylesheet forces button display with !important so an inline display:none cannot hide them; skipping the subtree sidesteps that entirely. Returns overflow pixels, an empty flag, a title line, and the collapsed non-button text";
  let script = [
    "(() => {",
    "  const de = document.documentElement;",
    "  const overflow = de.scrollWidth - de.clientWidth;",
    "  function collect(node, out) {",
    "    node.childNodes.forEach(child => {",
    "      if (child.nodeType === 3) { out.push(child.textContent); }",
    "      else if (child.nodeType === 1 && child.tagName !== 'BUTTON') { out.push('\\n'); collect(child, out); }",
    "    });",
    "  }",
    "  const out = [];",
    "  collect(document.body, out);",
    "  const lines = out.join('').split('\\n').map(s => s.trim()).filter(Boolean);",
    "  const title = lines.find(l => l.includes(':') && !l.startsWith('Please')) || '';",
    "  const text = lines.join('\\n');",
    "  return { overflow, empty: text.length === 0, title, text };",
    "})()",
  ].join("\n");
  return script;
}
