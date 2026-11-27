import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_photos_source_index } from "./app_shared_photos_source_index.mjs";
import { image_file_rotate_quarter_browser } from "./image_file_rotate_quarter_browser.mjs";
import { property_set } from "./property_set.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { photo_organizer_folder_put } from "./photo_organizer_folder_put.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_photos_source_remove } from "./app_shared_photos_source_remove.mjs";
import { app_shared_confirm_over_red } from "./app_shared_confirm_over_red.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
export function photo_organizer_photo_buttons_add(
  folder,
  redraw,
  screen,
  close,
  picture,
  source,
) {
  "$plain folder";
  "$plain redraw";
  "$plain screen";
  "$plain close";
  "$plain picture";
  "$plain source";
  "Under a photo opened from a folder: two buttons side by side turning it a quarter to the left or to the right (human, 2026-11-27: \"can there be rotate left and rotate right buttons for photos?\"), then a red button to delete it.";
  "A turn is kept on this phone at once as the photo itself drawn turned, so the open photo, the small squares, a download and the next visit all show it the new way; redraw draws the folder under the photo again from what is kept.";
  "Delete asks first, in the same box over the page the calendar asks in before cancelling a meeting (human, 2026-11-27: \"delete photo should use same DRY dialog from calendar app\"); yes takes the photo out of the folder and closes it, and keeping it closes only the box.";
  arguments_assert(arguments, 6);
  let photos = property_get(folder, "photos");
  let current = source;
  async function turn(turns) {
    let index = app_shared_photos_source_index(photos, current);
    if (less_than(index, 0)) {
      return;
    }
    let turned = await image_file_rotate_quarter_browser(current, turns);
    let object = property_get(photos, index);
    property_set(object, "file", turned);
    current = turned;
    html_media_source_file_set(picture, turned);
    await photo_organizer_folder_put(folder);
    await redraw();
  }
  let row = html_div(screen);
  html_display_flex(row);
  html_style_gap(row, "0.5em");
  async function on_left() {
    await turn(-1);
  }
  async function on_right() {
    await turn(1);
  }
  app_shared_button(row, "↺ Rotate left", on_left);
  app_shared_button(row, "↻ Rotate right", on_right);
  async function on_confirm() {
    app_shared_photos_source_remove(photos, current);
    await photo_organizer_folder_put(folder);
    await redraw();
    close();
  }
  function on_delete() {
    app_shared_confirm_over_red(
      "Delete this photo? It is deleted from this phone and cannot be brought back.",
      "🗑️ Yes, delete the photo",
      "Keep the photo",
      on_confirm,
    );
  }
  app_shared_button_red(screen, "🗑️ Delete photo", on_delete);
}
