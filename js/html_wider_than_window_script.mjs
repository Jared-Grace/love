export function html_wider_than_window_script() {
  "the browser-side search for the parts of a page that reach past the right edge of the window - the parts that make a reader scroll sideways";
  "It answers three ways, because each finds a different part of the same fault. widest is the one thing reaching furthest. sticking_out is every part that reaches past the edge while the box holding it does not - where the overflow starts - with the styles that decide whether it could have wrapped. wide is the innermost parts past the edge, which is usually the piece of text to fix: every box holding a wide part reaches past the edge too, and naming those would bury it.";
  "kept as a STRING on purpose: it runs inside the page and must not be canonicalized into repo calls the page has never heard of";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let script = [
    "(() => {",
    "  const view = document.documentElement.clientWidth;",
    "  const all = Array.from(document.body.querySelectorAll('*'));",
    "  let widest = null;",
    "  let widest_right = view;",
    "  const sticking_out = [];",
    "  for (const el of all) {",
    "    const box = el.getBoundingClientRect();",
    "    if (box.right > widest_right) {",
    "      widest_right = box.right;",
    "      widest = el.tagName + ' ' + (el.textContent || '').slice(0, 60);",
    "    }",
    "    const parent_inside = el.parentElement.getBoundingClientRect().right <= view;",
    "    if (box.right > view && parent_inside) {",
    "      const style = getComputedStyle(el);",
    "      sticking_out.push({",
    "        tag: el.tagName,",
    "        text: (el.textContent || '').slice(0, 40),",
    "        left: box.left,",
    "        width: box.width,",
    "        white_space: style.whiteSpace,",
    "        display: style.display,",
    "        visibility: style.visibility,",
    "        position: style.position,",
    "      });",
    "    }",
    "  }",
    "  const past = all.filter(e => e.getBoundingClientRect().right > view + 1);",
    "  const innermost = past.filter(e => !past.some(o => o !== e && e.contains(o)));",
    "  const wide = innermost.map(e => ({",
    "    tag: e.tagName,",
    "    right: Math.round(e.getBoundingClientRect().right),",
    "    text: e.textContent.slice(0, 80),",
    "    parent_text: e.parentElement.textContent.slice(0, 120),",
    "  }));",
    "  const scroll_width = document.documentElement.scrollWidth;",
    "  return { scroll_width, view, widest, widest_right, sticking_out, wide };",
    "})()",
  ].join("\n");
  return script;
}
