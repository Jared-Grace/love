import { html_disabled_set } from "./html_disabled_set.mjs";
export function html_enable(b) {
  let disabled = false;
  html_disabled_set(b, disabled);
}
