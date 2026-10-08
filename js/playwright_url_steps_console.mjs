import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { equal } from "./equal.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { playwright_test_blank } from "./playwright_test_blank.mjs";
export async function playwright_url_steps_console(url, steps) {
  "$plain url";
  "$plain steps";
  "Opens a page and walks steps, one comma-joined word: a step reading offline cuts the network, a step beginning wait= waits up to two minutes for the rest of it to show, and any other step is text to press. Hands back every error, console line and failed request, with the text the page showed after each press.";
  "The walk with one wait before the network is cut could not say 'save, wait, free it, save again, wait' - and that is the order a person actually tried it in.";
  "A press or a wait that finds nothing is written down and the walk stops there, rather than throwing, because how far the walk got is itself the answer.";
  let lines = [];
  async function shown_add(page) {
    let shown = await page.innerText("body");
    let line = text_combine_multiple(["shown  ", shown]);
    list_add(lines, line);
  }
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
    let wait_prefix = "wait=";
    for (let step of text_split_comma(steps)) {
      let item = text_combine_multiple(["step  ", step]);
      list_add(lines, item);
      if (equal(step, "offline")) {
        await page.context().setOffline(true);
      } else if (text_starts_with(step, wait_prefix)) {
        let text = text_prefix_without(step, wait_prefix);
        try {
          await page.getByText(text).first().waitFor({
            timeout: 600000,
          });
        } catch (err) {
          let item2 = text_combine_multiple(["never shown  ", text]);
          list_add(lines, item2);
          await shown_add(page);
          return;
        }
        await shown_add(page);
      } else {
        try {
          await page.getByText(step).first().click({
            timeout: 10000,
          });
        } catch (err) {
          let item3 = text_combine_multiple(["not found  ", step]);
          list_add(lines, item3);
          await shown_add(page);
          return;
        }
        await page.waitForTimeout(3000);
        await shown_add(page);
      }
    }
  }
  await playwright_test_blank(on_page);
  let told = {
    url,
    lines,
  };
  return told;
}
