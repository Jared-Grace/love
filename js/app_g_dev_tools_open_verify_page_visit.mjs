import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_dev_tools_open_verify_lines_listen } from "./app_g_dev_tools_open_verify_lines_listen.mjs";
import { app_g_dev_tools_open_verify_player_click } from "./app_g_dev_tools_open_verify_player_click.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export async function app_g_dev_tools_open_verify_page_visit(r) {
  "Drive one real browser through the whole way in to the dev tools screen - load the map, tap the player, open the menu, press the button, then press a card - and hand back what the page said at each step.";
  "THE BROWSER IS CLOSED WHETHER OR NOT ANY OF THAT WORKED, because a run that threw halfway would otherwise leave a browser standing with nothing to close it.";
  "ONE CARD IS PRESSED TOO, because the button and the cards go to a screen the same way now - so a run that only pressed the button would leave the larger half of that going-there untested.";
  "A PICTURE IS TAKEN AT THE END because the text alone cannot answer the question: both panels can be present in the page and only one of them be the one you SEE, so the picture is the evidence and the words are only the index to it.";
  arguments_assert(arguments, 1);
  let told = property_get(r, "told");
  let lines = property_get(r, "lines");
  let url = property_get(r, "url");
  let engine = property_get(r, "engine");
  try {
    let page = await engine.newPage();
    app_g_dev_tools_open_verify_lines_listen(page, lines);
    await page.goto(url);
    await page.waitForTimeout(8000);
    let booted = await page.innerText("body");
    await app_g_dev_tools_open_verify_player_click(page);
    await page.waitForTimeout(2000);
    let menu = await page.innerText("body");
    let button = page.getByText("Dev Tools");
    await button.click();
    await page.waitForTimeout(8000);
    let opened = await page.innerText("body");
    let hash = page.url();
    let card = page.getByText("design");
    await card.click();
    await page.waitForTimeout(8000);
    let routed = page.url();
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
