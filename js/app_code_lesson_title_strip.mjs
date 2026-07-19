import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_code_lesson_title_render } from "./app_code_lesson_title_render.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_home } from "./app_code_home.mjs";
export function app_code_lesson_title_strip(root, context, lesson) {
  "a quiet top bar on every lesson screen - a small home button (just the house) on the left for one-tap escape without scrolling to the bottom, and the lesson's own home title (reused via app_code_lesson_title_render) centered and muted so it anchors 'where am I' after a deep-link or a return without competing with the teaching or the quiz question below; a spacer the same width as the home button on the right keeps the title truly centered, and only the title is muted so the home button stays clearly tappable";
  let strip = app_code_container_padded_x(root);
  html_style_assign(strip, {
    display: "flex",
    "align-items": "center",
  });
  html_style_margin_y(strip, app_shared_spaced_gap());
  let side = "2.5em";
  let left = html_div(strip);
  html_style_set(left, "width", side);
  async function go_home() {
    await app_shared_screen_set(context, app_code_home);
  }
  app_shared_button(left, emoji_home(), go_home);
  let title = html_div(strip);
  html_style_assign(title, {
    flex: "1",
    "text-align": "center",
    "font-size": "0.85em",
    opacity: "0.6",
  });
  app_code_lesson_title_render(title, lesson);
  let right = html_div(strip);
  html_style_set(right, "width", side);
  return strip;
}
