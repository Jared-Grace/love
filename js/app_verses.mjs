import { list_filter_text_includes_not } from "../../love/js/list_filter_text_includes_not.mjs";
import { ebible_versions_english_choices_browser } from "../../love/js/ebible_versions_english_choices_browser.mjs";
import { app_reply_languages_chosen_default } from "../../love/js/app_reply_languages_chosen_default.mjs";
import { app_reply_verses_add } from "../../love/js/app_reply_verses_add.mjs";
import { html_bar_content_padded } from "../../love/js/html_bar_content_padded.mjs";
import { html_centered } from "../../love/js/html_centered.mjs";
import { app_shared_bible_languages_gear } from "../../love/js/app_shared_bible_languages_gear.mjs";
import { html_hash_object_get } from "../../love/js/html_hash_object_get.mjs";
import { property_get_or } from "../../love/js/property_get_or.mjs";
import { text_split_plus } from "../../love/js/text_split_plus.mjs";
import { list_join_plus } from "../../love/js/list_join_plus.mjs";
import { list_map_property } from "../../love/js/list_map_property.mjs";
import { list_map } from "../../love/js/list_map.mjs";
import { list_find_property_or_null } from "../../love/js/list_find_property_or_null.mjs";
import { list_filter_null_not_is } from "../../love/js/list_filter_null_not_is.mjs";
import { app_reply_initialize } from "../../love/js/app_reply_initialize.mjs";
import { app_shared_container_blue } from "../../love/js/app_shared_container_blue.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { app_shared_button_toggle_style } from "../../love/js/app_shared_button_toggle_style.mjs";
import { html_button_copy_text } from "../../love/js/html_button_copy_text.mjs";
import { app_shared_text_body } from "../../love/js/app_shared_text_body.mjs";
import { html_clear } from "../../love/js/html_clear.mjs";
import { html_display_none_or_block } from "../../love/js/html_display_none_or_block.mjs";
import { list_shuffle_take } from "../../love/js/list_shuffle_take.mjs";
import { list_join_newline_2_copy } from "../../love/js/list_join_newline_2_copy.mjs";
import { list_empty } from "../../love/js/list_empty.mjs";
import { list_empty_is } from "../../love/js/list_empty_is.mjs";
import { list_add } from "../../love/js/list_add.mjs";
import { each } from "../../love/js/each.mjs";
import { each_async } from "../../love/js/each_async.mjs";
import { equal } from "../../love/js/equal.mjs";
import { property_get } from "../../love/js/property_get.mjs";
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
    component = app_shared_button(card2, c, on_click);
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
  let generate_button = app_shared_button(card3, "✨ Generate", generate);
  app_shared_text_body(
    card3,
    "If the copy did not work, this button will gently copy them again.",
  );
  let copy_button = app_shared_button(card3, html_button_copy_text(), copy);
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
