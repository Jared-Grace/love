import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { invoke_multiple } from "./invoke_multiple.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_first } from "./list_first.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { html_scroll_center_now } from "./html_scroll_center_now.mjs";
export async function app_shared_bible_read_resume(
  verse_numbers_chosen,
  updates,
  verse_rows,
) {
  arguments_assert(arguments, 3);
  if (list_empty_is(verse_numbers_chosen)) {
    return;
  }
  invoke_multiple(updates);
  let property_name = verse_number_key();
  let ordered = list_map_property(verse_rows, property_name);
  let item = list_first(verse_numbers_chosen);
  let index = list_index_of(ordered, item);
  if (greater_than_equal(index, 0)) {
    let component = list_get_property(verse_rows, index, "p");
    await html_scroll_center_now(component);
  }
}
