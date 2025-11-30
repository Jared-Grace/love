import { sleep } from "../../../love/public/src/sleep.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_scroll_center_generic(player_img_c, behavior) {
  let element2 = html_component_element_get(player_img_c);
  function lambda3() {
    async function lambda2() {
      function lambda() {
        element2.scrollIntoView({
          behavior: behavior,
          block: "center",
          inline: "center",
        });
      }
      await sleep(ms);
      setTimeout(lambda, 0);
    }
    requestAnimationFrame(lambda2);
  }
  requestAnimationFrame(lambda3);
}
