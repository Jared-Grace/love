import { app_g_npc_color } from "./app_g_npc_color.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { g_gender_male } from "./g_gender_male.mjs";
import { g_gender_female } from "./g_gender_female.mjs";
import { app_g_container_color } from "./app_g_container_color.mjs";
import { g_character_img_url_direction } from "./g_character_img_url_direction.mjs";
import { html_img_retry } from "./html_img_retry.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_npc_bubble(npc, overlay) {
  "the NPC's speech bubble WITHOUT its words — the gender-colored container, the south-facing avatar, and the bold 'Name says:' label. shared by the spoken-words bubble and the typing-dots bubble, so the avatar and name header live in ONE place";
  let gender = property_get(npc, "gender");
  let color_background = app_g_npc_color(npc);
  let container = app_g_container_color(overlay, color_background);
  let c_src = g_character_img_url_direction(npc, "south");
  let component = html_img_retry(container, c_src);
  html_display_block(component);
  html_style_margin(component, "0 auto");
  html_style_set(component, "width", "128px");
  html_style_set(component, "height", "128px");
  let name_map = {
    [g_gender_female()]: "#a3006e",
    [g_gender_male()]: "#1a3aa0",
  };
  let name_color = property_get(name_map, gender);
  let name_npc = property_get(npc, "name");
  let name = text_combine(name_npc, " says:");
  let label = app_g_p_text(container, name);
  html_font_color_set(label, name_color);
  html_style_margin_top(label, "-0.4em");
  html_bold_mild(label);
  return container;
}
