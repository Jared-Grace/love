import { html_on } from "../../../love/public/src/html_on.mjs";
export function html_on_resize(update) {
  html_on(window, "resize", update);
}
