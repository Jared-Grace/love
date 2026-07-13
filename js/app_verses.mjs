import { list_filter_text_includes_not } from "./list_filter_text_includes_not.mjs";
import { ebible_versions_english_choices_browser } from "./ebible_versions_english_choices_browser.mjs";
import { app_reply_languages_chosen_default } from "./app_reply_languages_chosen_default.mjs";
import { app_reply_languages_chosen_reset } from "./app_reply_languages_chosen_reset.mjs";
import { app_reply_buttons_languages } from "./app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "./app_reply_languages_prompt.mjs";
import { app_reply_verses_add } from "./app_reply_verses_add.mjs";
import { app_reply_initialize } from "./app_reply_initialize.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { list_empty } from "./list_empty.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export async function app_verses(context) {
  let r = await app_reply_initialize(context);
  let languages = property_get(r, "languages");
  let en = property_get(r, "en");
  let root = property_get(r, "root");
  let encouragement = property_get(r, "encouragement");
  let encouragement_singles = list_filter_text_includes_not(encouragement, "-");
  let english_choices = await ebible_versions_english_choices_browser();
  let languages_chosen_default = app_reply_languages_chosen_default();
  let languages_chosen = [];
  languages_chosen_reset();
  let bible_texts = [];
  let verse_count = 1;
  let card1 = app_shared_container_blue(root);
  let p = app_reply_languages_prompt(card1);
  let buttons_languages = app_reply_buttons_languages(
    languages_chosen,
    card1,
    languages,
  );
  let card2 = app_shared_container_blue(root);
  app_shared_text_body(card2, "2. How many Bible verses would you like?");
  let counts = [1, 2, 3, 4, 6, 8, 10, 20, 40];
  let count_updates = [];
  function count_each(c) {
    let component = null;
    function on_click() {
      verse_count = c;
      counts_refresh();
    }
    component = app_replace_button(card2, c, on_click);
    function update() {
      let chosen = equal(verse_count, c);
      app_shared_button_toggle_style(chosen, component);
    }
    list_add(count_updates, update);
    update();
  }
  each(counts, count_each);
  let card3 = app_shared_container_blue(root);
  app_shared_text_body(
    card3,
    "3. Whenever you are ready, generate your verses. They will be lovingly copied for you.",
  );
  let generate_button = app_replace_button(card3, "✨ Generate", generate);
  app_shared_text_body(
    card3,
    "If the copy did not work, this button will gently copy them again.",
  );
  let copy_button = app_replace_button(card3, html_button_copy_text(), copy);
  let card4 = app_shared_container_blue(root);
  card4_refresh();
  function counts_refresh() {
    each(count_updates, count_update_invoke);
  }
  function count_update_invoke(update) {
    update();
  }
  async function generate() {
    list_empty(bible_texts);
    let e = encouragement;
    if (verse_count === 1) {
      e = encouragement_singles;
    }
    let taken = list_shuffle_take(e, verse_count);
    let reference_current = null;
    async function verse_each(reference) {
      reference_current = await app_reply_verses_add(
        en,
        reference,
        english_choices,
        reference_current,
        bible_texts,
        languages_chosen,
      );
    }
    await each_async(taken, verse_each);
    display();
    await copy();
  }
  function display() {
    html_clear(card4);
    each(bible_texts, display_line);
    card4_refresh();
  }
  function display_line(line) {
    app_shared_text_body(card4, line);
  }
  function card4_refresh() {
    let empty = list_empty_is(bible_texts);
    html_display_none_or_block(empty, card4);
  }
  async function copy() {
    let joined = await list_join_newline_2_copy(bible_texts);
  }
  function languages_chosen_reset() {
    app_reply_languages_chosen_reset(
      languages_chosen,
      languages_chosen_default,
      languages,
    );
  }
}
