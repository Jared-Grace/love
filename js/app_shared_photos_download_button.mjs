import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_photos_download } from "./app_shared_photos_download.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
export function app_shared_photos_download_button(
  parent,
  photos_holder,
  name_start,
) {
  "$plain parent";
  "$plain photos_holder";
  "$plain name_start";
  "A button saving the photos of whatever holds them to the phone: Download photo when it holds one, Download all, with how many, when it holds more, and nothing at all when it holds none. The files are named from name_start.";
  "Hands back the function that draws the button again, for when a photo has just been added.";
  arguments_assert(arguments, 3);
  let holder = html_div(parent);
  function draw() {
    html_clear(holder);
    let photos = property_get(photos_holder, "photos");
    let count = photos.length;
    if (equal(count, 0)) {
      return;
    }
    let v = String(count);
    let words = equal(count, 1)
      ? "Download photo"
      : text_combine_multiple(["Download all ", v, " photos"]);
    async function on_download() {
      await app_shared_photos_download(photos, name_start);
    }
    let e = emoji_arrow_down();
    let text = text_combine_multiple([e, " ", words]);
    app_shared_button_wide(holder, text, on_download);
  }
  draw();
  return draw;
}
