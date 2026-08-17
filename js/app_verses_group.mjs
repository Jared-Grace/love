import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_verses_counts_refresh } from "./app_verses_counts_refresh.mjs";
import { app_verses_draw_fresh } from "./app_verses_draw_fresh.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { list_add } from "./list_add.mjs";
import { app_verses_draw_restore } from "./app_verses_draw_restore.mjs";
import { app_verses_draw_get } from "./app_verses_draw_get.mjs";
import { null_is } from "./null_is.mjs";
import { browser_online_is } from "./browser_online_is.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { uplifting_package_get } from "./uplifting_package_get.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_shared_message_overlay } from "./app_shared_message_overlay.mjs";
import { app_verses_references_to_groups } from "./app_verses_references_to_groups.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_verses_display } from "./app_verses_display.mjs";
import { app_verses_draw_save } from "./app_verses_draw_save.mjs";
import { app_verses_display_group } from "./app_verses_display_group.mjs";
export async function app_verses_group(
  r,
  count_updates,
  copy,
  verse_groups,
  languages_chosen,
) {
  arguments_assert(arguments, 5);
  let verse_count = property_get(r, "verse_count");
  let offline_notified = property_get(r, "offline_notified");
  let apply_seq = property_get(r, "apply_seq");
  let chosen_references = property_get(r, "chosen_references");
  let order = property_get(r, "order");
  let content = property_get(r, "content");
  let card = property_get(r, "card");
  let counts = property_get(r, "counts");
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
  let card4 = await app_verses_draw_restore(
    counts,
    count_each,
    content,
    reroll,
    copy,
    verse_groups,
    draw_restore,
  );
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
    let property_name = bible_folder_key();
    let folders = list_map_property(languages_chosen, property_name);
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
    let r3 = app_verses_display_group(group, card4);
    return r3;
  }
}
