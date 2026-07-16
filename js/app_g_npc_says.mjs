import { g_game_prefix } from "./g_game_prefix.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { html_img } from "./html_img.mjs";
import { g_character_img_url_direction } from "./g_character_img_url_direction.mjs";
import { g_gender_male } from "./g_gender_male.mjs";
import { g_gender_female } from "./g_gender_female.mjs";
import { app_g_container_color } from "./app_g_container_color.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_npc_says(npc, overlay, npc_says) {
  let gender = property_get(npc, "gender");
  let map = {
    [g_gender_female()]: "#ff80ea",
    [g_gender_male()]: "#acc1ff",
  };
  let color_background = property_get(map, gender);
  let container = app_g_container_color(overlay, color_background);
  let game_prefix = g_game_prefix();
  let c_src = g_character_img_url_direction(npc, "south");
  let component = html_img(container, c_src);
  let name_map = {
    [g_gender_female()]: "#a3006e",
    [g_gender_male()]: "#1a3aa0",
  };
  let name_color = property_get(name_map, gender);
  let name_npc = property_get(npc, "name");
  let label = app_g_p_text(container, text_combine(name_npc, " says:"));
  html_style_set(label, "color", name_color);
  html_bold_mild(label);
  let speech = app_g_p_text(container, npc_says);
  html_bold_mild(speech);
}
