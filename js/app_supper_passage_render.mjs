import { each } from "./each.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { list_find_property_curried_right_2 } from "./list_find_property_curried_right_2.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_supper_texts_colored } from "./app_supper_texts_colored.mjs";
import { app_shared_spaced_small } from "./app_shared_spaced_small.mjs";
import { property_get } from "./property_get.mjs";
export function app_supper_passage_render(card, passage, remaining) {
  app_shared_spaced_small(card);
  function lambda(v) {
    let reference = property_get(v, "reference");
    let d = html_div_text_centered(card, reference);
    app_shared_text_deemphasized(d);
    let c = list_find_property_curried_right_2("reference", reference);
    let mapped = list_map(remaining, c);
    list_add_first(mapped, v);
    let texts = list_map_property(mapped, "text");
    app_supper_texts_colored(card, texts);
  }
  each(passage, lambda);
}
