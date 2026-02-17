import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
export function html_translation_transition_clear(el) {
  html_style_set(el, "transition", "");
  html_style_set(el, "transform", "");
}
