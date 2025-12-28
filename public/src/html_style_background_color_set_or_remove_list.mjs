import { html_style_background_color_set_or_remove } from "../../../love/public/src/html_style_background_color_set_or_remove.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function html_style_background_color_set_or_remove_list(
  list,
  item,
  component,
) {
  let chosen = list_includes(list, item);
  html_style_background_color_set_or_remove(chosen, component, "lightgreen");
}
