import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_parent_append } from "./html_parent_append.mjs";
export function app_chapter_group_entry_gather(card, entry) {
  "$plain card";
  "$plain entry";
  "Moves one verse into the box of its group: its line, what it offers when chosen, and the place under it where a join button may go. The two places buttons are drawn into are emptied first, so drawing again never leaves an old button behind.";
  "The verse is moved and not drawn again, so the chapter does not move under the reader's finger.";
  arguments_assert(arguments, 2);
  let split_place = property_get(entry, "split_place");
  let boundary = property_get(entry, "boundary");
  each([split_place, boundary], html_clear);
  let row = property_get(entry, "row");
  let actions = property_get(entry, "actions");
  function gather(piece) {
    html_parent_append(card, piece);
  }
  each([row, actions, boundary], gather);
}
