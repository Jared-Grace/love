import { marker } from "../../../love/public/src/marker.mjs";
import { html_scroll_center_generic } from "../../../love/public/src/html_scroll_center_generic.mjs";
export function html_scroll_center_now(player_img_c) {
  marker("1");
  const behavior = "smooth";
  html_scroll_center_generic(player_img_c, behavior);
}
