import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_position_fixed } from "./html_style_position_fixed.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { html_element } from "./html_element.mjs";
export function app_shared_photo_screen(picture_set) {
  "$plain picture_set";
  "Shows one photo on a screen of its own, as large as the window allows and never cropped, with a way back above it. picture_set is handed the empty picture and gives it its source, so a photo kept on this phone and one fetched from storage open the same way.";
  "The screen lies over the one it was opened from instead of replacing it, so going back finds everything as it was left, scrolled to the same place, with nothing redrawn.";
  "Opening it is also a step in the browser's history, so the phone's own back gesture closes the photo rather than leaving the app.";
  arguments_assert(arguments, 1);
  let screen = html_body_div();
  html_style_position_fixed(screen);
  html_style_set(screen, "inset", "0");
  html_style_set(screen, "z-index", "1000");
  html_style_set(screen, "display", "flex");
  html_style_set(screen, "flex-direction", "column");
  html_style_set(screen, "padding", "0.5em");
  html_style_set(screen, "box-sizing", "border-box");
  let background = app_shared_color_page_background();
  html_style_background_color_set(screen, background);
  function close() {
    html_remove(screen);
  }
  function on_back() {
    history.back();
  }
  app_shared_button_back(screen, on_back);
  let picture = html_element(screen, "img");
  html_style_set(picture, "flex", "1");
  html_style_set(picture, "min-height", "0");
  html_style_set(picture, "width", "100%");
  html_style_set(picture, "object-fit", "contain");
  picture_set(picture);
  history.pushState(null, "");
  window.addEventListener("popstate", close, {
    once: true,
  });
}
