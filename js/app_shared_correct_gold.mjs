import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_correct_gold(element) {
  "soft-gold background + outline marking a revealed-correct choice; pairs with app_*_glow_correct; shared by app_code's correct answer and app_g's pray-discerned choice";
  html_style_background_color_set(element, "#fff3cd");
  html_style_set(element, "outline", "0.05em solid #ecd98f");
}
