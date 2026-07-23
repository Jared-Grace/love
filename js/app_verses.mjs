import { list_filter_text_includes_not } from "../../love/js/list_filter_text_includes_not.mjs";
import { emoji_arrows_crossed } from "../../love/js/emoji_arrows_crossed.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
import { app_reply_languages_chosen_default } from "../../love/js/app_reply_languages_chosen_default.mjs";
import { app_reply_verses_add_uplifting } from "../../love/js/app_reply_verses_add_uplifting.mjs";
import { uplifting_package_get } from "../../love/js/uplifting_package_get.mjs";
import { app_shared_message_overlay } from "../../love/js/app_shared_message_overlay.mjs";
import { browser_online_is } from "../../love/js/browser_online_is.mjs";
import { emoji_pray } from "../../love/js/emoji_pray.mjs";
import { list_map_unordered_async } from "../../love/js/list_map_unordered_async.mjs";
import { list_unique } from "../../love/js/list_unique.mjs";
import { list_copy } from "../../love/js/list_copy.mjs";
import { html_bar_content_padded } from "../../love/js/html_bar_content_padded.mjs";
import { html_centered } from "../../love/js/html_centered.mjs";
import { app_shared_bible_languages_gear } from "../../love/js/app_shared_bible_languages_gear.mjs";
import { app_shared_language_codes_saved_or } from "../../love/js/app_shared_language_codes_saved_or.mjs";
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
import { list_shuffle } from "../../love/js/list_shuffle.mjs";
import { list_take } from "../../love/js/list_take.mjs";
import { list_first } from "../../love/js/list_first.mjs";
import { list_swap_first } from "../../love/js/list_swap_first.mjs";
import { text_includes } from "../../love/js/text_includes.mjs";
import { list_join_newline_2_copy } from "../../love/js/list_join_newline_2_copy.mjs";
import { list_empty } from "../../love/js/list_empty.mjs";
import { list_empty_is } from "../../love/js/list_empty_is.mjs";
import { list_add } from "../../love/js/list_add.mjs";
import { list_add_multiple } from "../../love/js/list_add_multiple.mjs";
import { null_is } from "../../love/js/null_is.mjs";
import { app_verses_draw_save } from "../../love/js/app_verses_draw_save.mjs";
import { app_verses_draw_get } from "../../love/js/app_verses_draw_get.mjs";
import { each } from "../../love/js/each.mjs";
import { each_async } from "../../love/js/each_async.mjs";
import { equal } from "../../love/js/equal.mjs";
import { property_get } from "../../love/js/property_get.mjs";
export async function app_verses(context) {
  let r = await app_reply_initialize(context);
  let languages = property_get(r, "languages");
  let root = property_get(r, "root");
  let encouragement = property_get(r, "encouragement");
  let languages_chosen_default = app_reply_languages_chosen_default();
  let default_codes = list_map_property(
    languages_chosen_default,
    "language_code",
  );
  let default_l = list_join_plus(default_codes);
  let remembered_l = app_shared_language_codes_saved_or(default_l);
  let hash = html_hash_object_get();
  "a url hash wins over the remembered choice, so a shared link still opens in the languages it names";
  let l = property_get_or(hash, "l", remembered_l);
  let language_codes = text_split_plus(l);
  function code_to_language(code) {
    return list_find_property_or_null(languages, "language_code", code);
  }
  let mapped = list_map(language_codes, code_to_language);
  let languages_chosen = list_filter_null_not_is(mapped);
  let bible_texts = [];
  let verse_count = 1;
  let offline_notified = false;
  let apply_seq = 0;
  let chosen_references = [];
  let order = list_copy(list_unique(encouragement));
  list_shuffle(order);
  order_standalone_first();
  let bc = html_bar_content_padded(root);
  let bar = property_get(bc, "bar");
  let content = property_get(bc, "content");
  html_centered(bar);
  app_shared_bible_languages_gear(bar, content, language_codes);
  app_shared_text_body(
    content,
    "1. Tap the ⚙️ button above to choose which language or languages your verses appear in.",
  );
  let card2 = app_shared_container_blue(content);
  app_shared_text_body(card2, "2. How many Bible verses would you like?");
  let counts = [1, 2, 3, 4, 6, 8, 10, 20, 40];
  let count_updates = [];
  function count_each(c) {
    let component = null;
    async function on_click() {
      verse_count = c;
      counts_refresh();
      await draw_fresh(false);
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
  let card3 = app_shared_container_blue(content);
  app_shared_text_body(
    card3,
    "3. Whenever you would like a different set, tap the button below. Your verses are lovingly copied for you each time.",
  );
  let reroll_button = app_shared_button(
    card3,
    text_combine(emoji_arrows_crossed(), " New verses"),
    reroll,
  );
  app_shared_text_body(
    card3,
    "If the copy did not work, this button will gently copy them again.",
  );
  let copy_button = app_shared_button(card3, html_button_copy_text(), copy);
  let card4 = app_shared_container_blue(content);
  card4_refresh();
  await draw_restore();
  async function draw_restore() {
    "reopening the app (or changing language, which reloads the page) brings back the last verses, re-rendered in the current languages, until New verses is tapped";
    let saved = app_verses_draw_get();
    let missing = null_is(saved);
    if (missing) {
      return;
    }
    verse_count = property_get(saved, "count");
    counts_refresh();
    let saved_references = property_get(saved, "references");
    await references_show(saved_references, false);
  }
  function counts_refresh() {
    each(count_updates, count_update_invoke);
  }
  function count_update_invoke(update) {
    update();
  }
  async function offline_guard() {
    let online = browser_online_is();
    if (online) {
      offline_notified = false;
      return false;
    }
    let folders = list_map_property(languages_chosen, "bible_folder");
    let packages = await list_map_unordered_async(folders, uplifting_package_get);
    let loaded = list_filter_null_not_is(packages);
    let nothing_loaded = list_empty_is(loaded);
    if (nothing_loaded) {
      "show the gentle offline message only once per offline stretch, so nudging the count while offline does not stack overlays";
      if (offline_notified) {
        return true;
      }
      offline_notified = true;
      app_shared_message_overlay(
        emoji_pray(),
        "It looks like you are not connected to the internet right now. Please reconnect, then choose your verses again — they will be waiting for you.",
      );
      return true;
    }
    return false;
  }
  function order_standalone_first() {
    "asking for a single verse shows the first reference, so keep a standalone verse there, never a multi-verse range";
    let first_reference = list_first(order);
    let first_is_range = text_includes(first_reference, "-");
    if (first_is_range) {
      let singles = list_filter_text_includes_not(order, "-");
      let single = list_first(singles);
      list_swap_first(order, single);
    }
  }
  async function draw_fresh(copy_after) {
    "changing the count — or tapping New verses — draws a brand-new set of that many verses: a fresh shuffle every time, so the verses always refresh rather than the count only adding to or trimming what was already there";
    list_shuffle(order);
    order_standalone_first();
    let references = list_take(order, verse_count);
    await references_show(references, copy_after);
  }
  async function references_show(references, copy_after) {
    apply_seq = apply_seq + 1;
    let my_seq = apply_seq;
    let handled = await offline_guard();
    if (handled) {
      return;
    }
    let texts = await references_to_texts(references);
    let superseded = my_seq !== apply_seq;
    if (superseded) {
      "a newer tap started while these verses were being gathered, so drop this stale result rather than let two renders fight over the display";
      return;
    }
    chosen_references = references;
    list_empty(bible_texts);
    list_add_multiple(bible_texts, texts);
    display();
    app_verses_draw_save({
      count: verse_count,
      references,
    });
    if (copy_after) {
      await copy();
    }
  }
  async function references_to_texts(references) {
    let texts = [];
    async function reference_each(reference) {
      await app_reply_verses_add_uplifting(reference, languages_chosen, texts);
    }
    await each_async(references, reference_each);
    return texts;
  }
  async function reroll() {
    await draw_fresh(true);
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
}
