import { html_on } from "./html_on.mjs";
export function html_on_scroll(container, update) {
  let remove = html_on(container, "scroll", update);
  return remove;
}
