import { each } from "./each.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { list_find_property_curried_right_2 } from "./list_find_property_curried_right_2.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_get } from "./list_get.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { app_shared_verse_texts } from "./app_shared_verse_texts.mjs";
import { app_shared_spaced_small } from "./app_shared_spaced_small.mjs";
import { property_get } from "./property_get.mjs";
export function app_supper_passage_render(card, passage, remaining, names) {
  app_shared_spaced_small(card);
  let multiple = list_multiple_is(names);
  function lambda(v) {
    let reference = property_get(v, "reference");
    let d = html_div_text_centered(card, reference);
    app_shared_text_deemphasized(d);
    let c = list_find_property_curried_right_2("reference", reference);
    let mapped = list_map(remaining, c);
    list_add_first(mapped, v);
    function to_entry(verse, index) {
      let name = "";
      if (multiple) {
        name = list_get(names, index);
      }
      let entry = {
        name,
        text: property_get(verse, "text"),
      };
      return entry;
    }
    let entries = list_map_index(mapped, to_entry);
    app_shared_verse_texts(card, entries);
  }
  each(passage, lambda);
}
