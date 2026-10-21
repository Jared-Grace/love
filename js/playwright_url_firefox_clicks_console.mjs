import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { playwright_firefox } from "./playwright_firefox.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
export async function playwright_url_firefox_clicks_console(url, selectors) {
  arguments_assert(arguments, 2);
  ("$plain selectors");
  ("selectors is one comma-joined word, as every list handed over a command line is, each one naming an element to tap the way a page's own query names one; a selector holding a comma of its own cannot be one of them. They are matched against the page and nothing that runs.");
  ("load one address in a real headless Firefox, tap the first element each selector names, in turn, and hand back every uncaught error, every console line, how many taps landed, and the text the page shows after the last one - so a walk several taps deep can be READ here instead of tried on a phone. The twin with one tap is ",
    fn_name("playwright_url_firefox_click_console"),
    ".");
  ("A selector, rather than a text, names each tap, so a tap can ask for an element holding exactly 5 and not the first line that has a 5 in it. A selector that finds nothing stops the walk there rather than throwing, since how far the walk got is itself the answer.");
  let launcher = await playwright_firefox();
  let engine = await launcher.launch({
    headless: true,
  });
  let lines = [];
  let shown = "";
  let tapped = 0;
  let missed = null;
  try {
    let page = await engine.newPage();
    function error_each(err) {
      list_add(lines, "uncaught  " + err.message);
    }
    page.on("pageerror", error_each);
    function console_each(message) {
      list_add(lines, message.type() + "  " + message.text());
    }
    page.on("console", console_each);
    await page.goto(url);
    await page.waitForTimeout(8000);
    for (let selector of text_split_comma(selectors)) {
      let matches = page.locator(selector);
      let found = await matches.count();
      let b = greater_than(found, 0);
      if (not(b)) {
        missed = selector;
        break;
      }
      await matches.first().click();
      await page.waitForTimeout(2500);
      tapped = tapped + 1;
    }
    shown = await page.innerText("body");
  } finally {
    await engine.close();
  }
  let told = {
    url,
    tapped,
    missed,
    lines,
    shown,
  };
  return told;
}
