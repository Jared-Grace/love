import { html_clear_context } from "./html_clear_context.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_bible_settings } from "./app_bible_settings.mjs";
import { app_bible_languages_chosen_get } from "./app_bible_languages_chosen_get.mjs";
import { app_shared_bible_offline_body } from "./app_shared_bible_offline_body.mjs";
export function app_bible_offline(context) {
  "the offline downloads as their own screen, reached from settings; back returns to the settings hub";
  let root = html_clear_context(context);
  html_centered(root);
  html_page_padding_x(root);
  async function lambda_back() {
    await app_shared_screen_set(context, app_bible_settings);
  }
  app_shared_button_back(root, lambda_back);
  let languages = app_bible_languages_chosen_get();
  let container = html_div(root);
  app_shared_bible_offline_body(container, languages);
}
