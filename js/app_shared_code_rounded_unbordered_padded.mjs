import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_border_none } from "./html_border_none.mjs";
import { app_shared_code_padding_x } from "./app_shared_code_padding_x.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
export function app_shared_code_rounded_unbordered_padded(component) {
  "Gives a piece of the page the shape every run of code on it wears - corners rounded by the shared amount, no line drawn around it, and the shared amount of room to its left and right.";
  "The three go together because they are one look rather than three choices. A rounded box with a line still drawn around it reads as a field waiting to be typed in, and a rounded box with its text against the edge reads as a mistake, so a caller that wanted only one of the three would be asking for a shape nothing here uses.";
  "Nothing is said about colour. What colour a run of code is depends on what it is saying and where it is standing, and that is the one part each caller decides for itself.";
  let border_radius = app_shared_border_radius();
  html_border_radius(component, border_radius);
  html_border_none(component);
  let value = app_shared_code_padding_x();
  html_style_padding_x(component, value);
}
