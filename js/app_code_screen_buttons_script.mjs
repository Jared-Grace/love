export function app_code_screen_buttons_script() {
  "the browser-side reading of every button a screen is offering, kept as a STRING on purpose for the same reason the text capture is: it runs inside the page and must not be canonicalized into repo calls the page has never heard of";
  "hidden buttons are left out, so a button that is present but not being offered is not read as one that is";
  "asked of the button's own style alone, that question answers wrongly: a button whose style says nothing is still invisible when something ABOVE it is hidden, and the app keeps such a button on every screen. Whether the page gives it a rectangle answers for the whole chain above it at once";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let script = [
    "(() => {",
    "  function shown(el) {",
    "    const s = getComputedStyle(el);",
    "    return el.getClientRects().length > 0 && s.visibility !== 'hidden';",
    "  }",
    "  const all = Array.from(document.querySelectorAll('button'));",
    "  return all.filter(shown).map(b => b.textContent.trim()).filter(Boolean);",
    "})()",
  ].join("\n");
  return script;
}
