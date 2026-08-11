import { app_shared_url_dev_local } from "./app_shared_url_dev_local.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_g } from "./app_g.mjs";
import { app_g_dev_route_names } from "./app_g_dev_route_names.mjs";
import { html_offscreen_report_script } from "./html_offscreen_report_script.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { page_settle_ms } from "./page_settle_ms.mjs";
import { phone_test_height } from "./phone_test_height.mjs";
import { phone_test_width } from "./phone_test_width.mjs";
import { playwright_test_url } from "./playwright_test_url.mjs";
export async function app_g_dev_routes_phone_report() {
  "opens every one of the game's dev screens on a screen the size of a phone and reports whatever has fallen off it and cannot be scrolled back to. this exists because the fault it looks for is invisible where the work is done: a size written in fixed units fits a laptop perfectly and beheads a picture on a phone, and the only thing that had ever noticed was somebody playing the game on their own phone and saying so";
  "an empty page is opened between screens, and only then the next address. writing a new word after the # only ASKS whoever is listening to change screens, and the browser will not rebuild a page for a hash it thinks it is already on - going away to nothing first is what makes each screen be built afresh from its own word, the same way it would be for somebody following a link";
  "reads the dev build off the local server, so what it measures is the code as it stands rather than whatever was last promoted";
  "the measuring is handed over as a STRING and not as a function. it runs where none of this repo's names exist, and the canonicalizing pass has already once turned its comparisons into calls to functions of this repo - which would have thrown in the browser and been read here as a screen that simply had nothing wrong with it. the gates that watch for that only see a function written INSIDE the one that sends it, so a probe living in its own file was invisible to them; a string is invisible to the pass instead, which is the safe way round";
  let names = await app_g_dev_route_names();
  let url = await app_shared_url_dev_local(app_g);
  let width = phone_test_width();
  let height = phone_test_height();
  let settle = page_settle_ms();
  let found = [];
  async function walk(page) {
    let size = {
      width,
      height,
    };
    await page.setViewportSize(size);
    for (let name of names) {
      let address = text_combine(url, name);
      await page.goto("about:blank");
      await page.goto(address);
      await page.waitForTimeout(settle);
      let script = html_offscreen_report_script();
      let offscreen = await page.evaluate(script);
      let empty = list_empty_is(offscreen);
      if (not(empty)) {
        let entry = {
          route: name,
          offscreen,
        };
        list_add(found, entry);
      }
    }
  }
  await playwright_test_url(url, walk);
  let result = {
    width,
    height,
    walked: names,
    found,
  };
  return result;
}
