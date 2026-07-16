export async function app_replace_tests_proof_present_wait(page, present) {
  "wait until the proof rail is present or absent, per the flag - used after a reload that resumes the proof (present), and after start over that clears it (absent)";
  function matches(want) {
    let paragraphs = Array.from(document.querySelectorAll("p"));
    function is_label(p) {
      return p.textContent.trim() === "Your steps:";
    }
    let here = paragraphs.some(is_label);
    return here === want;
  }
  await page.waitForFunction(matches, present);
}
