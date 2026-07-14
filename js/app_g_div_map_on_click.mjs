import { html_on_click } from "./html_on_click.mjs";
import { app_g_click } from "./app_g_click.mjs";
export function app_g_div_map_on_click(div_map, player_img_c) {
  async function on_click(e) {
    await app_g_click(e, div_map, player_img_c);
  }
  html_on_click(div_map, on_click);
}
