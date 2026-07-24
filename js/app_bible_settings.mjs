import { html_clear_context } from "./html_clear_context.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_page_padding_x } from "./html_page_padding_x.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { app_shared_screen_set_home } from "./app_shared_screen_set_home.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { app_bible_languages } from "./app_bible_languages.mjs";
import { app_bible_offline } from "./app_bible_offline.mjs";
import { app_shared_bible_languages_text } from "./app_shared_bible_languages_text.mjs";
import { app_shared_bible_offline_text } from "./app_shared_bible_offline_text.mjs";
export function app_bible_settings(context) {
  "one gear on the reading bar opens this; language choice and keeping a bible on the device both live here so the bar stays about reading";
  let root = html_clear_context(context);
  html_centered(root);
  html_page_padding_x(root);
  async function lambda_back() {
    await app_shared_screen_set_home(context);
  }
  app_shared_button_back(root, lambda_back);
  let languages_text = app_shared_bible_languages_text();
  app_shared_screen_set_button(
    root,
    context,
    app_bible_languages,
    languages_text,
  );
  let offline_text = app_shared_bible_offline_text();
  app_shared_screen_set_button(root, context, app_bible_offline, offline_text);
}
