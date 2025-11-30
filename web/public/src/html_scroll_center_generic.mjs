import { marker } from "../../../love/public/src/marker.mjs";
import { html_scroll_center_generic_wait } from "../../../love/public/src/html_scroll_center_generic_wait.mjs";
export async function html_scroll_center_generic(player_img_c, behavior) {
  marker("1");
  let el = await html_scroll_center_generic_wait(player_img_c);
  el.scrollIntoView({
    behavior,
    block: "center",
    inline: "center",
  });
}
