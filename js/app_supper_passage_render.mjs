import { each } from "../../love/js/each.mjs";
import { html_div_text_centered } from "../../love/js/html_div_text_centered.mjs";
import { app_shared_text_deemphasized } from "../../love/js/app_shared_text_deemphasized.mjs";
import { list_find_property_curried_right_2 } from "../../love/js/list_find_property_curried_right_2.mjs";
import { list_map } from "../../love/js/list_map.mjs";
import { list_map_index } from "../../love/js/list_map_index.mjs";
import { list_get } from "../../love/js/list_get.mjs";
import { list_multiple_is } from "../../love/js/list_multiple_is.mjs";
import { list_add_first } from "../../love/js/list_add_first.mjs";
import { app_shared_bible_verse_texts } from "../../love/js/app_shared_bible_verse_texts.mjs";
import { app_shared_spaced_small } from "../../love/js/app_shared_spaced_small.mjs";
import { property_get } from "../../love/js/property_get.mjs";
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
    app_shared_bible_verse_texts(card, entries);
  }
  each(passage, lambda);
}
