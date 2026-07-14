import { list_includes } from "./list_includes.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { app_shared_verse_selected_background_color } from "./app_shared_verse_selected_background_color.mjs";
import { html_style_background_color_set_or_remove } from "./html_style_background_color_set_or_remove.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_remove } from "./html_style_remove.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
export function app_chapter_verse_highlight(component, sliced, verse_number) {
  let chosen = list_includes(sliced, verse_number);
  let color = app_shared_verse_selected_background_color();
  html_style_background_color_set_or_remove(chosen, component, color);
  if (chosen) {
    let radius = app_shared_border_radius();
    let first = list_first(sliced);
    let last = list_last(sliced);
    let top = "0";
    if (first === verse_number) {
      top = radius;
    }
    let bottom = "0";
    if (last === verse_number) {
      bottom = radius;
    }
    let value = text_combine_multiple([top, " ", top, " ", bottom, " ", bottom]);
    html_border_radius(component, value);
  } else {
    html_style_remove(component, "border-radius");
  }
}
