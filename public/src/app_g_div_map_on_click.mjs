import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { app_g_click } from "../../../love/public/src/app_g_click.mjs";
import { app_g_refresh } from "../../../love/public/src/app_g_refresh.mjs";
export function app_g_div_map_on_click(context, div_map, player_img_c) {
  async function on_click(e) {
    async function refresh() {
      await app_g_refresh(context, div_map_container);
    }
    await app_g_click(e, div_map, player_img_c, refresh);
  }
  html_on_click(div_map, on_click);
}
