import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_language_prompt_one_text } from "./app_shared_language_prompt_one_text.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_shared_bible_language_codes_chosen } from "./app_shared_bible_language_codes_chosen.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_shared_language_codes_save } from "./app_shared_language_codes_save.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { property_set } from "./property_set.mjs";
import { html_hash_transform } from "./html_hash_transform.mjs";
import { window_reload } from "./window_reload.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_shared_bible_language_choose_one_render(
  container,
  languages,
) {
  "The list itself for choosing the one language a reader reads in: the question, then one wide button per language, and a tap is the whole choice.";
  "Drawn apart from whatever leads into it, because it is reached two ways - as a panel over the reading, and as a screen of its own from the settings - and each of those draws its own way back first.";
  "The language already chosen is marked, so the reader can see which one they are in before changing it.";
  "A tap reloads the page rather than going back to the menu, because in an app that speaks to its reader in the chosen language every word on the screen changes with it - the menu the reader would go back to is written in the language they just left.";
  arguments_assert(arguments, 2);
  let card = app_shared_container_blue(container);
  let prompt = app_shared_language_prompt_one_text();
  app_shared_text_body(card, prompt);
  let codes_chosen = app_shared_bible_language_codes_chosen();
  let property_name = language_code_key();
  for (let language of languages) {
    let code = property_get(language, property_name);
    let name = property_get(language, "name");
    let label = name;
    if (list_includes(codes_chosen, code)) {
      label = "✅ " + name;
    }
    function on_click() {
      app_shared_language_codes_save(code);
      function transform(hash) {
        let key = app_shared_bible_language_hash_key();
        property_set(hash, key, code);
      }
      html_hash_transform(transform);
      window_reload();
    }
    app_shared_button_wide(card, label, on_click);
  }
}
