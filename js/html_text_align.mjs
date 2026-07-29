import { html_style_set } from "./html_style_set.mjs";
export function html_text_align(component, alignment) {
  "which edge the text inside this component lines up against, and with it any inline children, which is how a row of cards is centered without moving the words inside each card";
  html_style_set(component, "text-align", alignment);
}
