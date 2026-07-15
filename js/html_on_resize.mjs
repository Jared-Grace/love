import { html_on_window } from "./html_on_window.mjs";
export function html_on_resize(lambda) {
  let remove = html_on_window("resize", lambda);
  return remove;
}
