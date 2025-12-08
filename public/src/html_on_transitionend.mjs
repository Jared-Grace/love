import { html_listener_remove } from "../../../love/public/src/html_listener_remove.mjs";
import { html_on } from "../../../love/public/src/html_on.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export async function html_on_transitionend(
  properties,
  c,
  on_transition_begin,
) {
  await new Promise(function lambda20(resolve) {
    function handler(e) {
      let includes = list_includes(properties, e.propertyName);
      if (includes) {
        const type = "transitionend";
        html_listener_remove(c, type, handler);
        resolve();
      }
    }
    html_on(c, "transitionend", handler);
    on_transition_begin();
  });
}
