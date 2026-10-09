import { number_from_text } from "./number_from_text.mjs";
import { html_wider_than_window_script } from "./html_wider_than_window_script.mjs";
import { playwright_happy_walk_capped } from "./playwright_happy_walk_capped.mjs";
import { property_get } from "./property_get.mjs";
import { playwright_happy_trail_wide } from "./playwright_happy_trail_wide.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_happy_wider_than_window(
  url,
  width,
  steps,
) {
  "$plain url";
  "$plain width";
  "$plain steps";
  "Opens a page at the width asked for and walks it the way somebody getting everything right does, for at most the number of steps asked for, and after every step lists the parts reaching past the right edge of the window - so a screen that scrolls sideways only after some answers is found too.";
  "It walks with the very walk the course gate uses, stopped early rather than failed at the cap, so a short look and the gate cannot come to disagree about how a screen is answered or left. The opening screen is measured too, because the walk measures only after it presses.";
  "Only the screens where something sticks out are handed back, each with the address it was measured at.";
  let found = [];
  let walked = null;
  async function on_page(page) {
    let viewport = {
      width: number_from_text(width),
      height: 800,
    };
    await page.setViewportSize(viewport);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    let script = html_wider_than_window_script();
    let measured = await page.evaluate(script);
    let opening = {
      wide: measured.wide,
      wide_url: page.url(),
    };
    let steps_max = number_from_text(steps);
    walked = await playwright_happy_walk_capped(page, steps_max);
    let trail = property_get(walked, "trail");
    found = playwright_happy_trail_wide([opening, ...trail]);
  }
  await playwright_test_blank(on_page);
  let r = {
    walked: property_get(walked, "steps"),
    ended: property_get(walked, "ended"),
    found,
  };
  return r;
}
