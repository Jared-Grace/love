import { html_div } from "./html_div.mjs";
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
  "a quiet top bar on every lesson screen - a small home button (just the house) sitting right beside the lesson title, the pair centered together, so home is one tap away without scrolling to the bottom and reads as part of the header rather than floating alone in a corner; the title reuses the lesson's own home title (app_code_lesson_title_render) and is muted so it anchors 'where am I' without competing with the teaching or the quiz below, while the home button stays full-strength so it is clearly tappable";
  let strip = app_code_container_padded_x(root);
  html_style_assign(strip, {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "column-gap": "0.5em",
  });
  html_style_margin_y(strip, app_shared_spaced_gap());
  async function go_home() {
    await app_shared_screen_set(context, app_code_home);
  }
  app_shared_button(strip, emoji_home(), go_home);
  let title = html_div(strip);
  html_style_assign(title, {
    "text-align": "center",
    "font-size": "0.85em",
    opacity: "0.6",
  });
  app_code_lesson_title_render(title, lesson);
  return strip;
}
