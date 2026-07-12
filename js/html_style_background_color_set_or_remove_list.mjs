import { html_style_background_color_set_or_remove } from "./html_style_background_color_set_or_remove.mjs";
import { list_includes } from "./list_includes.mjs";
export function html_style_background_color_set_or_remove_list(
  component,
  list,
  item,
) {
  let chosen = list_includes(list, item);
  html_style_background_color_set_or_remove(chosen, component, "lightgreen");
}
