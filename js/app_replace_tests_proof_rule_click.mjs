export async function app_replace_tests_proof_rule_click(page, index) {
  "click the proof's rule button at the given 0-based position; a rule can repeat across steps, so it is clicked by position rather than by name";
  function click(position) {
    let v = document.querySelectorAll("p");
    let paragraphs = Array.from(v);
    function is_label(p) {
      let r = p.textContent.trim() === "Your steps:";
      return r;
    }
    let label = paragraphs.find(is_label);
    let v2 = label.parentElement.querySelectorAll("button");
    let buttons = Array.from(v2);
    buttons[position].click();
  }
  await page.evaluate(click, index);
}
