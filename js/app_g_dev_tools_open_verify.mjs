import { property_get } from "./property_get.mjs";
import { app_g_dev_tools_open_verify_told } from "./app_g_dev_tools_open_verify_told.mjs";
import { app_g_dev_tools_open_verify_lines } from "./app_g_dev_tools_open_verify_lines.mjs";
import { app_g_dev_tools_open_verify_console_each } from "./app_g_dev_tools_open_verify_console_each.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_g_dev_tools_open_verify() {
  arguments_assert(arguments, 0);
  ("walk the reported path in a real headless Firefox: boot the game, tap your own character, press the dev-tools button in the menu that opens, and hand back what the page showed at each of those three moments together with every console line and uncaught error along the way");
  ("It walks the path rather than loading the destination directly because loading the destination directly already worked - so the fault, if there is one, is in the CROSSING: a hash written from a click, a reload triggered by that hash, and a boot that has to read the hash back. Only a run that makes the click can see any of that.");
  ("NOT a member of the repo-wide gate: it needs the dev server up and a browser engine on disk, so a red run would mean 'the server is down' as often as 'the app is broken', and a gate that cries wolf is read as noise. Run it by name when the dev surface is in question.");
  let r2 = await app_g_dev_tools_open_verify_lines();
  let r3 = app_g_dev_tools_open_verify_told(r2);
  let told = property_get(r3, "told");
  let engine = property_get(r3, "engine");
  let url = property_get(r3, "url");
  let lines = property_get(r3, "lines");
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
