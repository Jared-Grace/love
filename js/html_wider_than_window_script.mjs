export function html_wider_than_window_script() {
  "the browser-side search for the innermost parts of a page that reach past the right edge of the window - the parts that make a reader scroll sideways";
  "Only the innermost are listed, because every box holding a wide part reaches past the edge too, and naming those would bury the one to fix.";
  "kept as a STRING on purpose: it runs inside the page and must not be canonicalized into repo calls the page has never heard of";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let script = [
    "(() => {",
    "  const edge = document.documentElement.clientWidth;",
    "  const all = Array.from(document.body.querySelectorAll('*'));",
    "  const wide = all.filter(e => e.getBoundingClientRect().right > edge + 1);",
    "  const innermost = wide.filter(e => !wide.some(o => o !== e && e.contains(o)));",
    "  const found = innermost.map(e => ({",
    "    tag: e.tagName,",
    "    right: Math.round(e.getBoundingClientRect().right),",
    "    text: e.textContent.slice(0, 80),",
    "    parent_text: e.parentElement.textContent.slice(0, 120),",
    "  }));",
    "  return { edge, page_width: document.documentElement.scrollWidth, wide: found };",
    "})()",
  ].join("\n");
  return script;
}
