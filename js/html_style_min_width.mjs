import { html_style_set } from "./html_style_set.mjs";
export function html_style_min_width(component, value) {
  "the narrowest this component may be drawn: content wider than the value still widens it, so a floor evens up a set of components without ever clipping the widest one";
  html_style_set(component, "min-width", value);
}
