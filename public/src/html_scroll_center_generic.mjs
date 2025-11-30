import { not } from "../../../love/public/src/not.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export async function html_scroll_center_generic(player_img_c, behavior) {
  let el = html_component_element_get(player_img_c);
  if (el.tagName === "IMG" && not(el.complete)) {
    await new Promise(function lambda(r) {
      let v = (el.onload = r);
      return v;
    });
  }
  await new Promise(function lambda4(r) {
    function lambda3() {
      function lambda2() {
        let v2 = requestAnimationFrame(r);
        return v2;
      }
      let v3 = requestAnimationFrame(lambda2);
      return v3;
    }
    let v4 = requestAnimationFrame(lambda3);
    return v4;
  });
  el.scrollIntoView({
    behavior,
    block: "center",
    inline: "center",
  });
}
