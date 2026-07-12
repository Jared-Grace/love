import { object_merge } from "./object_merge.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_text_left_centered } from "./html_style_text_left_centered.mjs";
import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
export function app_replace_button_wide_text_left_centered(
  root,
  lambda,
  text_left,
  text_centered,
) {
  let button = app_replace_button_wide(root, "", lambda);
  let r = html_style_text_left_centered(button, text_left, text_centered);
  let title = property_get(r, "title");
  html_style_set(title, "line-height", 1.5);
  object_merge(r, {
    button,
  });
  return r;
}
