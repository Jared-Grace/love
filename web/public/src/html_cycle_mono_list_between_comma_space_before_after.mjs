import { html_cycle_mono } from "../../../love/public/src/html_cycle_mono.mjs";
import { list_between_comma_space_before_after } from "../../../love/public/src/list_between_comma_space_before_after.mjs";
export function html_cycle_mono_list_between_comma_space_before_after(
  ds,
  before,
  after,
  p3,
) {
  let squashed = list_between_comma_space_before_after(ds, before, after);
  html_cycle_mono(p3, squashed);
}
