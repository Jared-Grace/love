import { app_shared_gear_settings_text } from "./app_shared_gear_settings_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_settings_choose } from "./app_shared_bible_settings_choose.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_shared_bible_settings_gear(
  bar,
  content,
  context,
  count_status,
) {
  "one gear on the reading bar; language choice and keeping the bible on the device both live behind it, so the bar stays about reading";
  async function on_gear() {
    "the count of chosen verses is emptied along with the bar it sat under: it counts what is picked in the chapter, and the chapter is no longer on the screen, so left standing it says how many verses are selected under a menu where nothing can be selected at all. Nothing is forgotten by emptying it - the choice lives in the link, and leaving the settings reloads the reading, which counts them again.";
    html_text_set(count_status, "");
    await app_shared_bible_settings_choose(bar, content, context);
  }
  let text = app_shared_gear_settings_text();
  app_shared_button(bar, text, on_gear);
}
