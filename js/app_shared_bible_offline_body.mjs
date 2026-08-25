import { list_multiple_is } from "./list_multiple_is.mjs";
import { app_shared_bible_offline_prompt_text } from "./app_shared_bible_offline_prompt_text.mjs";
import { app_shared_bible_offline_reason_text } from "./app_shared_bible_offline_reason_text.mjs";
import { app_shared_bible_offline_free_all_text } from "./app_shared_bible_offline_free_all_text.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { app_shared_bible_offline_save_all } from "./app_shared_bible_offline_save_all.mjs";
import { app_shared_bible_offline_languages } from "./app_shared_bible_offline_languages.mjs";
import { app_shared_bible_offline_row } from "./app_shared_bible_offline_row.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_spaced } from "./app_shared_spaced.mjs";
import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { ebible_offline_delete_all } from "./ebible_offline_delete_all.mjs";
import { ebible_offline_folders_get } from "./ebible_offline_folders_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
export function app_shared_bible_offline_body(container, languages) {
  "the offline choices without any framing, so both the chapter reader's in-place panel and the verse reader's settings screen can host them, each supplying its own way back";
  html_clear(container);
  let card = app_shared_container_blue(container);
  ("the card holds one group per line of thought - what is being asked, then one language, then the next, then the offer covering all of them - and each of those is more than one line: a saved language says so and then offers its space back on the line under it. Without room between the groups every line is the same distance from every other, so a button sits as close to the language below it as to the language it belongs to, and the reader has to work out the grouping from the words");
  app_shared_spaced(card);
  let asked = html_div(card);
  let prompt = app_shared_bible_offline_prompt_text();
  html_div_text_bold(asked, prompt);
  let reason = app_shared_bible_offline_reason_text();
  app_shared_text_quiet(asked, reason);
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
  ("more than one saved, never merely one: with a single language saved, that language's own row already carries a button freeing exactly it, and a second button beside it freeing 'all' frees the same one thing. Two buttons doing one thing is a reader stopping to work out how they differ, and the answer is that they do not - the same reason the button offering to save them all appears only when there is more than one left to save");
  let several = list_multiple_is(folders);
  if (several) {
    async function on_delete() {
      await ebible_offline_delete_all();
      app_shared_bible_offline_body(container, languages);
    }
    let free_all = app_shared_bible_offline_free_all_text();
    app_shared_button(container, free_all, on_delete);
  }
}
