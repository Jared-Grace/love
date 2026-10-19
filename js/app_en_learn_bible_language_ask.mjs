import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { app_shared_screen_centered } from "./app_shared_screen_centered.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_en_learn_bible_language_names_own } from "./app_en_learn_bible_language_names_own.mjs";
import { app_en_learn_bible_stores } from "./app_en_learn_bible_stores.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { property_get } from "./property_get.mjs";
import { app_en_learn_bible_language_code_save } from "./app_en_learn_bible_language_code_save.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_en_learn_bible_language_ask(context, on_chosen) {
  "The first screen a new reader sees: which language do you speak? One button for each language this app explains English in.";
  "The question is written in every one of those languages and in english, because the app does not yet know which one the reader can read - that is the very thing being asked.";
  "Tapping a language remembers it on this device and writes it into the address, then hands over to on_chosen, which opens the app in it. Being written into the address is what the rest of the app already reads, so nothing past this screen has to know it was asked.";
  arguments_assert(arguments, 2);
  let root = html_clear_context(context);
  ("this screen comes before the app starts, so it sets the type the app opens at itself, or it is drawn in the browser's bare default. The plain mobile default rather than the app's own: the app's reads a size this reader chose, kept under the app's name, which is not known until the app starts - and on a first visit nobody has chosen one, so the two agree.");
  html_mobile_default(context);
  let column = app_shared_screen_centered(root);
  let card = app_shared_container_blue(column);
  app_shared_text_body(card, "Choose the language you speak");
  app_shared_text_body(card, "اپنی زبان منتخب کریں");
  app_shared_text_body(card, "Piliin ang wikang ginagamit mo");
  let names = app_en_learn_bible_language_names_own();
  let stores = app_en_learn_bible_stores();
  let property_name = language_code_key();
  for (let store of stores) {
    let language = property_get(store, "language");
    let language_code = property_get(language, property_name);
    let name = property_get(names, language_code);
    async function on_click() {
      app_en_learn_bible_language_code_save(language_code);
      let key = app_shared_bible_language_hash_key();
      html_hash_property_set(key, language_code);
      await on_chosen();
    }
    ("wide, the way a stack of choices is drawn everywhere else in these apps: the whole line is the target, which on a phone is the difference between a tap and a miss");
    app_shared_button_wide(card, name, on_click);
  }
}
