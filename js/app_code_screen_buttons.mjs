import { app_code_screen_buttons_script } from "./app_code_screen_buttons_script.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_code_screen_buttons(page) {
  "the words on every button the screen in front of us is offering, in the order they stand";
  "the text capture walks past every button on purpose - a quiz button holds a randomly sampled wrong answer, so reading them would make every lesson look changed on every crawl. On the app's own screens the buttons are fixed words, and they are most of what there is to read, so those screens are the ones that ask for this";
  arguments_assert(arguments, 1);
  let script = app_code_screen_buttons_script();
  let buttons = await page.evaluate(script);
  return buttons;
}
