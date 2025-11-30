import { html_scroll_center_container_generic } from "../../../love/public/src/html_scroll_center_container_generic.mjs";
export async function html_scroll_center_container(player_img_c) {
  const behavior = "smooth";
  await html_scroll_center_container_generic(player_img_c, behavior);
}
