export async function app_replace_tests_proof_present_wait(page, present) {
  "wait until the proof rail is present or absent, per the flag - used after a reload that resumes the proof (present), and after start over that clears it (absent)";
  "Nothing in here may be normalized. The inner function is handed to the page rather than called, so it is written out as text and run in the browser, where a name this repo keeps means nothing - a rewritten comparison lands there as a call to something undefined, and the wait it belongs to then fails for a reason no gate can see.";
  function matches(want) {
    let v = document.querySelectorAll("p");
    let paragraphs = Array.from(v);
    function is_label(p) {
      let r = p.textContent.trim() === "Your steps:";
      return r;
    }
    let here = paragraphs.some(is_label);
    let r2 = here === want;
    return r2;
  }
  await page.waitForFunction(matches, present);
}
