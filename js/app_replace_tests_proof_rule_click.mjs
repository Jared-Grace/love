export async function app_replace_tests_proof_rule_click(page, index) {
  "click the proof's rule button at the given 0-based position; a rule can repeat across steps, so it is clicked by position rather than by name";
  function click(position) {
    let paragraphs = Array.from(document.querySelectorAll("p"));
    function is_label(p) {
      return p.textContent.trim() === "Your steps:";
    }
    let label = paragraphs.find(is_label);
    let buttons = Array.from(label.parentElement.querySelectorAll("button"));
    buttons[position].click();
  }
  await page.evaluate(click, index);
}
