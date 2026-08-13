import { list_map_property } from "./list_map_property.mjs";
import { app_shared_bible_entries_names_texts } from "./app_shared_bible_entries_names_texts.mjs";
import { app_shared_bible_verse_block } from "./app_shared_bible_verse_block.mjs";
import { each } from "./each.mjs";
import { list_find_property_curried_right_2 } from "./list_find_property_curried_right_2.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { app_shared_spaced_small } from "./app_shared_spaced_small.mjs";
import { property_get } from "./property_get.mjs";
export function app_supper_passage_render(card, passage, remaining, names) {
  app_shared_spaced_small(card);
  function lambda(v) {
    let reference = property_get(v, "reference");
    let c = list_find_property_curried_right_2("reference", reference);
    let mapped = list_map(remaining, c);
    list_add_first(mapped, v);
    let texts = list_map_property(mapped, "text");
    let entries = app_shared_bible_entries_names_texts(names, texts);
    app_shared_bible_verse_block(card, reference, entries);
  }
  each(passage, lambda);
}
