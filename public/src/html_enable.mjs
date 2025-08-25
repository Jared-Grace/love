import { html_disable_set } from "./html_disable_set.mjs";
export function html_enable(b) {
  const disabled = true;
  html_disable_set(b, disabled);
}
