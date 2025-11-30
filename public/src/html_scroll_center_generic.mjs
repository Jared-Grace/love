import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_scroll_center_generic(player_img_c, behavior) {
  let element2 = html_component_element_get(player_img_c);
  function lambda2() {
    function lambda() {
      element2.scrollIntoView({
        behavior: behavior,
        block: "center",
        inline: "center",
      });
    }
    setTimeout(lambda, 50);
  }
  window.requestAnimationFrame(lambda2);
}
