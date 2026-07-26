export function app_code_screen_capture_script() {
  "the browser-side capture, kept as a STRING on purpose: it runs inside the page via page.evaluate, so it must not be canonicalized (that would turn its operators into repo calls the page has never heard of). Walks the DOM collecting text but SKIPPING every button subtree and every HIDDEN subtree (display none or visibility hidden). Buttons hold randomly sampled distractors and a global !important rule stops an inline hide; the hidden subtrees are the success message and the correction, both randomized for variety and both present-but-hidden until you answer - including any of them would make a screen look changed every crawl. Returns overflow pixels, an empty flag, a title line, and the collapsed visible non-button text";
  let script = [
    "(() => {",
    "  const de = document.documentElement;",
    "  const overflow = de.scrollWidth - de.clientWidth;",
    "  function shown(el) {",
    "    const s = getComputedStyle(el);",
    "    return s.display !== 'none' && s.visibility !== 'hidden';",
    "  }",
    "  function collect(node, out) {",
    "    node.childNodes.forEach(child => {",
    "      if (child.nodeType === 3) { out.push(child.textContent); }",
    "      else if (child.nodeType === 1 && child.tagName !== 'BUTTON' && shown(child)) { out.push('\\n'); collect(child, out); }",
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
