import { app_shared_bible_verse_block } from "./app_shared_bible_verse_block.mjs";
import { app_shared_language_hash_unknown_page_shown_is } from "./app_shared_language_hash_unknown_page_shown_is.mjs";
import { app_shared_bible_hash_to_languages_chosen_or } from "./app_shared_bible_hash_to_languages_chosen_or.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_verses_counts_refresh } from "./app_verses_counts_refresh.mjs";
import { app_verses_display } from "./app_verses_display.mjs";
import { app_verses_draw_fresh } from "./app_verses_draw_fresh.mjs";
import { app_verses_card4_refresh } from "./app_verses_card4_refresh.mjs";
import { app_verses_references_to_groups } from "./app_verses_references_to_groups.mjs";
import { app_verses_order_standalone_first } from "./app_verses_order_standalone_first.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { app_shared_bar_content_root } from "./app_shared_bar_content_root.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { not_equal } from "./not_equal.mjs";
import { emoji_arrows_crossed } from "./emoji_arrows_crossed.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_reply_languages_chosen_default } from "./app_reply_languages_chosen_default.mjs";
import { uplifting_package_get } from "./uplifting_package_get.mjs";
import { app_shared_message_overlay } from "./app_shared_message_overlay.mjs";
import { browser_online_is } from "./browser_online_is.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { uplifting_references_get } from "./uplifting_references_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_copy } from "./list_copy.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_bible_languages_gear } from "./app_shared_bible_languages_gear.mjs";
import { app_shared_language_codes_saved_or } from "./app_shared_language_codes_saved_or.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { app_reply_initialize } from "./app_reply_initialize.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { null_is } from "./null_is.mjs";
import { app_verses_draw_save } from "./app_verses_draw_save.mjs";
import { app_verses_draw_get } from "./app_verses_draw_get.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export async function app_verses(context) {
  app_shared_app_fn_set(context, app_verses);
  let hash = html_hash_object_get();
  ("the link is read back to the reader before anything is fetched or drawn, so a mistyped language is answered rather than silently dropped on the way to an english-looking page");
  let unknown_shown = app_shared_language_hash_unknown_page_shown_is(
    context,
    hash,
  );
  if (unknown_shown) {
    return;
  }
  let r = await app_reply_initialize(context);
  let root = property_get(r, "root");
  let languages_chosen_default = app_reply_languages_chosen_default();
  let property_name = language_code_key();
  let default_codes = list_map_property(
    languages_chosen_default,
    property_name,
  );
  let default_l = list_join_plus(default_codes);
  let remembered_l = app_shared_language_codes_saved_or(default_l);
  ("a url hash wins over the remembered choice, so a shared link still opens in the languages it names");
  let language_codes = app_shared_bible_hash_to_languages_chosen_or(
    hash,
    remembered_l,
  );
  let languages_chosen = ebible_languages_from_codes(language_codes);
  let verse_groups = [];
  let verse_count = 1;
  let offline_notified = false;
  let apply_seq = 0;
  let chosen_references = [];
  ("the list of which verses to draw from lives in firebase as data, not baked into this app, so it can change without a rebuild; until it loads (or if offline with a cold cache) order stays empty and a returning reader still sees their last saved draw");
  let order = [];
  let references_source = await uplifting_references_get();
  let have_references = null_not_is(references_source);
  if (have_references) {
    order = list_copy(references_source);
    list_shuffle(order);
    app_verses_order_standalone_first(order);
  }
  let bc = app_shared_bar_content_root(root);
  let bar = property_get(bc, "bar");
  let content = property_get(bc, "content");
  app_shared_content_column_pad(content);
  html_centered(bar);
  app_shared_bible_languages_gear(bar, content, language_codes);
  app_shared_text_body(
    content,
    "1. Tap the ⚙️ button above to choose which language or languages your verses appear in.",
  );
  let card = app_shared_container_blue(content);
  app_shared_text_body(card, "2. How many Bible verses would you like?");
  let counts = [1, 2, 3, 4, 6, 8, 10, 20, 40];
  let count_updates = [];
  function count_each(c) {
    let component = null;
    async function on_click() {
      verse_count = c;
      app_verses_counts_refresh(count_updates, count_update_invoke);
      await app_verses_draw_fresh(false, order, verse_count, references_show);
    }
    component = app_shared_button(card, c, on_click);
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
  let left = emoji_arrows_crossed();
  let text = text_combine(left, " New verses");
  app_shared_button(card3, text, reroll);
  app_shared_text_body(
    card3,
    "If the copy did not work, this button will gently copy them again.",
  );
  app_shared_button_copy(card3, copy);
  let card4 = app_shared_container_blue(content);
  app_verses_card4_refresh(verse_groups, card4);
  app_shared_contact_button(content, app_verses);
  await draw_restore();
  async function draw_restore() {
    "reopening the app (or changing language, which reloads the page) brings back the last verses, re-rendered in the current languages, until New verses is tapped";
    let saved = app_verses_draw_get();
    let missing = null_is(saved);
    if (missing) {
      return;
    }
    verse_count = property_get(saved, "count");
    app_verses_counts_refresh(count_updates, count_update_invoke);
    let saved_references = property_get(saved, "references");
    await references_show(saved_references, false);
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
    let property_name3 = bible_folder_key();
    let folders = list_map_property(languages_chosen, property_name3);
    let packages = await list_map_unordered_async(
      folders,
      uplifting_package_get,
    );
    let loaded = list_filter_null_not_is(packages);
    let nothing_loaded = list_empty_is(loaded);
    if (nothing_loaded) {
      ("show the gentle offline message only once per offline stretch, so nudging the count while offline does not stack overlays");
      if (offline_notified) {
        return true;
      }
      offline_notified = true;
      let emoji_text = emoji_pray();
      app_shared_message_overlay(
        emoji_text,
        "It looks like you are not connected to the internet right now. Please reconnect, then choose your verses again — they will be waiting for you.",
      );
      return true;
    }
    return false;
  }
  async function references_show(references, copy_after) {
    apply_seq = apply_seq + 1;
    let my_seq = apply_seq;
    let handled = await offline_guard();
    if (handled) {
      return;
    }
    let groups = await app_verses_references_to_groups(
      references,
      languages_chosen,
    );
    let superseded = not_equal(my_seq, apply_seq);
    if (superseded) {
      ("a newer tap started while these verses were being gathered, so drop this stale result rather than let two renders fight over the display");
      return;
    }
    chosen_references = references;
    list_clear(verse_groups);
    list_add_multiple(verse_groups, groups);
    app_verses_display(card4, verse_groups, display_group);
    app_verses_draw_save({
      count: verse_count,
      references,
    });
    if (copy_after) {
      await copy();
    }
  }
  async function reroll() {
    await app_verses_draw_fresh(true, order, verse_count, references_show);
  }
  function display_group(group) {
    let reference = property_get(group, "reference");
    let entries = property_get(group, "entries");
    app_shared_bible_verse_block(card4, reference, entries);
  }
  async function copy() {
    let lines = [];
    function group_each(group) {
      let reference = property_get(group, "reference");
      list_add(lines, reference);
      let texts = property_list_map_property(group, "entries", "text");
      list_add_multiple(lines, texts);
    }
    each(verse_groups, group_each);
    await list_join_newline_2_copy(lines);
  }
}
