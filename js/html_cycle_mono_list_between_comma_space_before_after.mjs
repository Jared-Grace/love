import { html_cycle_mono } from "./html_cycle_mono.mjs";
import { list_between_comma_space_before_after } from "./list_between_comma_space_before_after.mjs";
export function html_cycle_mono_list_between_comma_space_before_after(
  parent,
  before,
  list,
  after,
) {
  let squashed = list_between_comma_space_before_after(before, list, after);
  html_cycle_mono(parent, squashed);
}
