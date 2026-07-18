import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_scripture_gold(element) {
  "the written-Word gold SURFACE — soft-gold background + gold outline + dark-amber text — marking displayed Scripture (gold = God's written word); also the base for the revealed-correct choice (app_shared_correct_gold)";
  html_style_background_color_set(element, "#fff3cd");
  html_style_set(element, "outline", "0.05em solid #ecd98f");
  html_style_set(element, "color", "#4a3a00");
}
