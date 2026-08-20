import { html_style_set } from "./html_style_set.mjs";
export function html_text_decoration(component, value) {
  "set the line a browser draws through or under a piece of writing - the underline a link is given by default, most often being taken off again";
  html_style_set(component, "textDecoration", value);
}
