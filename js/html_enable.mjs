import { html_disable_set } from "./html_disable_set.mjs";
export function html_enable(b) {
  let disabled = false;
  html_disable_set(b, disabled);
}
