import { html_scroll_center_container_generic } from "../../../love/public/src/html_scroll_center_container_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function html_scroll_center_container_now(
  player_img_c,
  container,
) {
  marker("1");
  const behavior = "auto";
  await html_scroll_center_container_generic(player_img_c, behavior);
}
