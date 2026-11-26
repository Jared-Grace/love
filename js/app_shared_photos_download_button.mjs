import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_photo_download } from "./app_shared_photo_download.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_shared_photos_download_button(
  parent,
  photos_holder,
  name_start,
) {
  "$plain parent";
  "$plain photos_holder";
  "$plain name_start";
  "A button saving the photos of whatever holds them to the phone: Download photo when it holds one, and nothing at all when it holds none. The file is named from name_start.";
  "When it holds more, each press saves the next one, the button saying which - Download photo 2 of 4 - and starting again at the first after the last; each file is named from name_start and its number.";
  "One photo a press, because a phone handed several downloads in a row kept only some of them, a different few each time (human 2026-11-26: 1 and 4 of 4, then 1, 3 and 4); a download started by a press is never dropped.";
  "Hands back the function that draws the button again, for when a photo has just been added.";
  arguments_assert(arguments, 3);
  let holder = html_div(parent);
  let next = 0;
  function draw() {
    html_clear(holder);
    let photos = property_get(photos_holder, "photos");
    let count = photos.length;
    if (equal(count, 0)) {
      return;
    }
    let b = less_than(next, count);
    if (not(b)) {
      next = 0;
    }
    let number = String(next + 1);
    let b2 = equal(count, 1);
    let many = not(b2);
    let v = String(count);
    let words = many
      ? text_combine_multiple(["Download photo ", number, " of ", v])
      : "Download photo";
    async function on_download() {
      let photo = photos[next];
      let name = many
        ? text_combine_multiple([name_start, " ", number])
        : name_start;
      next = next + 1;
      draw();
      await app_shared_photo_download(photo, name);
    }
    let e = emoji_arrow_down();
    let text = text_combine_multiple([e, " ", words]);
    app_shared_button_wide(holder, text, on_download);
  }
  draw();
  return draw;
}
