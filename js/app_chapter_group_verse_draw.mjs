import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_parent_get } from "./html_parent_get.mjs";
import { html_centered } from "./html_centered.mjs";
import { list_add } from "./list_add.mjs";
export function app_chapter_group_verse_draw(entries, actions, verse_number) {
  "$plain entries";
  "$plain actions";
  "$plain verse_number";
  "The two empty places one verse gives the grouping, written down in the order the verses are drawn: one among the buttons a chosen verse shows, where beginning a new group is offered, and one under the verse, where a group ends and the next begins.";
  "They are left empty here because how the chapter is divided is not known yet while the verses are being drawn - it is fetched once they all are, and whatever fills these is drawn again each time the division changes.";
  "The place under the verse is made straight after its buttons, in the same column, so it sits between this verse and the next without the reader having to hand over where that is.";
  arguments_assert(arguments, 3);
  let split_place = html_div(actions);
  let content = html_parent_get(actions);
  let boundary = html_div(content);
  html_centered(boundary);
  list_add(entries, {
    verse_number,
    split_place,
    boundary,
  });
}
