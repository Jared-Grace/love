import { number_from_text } from "./number_from_text.mjs";
import { html_wider_than_window_script } from "./html_wider_than_window_script.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_wider_than_window(url, width) {
  "$plain url";
  "$plain width";
  "Opens a page in a browser with no screen, at the width asked for, and lists the innermost parts that reach past the right edge of the window - the parts that make a reader scroll sideways.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let result = null;
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: 800,
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    let script = html_wider_than_window_script();
    result = await page.evaluate(script);
  }
  await playwright_test_blank(on_page);
  return result;
}
