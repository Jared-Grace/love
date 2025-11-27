import { html_on } from "../../../love/public/src/html_on.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export async function html_on_transitionend(
  properties,
  player_img_c,
  on_transition_begin,
) {
  await new Promise(function lambda20(resolve) {
    function handler(e) {
      let includes = list_includes(properties, e.propertyName);
      if (includes) {
        let element2 = html_component_element_get(player_img_c);
        element2.removeEventListener("transitionend", handler);
        resolve();
      }
    }
    html_on(player_img_c, "transitionend", handler);
    on_transition_begin();
  });
}
