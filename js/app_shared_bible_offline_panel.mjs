import { app_shared_bible_offline_languages } from "./app_shared_bible_offline_languages.mjs";
import { app_shared_bible_offline_row } from "./app_shared_bible_offline_row.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { each } from "./each.mjs";
import { ebible_offline_delete_all } from "./ebible_offline_delete_all.mjs";
import { ebible_offline_folders_get } from "./ebible_offline_folders_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { window_reload } from "./window_reload.mjs";
export function app_shared_bible_offline_panel(content, languages) {
  html_clear(content);
  app_shared_button_back(content, window_reload);
  let card = app_shared_container_blue(content);
  html_div_text_bold(
    card,
    "Which languages do you want to keep on this device?",
  );
  let explain = html_div_text(
    card,
    "A saved language opens with no internet, and it opens faster",
  );
  app_shared_text_deemphasized(explain);
  let listed = app_shared_bible_offline_languages(languages);
  function lambda(language) {
    app_shared_bible_offline_row(card, language);
  }
  each(listed, lambda);
  let folders = ebible_offline_folders_get();
  let any = list_empty_not_is(folders);
  if (any) {
    async function on_delete() {
      await ebible_offline_delete_all();
      app_shared_bible_offline_panel(content, languages);
    }
    app_shared_button(content, "Free the space these use", on_delete);
  }
}
