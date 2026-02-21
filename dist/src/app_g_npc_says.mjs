import { app_g_p_text } from "../../../love/public/src/app_g_p_text.mjs";
import { html_img } from "../../../love/public/src/html_img.mjs";
import { g_character_img_url } from "../../../love/public/src/g_character_img_url.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { g_gender_male } from "../../../love/public/src/g_gender_male.mjs";
import { g_gender_female } from "../../../love/public/src/g_gender_female.mjs";
import { app_g_container } from "../../../love/public/src/app_g_container.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_g_npc_says(npc, overlay, game_prefix, npc_says) {
  let gender = property_get(npc, "gender");
  let container = app_g_container(overlay);
  let map = {
    [g_gender_female()]: "#ff80ea",
    [g_gender_male()]: "#acc1ff",
  };
  let color_background = property_get(map, gender);
  html_style_assign(container, {
    "background-color": color_background + "bc",
  });
  const c_src = g_character_img_url(npc, game_prefix);
  let component = html_img(container, c_src);
  let name_npc = property_get(npc, "name");
  app_g_p_text(container, name_npc + " says: " + npc_says);
}
