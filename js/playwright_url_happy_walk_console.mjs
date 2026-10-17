import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { playwright_happy_walk_capped } from "./playwright_happy_walk_capped.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export async function playwright_url_happy_walk_console(url, steps) {
  "$plain url";
  "$plain steps";
  "Opens a page and walks it the way somebody getting everything right does, for at most the number of steps asked for, and hands back every error and console line the page wrote along the way, what the walk pressed last, and the text the page showed where the walk ended - so a walk that sticks says why.";
  "Written 2026-10-17 because a page whose examples are drawn at random cannot be walked by a list of texts to press, since every load asks for different ones, and the walk that answers by itself said only that it stuck, never what the page threw. Not picked: adding the errors to the walk the gate uses, which every caller would then carry.";
  "A walk that throws is caught and its message kept, because where it stuck is the answer.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let lines = [];
  let walked = null;
  let stuck = null;
  let shown = null;
  async function on_page(page) {
    function error_each(err) {
      let item = text_combine_multiple(["uncaught  ", err.message]);
      list_add(lines, item);
    }
    page.on("pageerror", error_each);
    function console_each(message) {
      let v = message.type();
      let v2 = message.text();
      let item2 = text_combine_multiple([v, "  ", v2]);
      list_add(lines, item2);
    }
    page.on("console", console_each);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    let steps_max = number_from_text(steps);
    try {
      walked = await playwright_happy_walk_capped(page, steps_max);
    } catch (err) {
      stuck = err.message;
    }
    ("the page is read five seconds after the walk ends, so what it shows is where it came to rest and not a moment inside an animation - which is what tells a page that stopped asking from one still moving");
    await page.waitForTimeout(5000);
    shown = await page.innerText("body");
  }
  await playwright_test_blank(on_page);
  let r = {
    walked: equal(null, walked) ? null : property_get(walked, "steps"),
    ended: equal(null, walked) ? null : property_get(walked, "ended"),
    stuck,
    lines,
    shown,
  };
  return r;
}
