import { each } from "./each.mjs";
import { html_p } from "./html_p.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { list_find_property_curried_right_2 } from "./list_find_property_curried_right_2.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_supper_texts_colored } from "./app_supper_texts_colored.mjs";
import { property_get } from "./property_get.mjs";
export function app_supper_passage_render(card, passage, remaining) {
  function lambda(v) {
    let reference = property_get(v, "reference");
    let p = html_p(card);
    html_style_margin_y(p, "0.25em");
    let d = html_div_text_centered(p, reference);
    html_font_color_set(d, "#1e3a8a");
    let c = list_find_property_curried_right_2("reference", reference);
    let mapped = list_map(remaining, c);
    list_add_first(mapped, v);
    let texts = list_map_property(mapped, "text");
    app_supper_texts_colored(p, texts);
  }
  each(passage, lambda);
}
