import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_position_relative } from "./html_style_position_relative.mjs";
import { html_style_z_index } from "./html_style_z_index.mjs";
import { html_z_index_flying } from "./html_z_index_flying.mjs";
export function html_raised_flying(component) {
  arguments_assert(arguments, 1);
  ("lift a piece in front of everything else on the page while it travels, without moving it or taking any of its room away");
  ("Both halves are needed and neither works alone: a piece is only ever given a height above the page once it has been taken off the page's own reckoning of where things stand, and being taken off that reckoning is exactly what keeping its room means here.");
  html_style_position_relative(component);
  let value = html_z_index_flying();
  html_style_z_index(component, value);
}
