import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_firefox } from "./playwright_firefox.mjs";
import { list_add } from "./list_add.mjs";
export async function playwright_url_firefox_click_console(url, selector) {
  arguments_assert(arguments, 2);
  ("$plain selector");
  ("the selector names which element to tap, written the way a page's own query names one. It is matched against the page and nothing that runs.");
  ("load one address in a real headless Firefox, tap the first element the selector names, and hand back every uncaught error, every console line, and the text the page shows after the tap - so what a tap opens can be READ here instead of tried on a phone.");
  ("The text is read AFTER the tap and not before, because the question this answers is what the tap changed; the page before it is what the twin without a tap already reads.");
  let launcher = await playwright_firefox();
  let engine = await launcher.launch({
    headless: true,
  });
  let lines = [];
  let shown = "";
  let found = 0;
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
    let matches = page.locator(selector);
    found = await matches.count();
    if (greater_than(found, 0)) {
      await matches.first().click();
      await page.waitForTimeout(2000);
    }
    shown = await page.innerText("body");
  } finally {
    await engine.close();
  }
  let told = {
    url,
    selector,
    found,
    lines,
    shown,
  };
  return told;
}
