import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_en_learn_bible_language_names_own } from "./app_en_learn_bible_language_names_own.mjs";
import { app_en_learn_bible_stores } from "./app_en_learn_bible_stores.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { property_get } from "./property_get.mjs";
import { app_en_learn_bible_language_code_save } from "./app_en_learn_bible_language_code_save.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_en_learn_bible_language_ask(context, on_chosen) {
  "The first screen a new reader sees: which language do you speak? One button for each language this app explains English in.";
  "The question is written in every one of those languages and in english, because the app does not yet know which one the reader can read - that is the very thing being asked.";
  "Tapping a language remembers it on this device and writes it into the address, then hands over to on_chosen, which opens the app in it. Being written into the address is what the rest of the app already reads, so nothing past this screen has to know it was asked.";
  arguments_assert(arguments, 2);
  let root = html_clear_context(context);
  let card = app_shared_container_blue(root);
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
    app_shared_button(card, name, on_click);
  }
}
