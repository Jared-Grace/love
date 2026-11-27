import { modulo } from "./modulo.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_position_fixed } from "./html_style_position_fixed.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { html_element } from "./html_element.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_picture_download } from "./app_shared_picture_download.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_photo_picture_set } from "./app_shared_photo_picture_set.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_photo_source } from "./app_shared_photo_source.mjs";
export function app_shared_photos_screen(photos_holder, index, buttons_add) {
  "$plain photos_holder";
  "$plain index";
  "$plain buttons_add";
  "Shows the photo at index among the photos of whatever holds them on a screen of its own, as large as the window allows and never cropped, with a way back above it and a button under it saving it to the phone.";
  "When there are several, Previous and Next buttons under the photo step through them, saying which one of how many is shown, and go round from the last to the first and back (human, 2026-11-27: \"there should be buttons for next and previous photos when photo opened\"). The photos are read from what holds them at every step, so a photo added, turned or taken away since the screen opened is seen as it is now.";
  "Under the download, buttons_add is handed a place on the screen, the way to close the screen, the large picture, and the shown photo's file or address, to draw whatever else only some apps let a photo have done to it, such as turning or deleting it; it is drawn again for each photo stepped to.";
  "The screen lies over the one it was opened from instead of replacing it, so going back finds everything as it was left, scrolled to the same place. Opening it is also a step in the browser's history, so the phone's own back gesture closes the photo rather than leaving the app.";
  arguments_assert(arguments, 3);
  let screen = html_body_div();
  html_style_position_fixed(screen);
  html_style_set(screen, "inset", "0");
  html_style_set(screen, "z-index", "1000");
  html_display_flex(screen);
  html_style_set(screen, "flex-direction", "column");
  html_style_padding(screen, "0.5em");
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
  html_style_flex(picture, "1");
  html_style_set(picture, "min-height", "0");
  html_width_full(picture);
  html_style_set(picture, "object-fit", "contain");
  let steps = html_div(screen);
  html_display_flex(steps);
  html_style_gap(steps, "0.5em");
  html_style_set(steps, "align-items", "center");
  html_style_set(steps, "justify-content", "center");
  let at = index;
  function step(by) {
    let count = property_get(photos_holder, "photos").length;
    at = modulo(at + by + count, count);
    show();
  }
  function on_previous() {
    step(-1);
  }
  function on_next() {
    step(1);
  }
  app_shared_button(steps, "◀ Previous", on_previous);
  let counter = html_div_text(steps, "");
  app_shared_button(steps, "Next ▶", on_next);
  async function on_download() {
    await app_shared_picture_download(picture);
  }
  let e = emoji_arrow_down();
  let text = text_combine_multiple([e, " Download"]);
  app_shared_button_wide(screen, text, on_download);
  let extras = html_div(screen);
  function show() {
    let photos = property_get(photos_holder, "photos");
    let photo = property_get(photos, at);
    app_shared_photo_picture_set(picture, photo);
    html_style_set(
      steps,
      "display",
      greater_than(photos.length, 1) ? "flex" : "none",
    );
    let v = String(at + 1);
    let v2 = String(photos.length);
    let text2 = text_combine_multiple([v, " of ", v2]);
    html_text_set(counter, text2);
    html_clear(extras);
    let value = app_shared_photo_source(photo);
    buttons_add(extras, on_back, picture, value);
  }
  show();
  history.pushState(null, "");
  window.addEventListener("popstate", close, {
    once: true,
  });
}
