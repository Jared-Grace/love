export function app_code_screen_next_click_script() {
  "the browser-side click on the quiz's Next button, kept as a STRING (runs in the page via page.evaluate, must not be canonicalized). Matches the button whose text, once the leading arrow emoji is stripped, is exactly Next - so it never hits Skip to the next lesson or Back to the previous quiz. Returns true when it clicked one";
  let script = [
    "(() => {",
    "  const buttons = [...document.querySelectorAll('button')];",
    "  const next = buttons.find(b => b.innerText.trim().replace(/^[^A-Za-z]+/, '') === 'Next');",
    "  if (next) { next.click(); return true; }",
    "  return false;",
    "})()",
  ].join("\n");
  return script;
}
