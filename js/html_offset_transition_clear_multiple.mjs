import { each } from "./each.mjs";
import { html_offset_transition_clear } from "./html_offset_transition_clear.mjs";
export function html_offset_transition_clear_multiple(list) {
  each(list, html_offset_transition_clear);
}
