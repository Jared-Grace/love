import { html_style_set } from "./html_style_set.mjs";
export function html_style_max_width(component, value) {
  "the widest this component may be drawn: a width already asked for still applies below the value, so a ceiling holds a component that would otherwise fill its column down to a size somebody chose";
  html_style_set(component, "max-width", value);
}
