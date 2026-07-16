export async function app_replace_tests_proof_start_over_click(page) {
  "click the start over button, found by its text, which forgets the goal's saved steps so the proof clears";
  function click() {
    let buttons = Array.from(document.querySelectorAll("button"));
    function is_start_over(button) {
      return button.textContent.includes("Start over");
    }
    let button = buttons.find(is_start_over);
    button.click();
  }
  await page.evaluate(click);
}
