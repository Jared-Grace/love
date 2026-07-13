import { g_game_prefix } from "./g_game_prefix.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { html_img } from "./html_img.mjs";
import { g_character_img_url } from "./g_character_img_url.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_gender_male } from "./g_gender_male.mjs";
import { g_gender_female } from "./g_gender_female.mjs";
import { app_g_container } from "./app_g_container.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_npc_says(npc, overlay, npc_says) {
  let gender = property_get(npc, "gender");
  let container = app_g_container(overlay);
  let map = {
    [g_gender_female()]: "#ff80ea",
    [g_gender_male()]: "#acc1ff",
  };
  let color_background = property_get(map, gender);
  html_style_set(
    container,
    "background-color",
    text_combine(color_background, "bc"),
  );
  let game_prefix = g_game_prefix();
  let c_src = g_character_img_url(npc);
  let component = html_img(container, c_src);
  let name_npc = property_get(npc, "name");
  app_g_p_text(
    container,
    text_combine_multiple([name_npc, " says: ", npc_says]),
  );
}
