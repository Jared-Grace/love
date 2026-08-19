import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { app_shared_bible_offline_save_all } from "./app_shared_bible_offline_save_all.mjs";
import { app_shared_bible_offline_languages } from "./app_shared_bible_offline_languages.mjs";
import { app_shared_bible_offline_row } from "./app_shared_bible_offline_row.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { each } from "./each.mjs";
import { ebible_offline_delete_all } from "./ebible_offline_delete_all.mjs";
import { ebible_offline_folders_get } from "./ebible_offline_folders_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function app_shared_bible_offline_body(container, languages) {
  "the offline choices without any framing, so both the chapter reader's in-place panel and the verse reader's settings screen can host them, each supplying its own way back";
  html_clear(container);
  let card = app_shared_container_blue(container);
  html_div_text_bold(
    card,
    "Which languages do you want to keep on this device?",
  );
  app_shared_text_quiet(
    card,
    "A saved language opens with no internet, and it opens faster",
  );
  let listed = app_shared_bible_offline_languages(languages);
  function on_change() {
    "a save or a freeing changes what every other button here should say, so the whole list is drawn again";
    app_shared_bible_offline_body(container, languages);
  }
  function lambda(language) {
    app_shared_bible_offline_row(card, language, on_change);
  }
  each(listed, lambda);
  app_shared_bible_offline_save_all(card, listed, on_change);
  let folders = ebible_offline_folders_get();
  let any = list_empty_not_is(folders);
  if (any) {
    async function on_delete() {
      await ebible_offline_delete_all();
      app_shared_bible_offline_body(container, languages);
    }
    app_shared_button(container, "Free the space all of them use", on_delete);
  }
}
