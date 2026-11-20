import { fn_name } from "./fn_name.mjs";
import { playwright_firefox } from "./playwright_firefox.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { html_wider_than_window_script } from "./html_wider_than_window_script.mjs";
export async function playwright_url_firefox_wider_than_window(url, width) {
  "$plain url";
  "$plain width";
  ("The Firefox twin of ",
    fn_name("playwright_url_wider_than_window"),
    ": opens a page in a headless Firefox at the width asked for and lists the innermost parts that reach past the right edge. Measured 2026-11-20, the emoji Bible wrapped in Chrome and ran off the edge on a phone running Firefox, so a width that only one engine was asked about proved nothing about the other.");
  ("BROWSER-SERIALIZED - do NOT auto-canonicalize");
  let launcher = await playwright_firefox();
  let engine = await launcher.launch({
    headless: true,
  });
  let result = null;
  try {
    let page = await engine.newPage();
    let viewport = {
      width: number_from_text(width),
      height: 800,
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    let script = html_wider_than_window_script();
    result = await page.evaluate(script);
  } finally {
    await engine.close();
  }
  return result;
}
