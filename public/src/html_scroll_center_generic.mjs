import { html_on_load } from "../../../love/public/src/html_on_load.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_scroll_center_generic(player_img_c, behavior) {
  let e = html_component_element_get(player_img_c);
  function lambda() {
    e.scrollIntoView({
      behavior: behavior,
      block: "center",
      inline: "center",
    });
  }
  html_on_load(lambda);
}
