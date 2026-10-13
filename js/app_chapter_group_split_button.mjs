import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { html_click } from "./html_click.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_chapter_group_split_button(entry, on_split) {
  "$plain entry";
  "On a verse that does not already begin a group, the button that begins one there. It sits among what a chosen verse offers, so it shows only while the verse is chosen.";
  "The verse was chosen only to say where the new group begins, so once it has begun the verse is let go again, by pressing its own number the way a reader would.";
  arguments_assert(arguments, 2);
  let split_place = property_get(entry, "split_place");
  let row = property_get(entry, "row");
  let number = property_get(entry, "verse_number");
  async function split() {
    let row_element = html_component_element_get(row);
    let number_element = property_get(row_element, "firstElementChild");
    let number_button = html_component_wrap(number_element);
    html_click(number_button);
    await on_split(number);
  }
  app_shared_button(split_place, "✂️ Begin new group", split);
}
