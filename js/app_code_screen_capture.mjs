import { app_code_screen_capture_script } from "./app_code_screen_capture_script.mjs";
export async function app_code_screen_capture(page) {
  "capture the current code-app screen for regression checking: its user-facing text plus the mechanical signals - horizontal overflow in pixels (should be 0), whether the body is empty (a blank screen is a render failure), and a short title line to tell screens apart. The browser side is a string, not a function, so the canonicalizer leaves it untouched (it would otherwise rewrite operators into calls that do not exist in the page)";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let script = app_code_screen_capture_script();
  let record = await page.evaluate(script);
  return record;
}
