import { arguments_assert } from "./arguments_assert.mjs";
import { app_chapter_group_path } from "./app_chapter_group_path.mjs";
import { html_div } from "./html_div.mjs";
import { html_insert } from "./html_insert.mjs";
import { html_centered } from "./html_centered.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { list_last } from "./list_last.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { property_set } from "./property_set.mjs";
import { app_chapter_group_laid_out_load } from "./app_chapter_group_laid_out_load.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_chapter_group_splits_load } from "./app_chapter_group_splits_load.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { app_chapter_group_text } from "./app_chapter_group_text.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_chapter_group_name } from "./app_chapter_group_name.mjs";
import { html_clear } from "./html_clear.mjs";
import { each } from "./each.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_parent_append } from "./html_parent_append.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_click } from "./html_click.mjs";
import { app_shared_unsent_all } from "./app_shared_unsent_all.mjs";
import { app_chapter_group_splits_save } from "./app_chapter_group_splits_save.mjs";
import { app_shared_unsent_sync } from "./app_shared_unsent_sync.mjs";
export async function app_chapter_group_chapter_draw({
  app_name,
  folder_code,
  on_change,
  entries,
  content,
  chapter_code,
}) {
  "$plain app_name";
  "$plain folder_code";
  "$plain entries";
  "$plain content";
  "$plain chapter_code";
  "Everything the grouping adds to a chapter once its verses are drawn: the folder, a save button and a line saying whether the division has been sent at the top; every group in a box of its own, with a heading at its top and a button that copies its words and one that copies its name; under the last verse of every group but the last, a button that joins it to the next; and on a chosen verse that does not already begin a group, a button that begins one there.";
  "A division is only the verses that begin a group after the first. Beginning a group at a verse adds that verse, joining takes away the verse the next group began at, and a chapter never divided is all one group.";
  "Every change is kept on this device and sent at once, with nothing to press; the save button does the same again, for somebody who wants to be sure, and for after the internet comes back.";
  "A change draws only the boxes, headings and buttons again and moves the verses into them, never drawing a verse again, so the chapter does not move under the reader's finger.";
  "The copy is the group's verses in the language being read, one after another with the line breaks and stepping the printing gives them where those can be had, respelled for singing.";
  arguments_assert(arguments, 1);
  let path = app_chapter_group_path(folder_code, chapter_code);
  let top = html_div(content);
  html_insert(content, top, 0);
  html_centered(top);
  function on_folder() {
    on_change(folder_code);
  }
  let text2 = text_combine_multiple(["✏️ 📁 ", folder_code]);
  app_shared_button_wide(top, text2, on_folder);
  app_shared_button_wide(top, "💾 Save", save);
  let status = html_p_text(top, "");
  ("Every group is a box of its own, the same box the supper passages sit in, holding its heading and then its verses. The boxes live in one place made before anything else is added under the verses, so drawing them again never moves them past what comes after.");
  let groups_place = html_div(content);
  ("The chapter is drawn as one group at once, before storage or the words have answered, so nothing on the page is waiting to be pressed while it cannot work; the division asked for arrives a moment later and the headings are drawn again.");
  let texts = {};
  let splits = [];
  let touched = false;
  let numbers = list_map_property(entries, "verse_number");
  let count = list_size(entries);
  refresh();
  let hash = html_hash_object_get();
  let languages_chosen = app_shared_bible_hash_to_languages_chosen(hash);
  let language = list_last(languages_chosen);
  let bible_folder = ebible_language_to_bible_folder(language);
  let verses = await ebible_verses_browser(bible_folder, chapter_code);
  let number_key = verse_number_key();
  for (let verse of verses) {
    let number = property_get(verse, number_key);
    let text = property_get_or(verse, "text", "");
    let flat = whitespace_normalize(text);
    property_set(texts, number, {
      before: " ",
      text: flat,
    });
  }
  ("The plain running words are kept first, a space between verses, so there is always something to copy. Where the chapter can be had with its layout, each verse laid out takes the place of its plain one.");
  let laid_out = await app_chapter_group_laid_out_load(
    bible_folder,
    chapter_code,
  );
  if (null_not_is(laid_out)) {
    for (let piece of laid_out) {
      let number = property_get(piece, "verse_number");
      property_set(texts, number, piece);
    }
  }
  ("A division made while storage was still being asked is the newer one, so then what storage answers is let go.");
  let loaded = await app_chapter_group_splits_load(app_name, path);
  if (not(touched)) {
    splits = loaded;
    refresh();
  }
  await status_show();
  function begins_is(index) {
    if (equal(index, 0)) {
      return true;
    }
    let number = list_get(numbers, index);
    let begins = list_includes(splits, number);
    return begins;
  }
  function group_numbers(index) {
    let item = list_get(numbers, index);
    let group = [item];
    let next = index + 1;
    while (less_than(next, count) && not(begins_is(next))) {
      let item2 = list_get(numbers, next);
      list_add(group, item2);
      next = next + 1;
    }
    return group;
  }
  function heading_draw(parent, index) {
    let group = group_numbers(index);
    let first = list_get(group, 0);
    let last = list_last(group);
    let label = text_combine_multiple(["📖 Verses ", first, " - ", last]);
    if (equal(first, last)) {
      label = text_combine_multiple(["📖 Verse ", first]);
    }
    html_p_text(parent, label);
    let said = null;
    async function copy() {
      let group_texts = [];
      for (let number of group) {
        let piece = property_get_or(texts, number, {
          before: " ",
          text: "",
        });
        list_add(group_texts, piece);
      }
      let line = app_chapter_group_text(group_texts);
      await clipboard_copy_browser(line);
      html_text_set(said, "✅ Copied");
    }
    let text3 = html_button_copy_text();
    app_shared_button(parent, text3, copy);
    async function name_copy() {
      let name = app_chapter_group_name(chapter_code, first, last);
      await clipboard_copy_browser(name);
      let told = text_combine_multiple(["✅ Copied ", name]);
      html_text_set(said, told);
    }
    app_shared_button(parent, "🏷️ Copy name", name_copy);
    said = html_p_text(parent, "");
  }
  function refresh() {
    html_clear(groups_place);
    let card = null;
    for (let index = 0; less_than(index, count); index = index + 1) {
      let entry = list_get(entries, index);
      let split_place = property_get(entry, "split_place");
      let boundary = property_get(entry, "boundary");
      let number = list_get(numbers, index);
      each([split_place, boundary], html_clear);
      let b = begins_is(index);
      if (b) {
        card = app_shared_container_blue(groups_place);
        let head = html_div(card);
        html_centered(head);
        heading_draw(head, index);
      }
      let row = property_get(entry, "row");
      let actions = property_get(entry, "actions");
      function gather(piece) {
        html_parent_append(card, piece);
      }
      each([row, actions, boundary], gather);
      if (not(b)) {
        async function split() {
          "The verse was chosen only to say where the new group begins, so once it has begun the verse is let go again, by pressing its own number the way a reader would.";
          let row_element = html_component_element_get(row);
          let number_element = property_get(row_element, "firstElementChild");
          let number_button = html_component_wrap(number_element);
          html_click(number_button);
          splits = splits.concat([number]);
          await changed();
        }
        app_shared_button(split_place, "✂️ Begin new group", split);
      }
      let next = index + 1;
      if (less_than(next, count) && begins_is(next)) {
        let number_next = list_get(numbers, next);
        async function join() {
          function other_is(begun) {
            let b2 = equal(begun, number_next);
            let other = not(b2);
            return other;
          }
          splits = splits.filter(other_is);
          await changed();
        }
        app_shared_button_wide(boundary, "🔗 Join to next group", join);
      }
    }
  }
  async function status_show() {
    let unsent = await app_shared_unsent_all();
    let waiting = list_map_property(unsent, "key");
    if (list_includes(waiting, path)) {
      html_text_set(
        status,
        "⏳ Kept on this device - it will send when there is internet, or press Save",
      );
      return;
    }
    html_text_set(status, "✅ Saved");
  }
  async function save() {
    await app_chapter_group_splits_save(app_name, path, splits);
    await status_show();
    await app_shared_unsent_sync();
    await status_show();
  }
  async function changed() {
    touched = true;
    refresh();
    await save();
  }
}
