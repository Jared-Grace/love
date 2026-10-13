import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { app_chapter_group_begins_is } from "./app_chapter_group_begins_is.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_chapter_group_group_numbers } from "./app_chapter_group_group_numbers.mjs";
import { app_chapter_group_heading_draw } from "./app_chapter_group_heading_draw.mjs";
import { app_chapter_group_entry_gather } from "./app_chapter_group_entry_gather.mjs";
import { not } from "./not.mjs";
import { app_chapter_group_split_button } from "./app_chapter_group_split_button.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_chapter_group_groups_draw({
  groups_place,
  entries,
  splits,
  chapter_code,
  texts,
  on_split,
  on_join,
}) {
  "$plain groups_place";
  "$plain entries";
  "$plain splits";
  "$plain chapter_code";
  "$plain texts";
  "Draws the chapter as its groups: every group in a box of its own, the same box the supper passages sit in, with its heading at the top and then its verses; on a verse that does not begin a group, a button that begins one there; and under the last verse of every group but the last, a button that joins it to the next.";
  "Only the boxes, headings and buttons are drawn; the verses are moved into the boxes as they are.";
  arguments_assert(arguments, 1);
  html_clear(groups_place);
  let numbers = list_map_property(entries, "verse_number");
  let count = list_size(entries);
  let card = null;
  for (let index = 0; less_than(index, count); index = index + 1) {
    let entry = list_get(entries, index);
    let begins = app_chapter_group_begins_is(numbers, splits, index);
    if (begins) {
      card = app_shared_container_blue(groups_place);
      let head = html_div(card);
      html_centered(head);
      let group = app_chapter_group_group_numbers(numbers, splits, index);
      app_chapter_group_heading_draw(head, chapter_code, group, texts);
    }
    app_chapter_group_entry_gather(card, entry);
    if (not(begins)) {
      app_chapter_group_split_button(entry, on_split);
    }
    let next = index + 1;
    if (
      less_than(next, count) &&
      app_chapter_group_begins_is(numbers, splits, next)
    ) {
      let number_next = list_get(numbers, next);
      async function join() {
        await on_join(number_next);
      }
      let boundary = property_get(entry, "boundary");
      app_shared_button_wide(boundary, "🔗 Join to next group", join);
    }
  }
}
