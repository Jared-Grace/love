import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_offline_clicks_console(
  url,
  texts_online,
  text_wait,
  texts_offline,
) {
  "$plain url";
  "$plain texts_online";
  "$plain text_wait";
  "$plain texts_offline";
  "Opens a page, presses each of texts_online in turn, waits until text_wait shows, opens the page again, cuts the network, presses each of texts_offline, and hands back every error, console line and request that failed, and the text the page ended up showing. Each list is one comma-joined word.";
  "It exists to read what a page still reaches for once it has been told it may work without the internet: whatever fails after the cut is a thing the offline copy does not hold.";
  let lines = [];
  let shown = "";
  async function on_page(page) {
    function error_each(err) {
      let line = text_combine_multiple(["uncaught  ", err.message]);
      list_add(lines, line);
    }
    page.on("pageerror", error_each);
    function console_each(message) {
      let v = message.type();
      let v2 = message.text();
      let line = text_combine_multiple([v, "  ", v2]);
      list_add(lines, line);
    }
    page.on("console", console_each);
    function failed_each(request) {
      let v3 = request.url();
      let line = text_combine_multiple(["failed  ", v3]);
      list_add(lines, line);
    }
    page.on("requestfailed", failed_each);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    for (let text of text_split_comma(texts_online)) {
      await page.getByText(text).first().click();
      await page.waitForTimeout(1000);
    }
    await page.getByText(text_wait).first().waitFor({
      timeout: 120000,
    });
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    list_add(lines, "offline");
    await page.context().setOffline(true);
    for (let text of text_split_comma(texts_offline)) {
      await page.getByText(text).first().click();
      await page.waitForTimeout(3000);
    }
    shown = await page.innerText("body");
  }
  await playwright_test_blank(on_page);
  let told = {
    url,
    lines,
    shown,
  };
  return told;
}
