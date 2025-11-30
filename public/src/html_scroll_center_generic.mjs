import { sleep } from "../../../love/public/src/sleep.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_scroll_center_generic(player_img_c, behavior) {
  async function html_scroll_center_generic(player_img_c, behavior) {
    let el = html_component_element_get(player_img_c);
    await new Promise(function lambda3(r) {
      function lambda2() {
        function lambda() {
          let v = requestAnimationFrame(r);
          return v;
        }
        let v2 = requestAnimationFrame(lambda);
        return v2;
      }
      let v3 = requestAnimationFrame(lambda2);
      return v3;
    });
    await sleep(10);
    el.scrollIntoView({
      behavior,
      block: "center",
      inline: "center",
    });
  }
}
