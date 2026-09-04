import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_emoji_bible_tradition_get } from "./app_emoji_bible_tradition_get.mjs";
import { app_emoji_bible_tradition_toggle } from "./app_emoji_bible_tradition_toggle.mjs";
import { app_emoji_bible_tradition_button_text } from "./app_emoji_bible_tradition_button_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_emoji_bible_key_shown_get } from "./app_emoji_bible_key_shown_get.mjs";
import { app_emoji_bible_key_shown_toggle } from "./app_emoji_bible_key_shown_toggle.mjs";
import { app_emoji_bible_key_shown_button_text } from "./app_emoji_bible_key_shown_button_text.mjs";
import { app_emoji_bible_english_shown_get } from "./app_emoji_bible_english_shown_get.mjs";
import { app_emoji_bible_english_shown_toggle } from "./app_emoji_bible_english_shown_toggle.mjs";
import { app_emoji_bible_english_shown_button_text } from "./app_emoji_bible_english_shown_button_text.mjs";
export function app_emoji_bible_view_buttons(bar, fn_draw) {
  arguments_assert(arguments, 2);
  ("The three choices a reader makes about the chapter in front of them - how the cross is drawn, whether the key is under each verse, and whether the English is - drawn onto the bar as buttons, with what they currently say handed back for the drawing of the chapter itself.");
  ("THEY ARE PUT UP TOGETHER BECAUSE THEY ARE ONE ROW AND ONE HABIT. Each of the three is read, named, drawn and hooked up the same way, and the order they sit in on the bar is a thing a reader learns; written out three times at the top of the page they were three chances to hook one button to another one's toggle in silence.");
  ("WHAT EACH ONE SAYS COMES BACK, because the chapter below the bar is drawn from exactly these three answers and reading them a second time would let the button and the chapter disagree.");
  ("THE PAGE HANDS IN ITS OWN WAY OF DRAWING ITSELF AGAIN rather than being reached for from here. ",
    fn_name("app_emoji_bible"),
    " is the page these buttons sit on, so asking for it by name would have this file and that one each waiting on the other to finish loading - and the whole reason the page is drawn again from the top after a toggle is that hunting down what changed silently misses whatever was reached by a path nobody thought of.");
  let tradition = app_emoji_bible_tradition_get();
  async function lambda_tradition() {
    app_emoji_bible_tradition_toggle();
    await fn_draw();
  }
  let tradition_text = app_emoji_bible_tradition_button_text(tradition);
  app_shared_button(bar, tradition_text, lambda_tradition);
  let key_shown = app_emoji_bible_key_shown_get();
  async function lambda_key() {
    app_emoji_bible_key_shown_toggle();
    await fn_draw();
  }
  let key_text = app_emoji_bible_key_shown_button_text(key_shown);
  app_shared_button(bar, key_text, lambda_key);
  let english_shown = app_emoji_bible_english_shown_get();
  async function lambda_english() {
    app_emoji_bible_english_shown_toggle();
    await fn_draw();
  }
  let english_text = app_emoji_bible_english_shown_button_text(english_shown);
  app_shared_button(bar, english_text, lambda_english);
  let r = {
    tradition,
    key_shown,
    english_shown,
  };
  return r;
}
