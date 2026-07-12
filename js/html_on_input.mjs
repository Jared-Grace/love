import { html_on } from "./html_on.mjs";
export function html_on_input(component, lambda) {
  let name_event = "input";
  html_on(component, name_event, lambda);
}
