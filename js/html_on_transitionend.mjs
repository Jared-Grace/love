import { html_listener_remove } from "./html_listener_remove.mjs";
import { html_on } from "./html_on.mjs";
import { list_includes } from "./list_includes.mjs";
export async function html_on_transitionend(
  properties,
  c,
  on_transition_begin,
) {
  await new Promise(function lambda(resolve) {
    let type = "transitionend";
    let done = false;
    function finish() {
      if (done) {
        return;
      }
      done = true;
      html_listener_remove(c, type, handler);
      resolve();
    }
    function handler(e) {
      let includes = list_includes(properties, e.propertyName);
      if (includes) {
        finish();
      }
    }
    html_on(c, type, handler);
    on_transition_begin();
    setTimeout(finish, 400);
  });
}
