import { html_on } from "./html_on.mjs";
export function html_on_change(component, lambda) {
  let name_event = "change";
  html_on(component, name_event, lambda);
}
