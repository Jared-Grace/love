import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { property_get } from "./property_get.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
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
  ("The verse itself is the thing drawn just before its buttons, and it is written down too, so a group can gather its verses into one box.");
  let element = html_component_element_get(actions);
  let before = property_get(element, "previousElementSibling");
  let row = html_component_wrap(before);
  let split_place = html_div(actions);
  let content = html_parent_get(actions);
  let boundary = html_div(content);
  html_centered(boundary);
  list_add(entries, {
    verse_number,
    row,
    actions,
    split_place,
    boundary,
  });
}
