import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { app_g_dev_tools_open_verify_console_each } from "./app_g_dev_tools_open_verify_console_each.mjs";
import { divide } from "./divide.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export async function app_g_dev_tools_open_verify_page_page(r2) {
  arguments_assert(arguments, 1);
  let told = property_get(r2, "told");
  let lines = property_get(r2, "lines");
  let url = property_get(r2, "url");
  let engine = property_get(r2, "engine");
  try {
    let page = await engine.newPage();
    function error_each(err) {
      let line = text_combine_multiple(["uncaught  ", err.message]);
      list_add(lines, line);
    }
    page.on("pageerror", error_each);
    function console_each(message) {
      let r = app_g_dev_tools_open_verify_console_each(message, lines);
      return r;
    }
    page.on("console", console_each);
    await page.goto(url);
    await page.waitForTimeout(8000);
    let booted = await page.innerText("body");
    ("the player's own square is the only image the app makes pulse, so that style is what names it; the image itself takes no clicks (they pass through to the map, which works out which square was hit), so the click has to land on the square's centre by coordinate rather than on the element");
    let player = page.locator('img[style*="pulseGlow"]').first();
    let box = await player.boundingBox();
    let x = box.x + divide(box.width, 2);
    let y = box.y + divide(box.height, 2);
    await page.mouse.click(x, y);
    await page.waitForTimeout(2000);
    let menu = await page.innerText("body");
    let button = page.getByText("Dev Tools");
    await button.click();
    await page.waitForTimeout(8000);
    let opened = await page.innerText("body");
    let hash = page.url();
    ("one card is pressed too, because the button and the cards go to a screen the same way now - so a run that only pressed the button would leave the larger half of that going-there untested");
    let card = page.getByText("design");
    await card.click();
    await page.waitForTimeout(8000);
    let routed = page.url();
    ("the text alone cannot answer this one: both panels can be present in the page and only one of them be the one you SEE, so the picture is the evidence and the words are only the index to it");
    let f_name = fn_name("app_g_dev_tools_open_verify");
    let name = text_combine_multiple([f_name, ".png"]);
    let picture = folder_gitignore_join(name);
    await page.screenshot({
      path: picture,
    });
    told = {
      url,
      booted,
      menu,
      opened,
      hash,
      routed,
      picture,
      lines,
    };
  } finally {
    await engine.close();
  }
  return told;
}
