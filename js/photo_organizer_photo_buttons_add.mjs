import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_photos_source_index } from "./app_shared_photos_source_index.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { url_blob_browser } from "./url_blob_browser.mjs";
import { image_file_rotate_quarter_browser } from "./image_file_rotate_quarter_browser.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
import { file_extension_from_type } from "./file_extension_from_type.mjs";
import { photo_organizer_photo_upload } from "./photo_organizer_photo_upload.mjs";
import { property_set } from "./property_set.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { photo_organizer_folder_put } from "./photo_organizer_folder_put.mjs";
import { photo_organizer_photos_delete } from "./photo_organizer_photos_delete.mjs";
import { html_loading } from "./html_loading.mjs";
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
  "A turn is kept online at once as the photo itself drawn turned, so the open photo, the small squares, a download and the next visit all show it the new way; redraw draws the folder under the photo again from what is kept.";
  "The turned photo is sent under a new name, the folder is kept pointing at it, and only then is the old picture deleted - so a turn stopped partway leaves a spare picture behind, never a folder pointing at nothing; and a new name means no phone keeps showing the old picture from what it saved last time.";
  "Only the owner signed in is shown these buttons; storage refuses anybody else.";
  "Delete asks first, in the same box over the page the calendar asks in before cancelling a meeting (human, 2026-11-27: \"delete photo should use same DRY dialog from calendar app\"); yes takes the photo out of the folder and closes it, and keeping it closes only the box.";
  arguments_assert(arguments, 6);
  let photos = property_get(folder, "photos");
  let current = source;
  async function turn_now(turns) {
    let index = app_shared_photos_source_index(photos, current);
    if (less_than(index, 0)) {
      return;
    }
    let bytes = current;
    if (equal(typeof current, "string")) {
      bytes = await url_blob_browser(current);
    }
    let turned = await image_file_rotate_quarter_browser(bytes, turns);
    let object = property_get(photos, index);
    let before = {
      name: property_get(object, "name"),
    };
    let built = uuid_browser();
    let after = file_extension_from_type(turned.type);
    let name = text_combine_multiple([built, ".", after]);
    await photo_organizer_photo_upload(name, turned);
    property_set(object, "name", name);
    property_set(object, "file", turned);
    current = turned;
    html_media_source_file_set(picture, turned);
    await photo_organizer_folder_put(folder);
    await photo_organizer_photos_delete([before]);
    await redraw();
  }
  async function turn(turns) {
    async function lambda() {
      await turn_now(turns);
    }
    await html_loading(lambda);
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
  async function delete_now() {
    let index = app_shared_photos_source_index(photos, current);
    if (less_than(index, 0)) {
      return;
    }
    let gone = property_get(photos, index);
    app_shared_photos_source_remove(photos, current);
    await photo_organizer_folder_put(folder);
    await photo_organizer_photos_delete([gone]);
    await redraw();
  }
  async function on_confirm() {
    await html_loading(delete_now);
    close();
  }
  function on_delete() {
    app_shared_confirm_over_red(
      "Delete this photo? It is deleted for everyone and cannot be brought back.",
      "🗑️ Yes, delete the photo",
      "Keep the photo",
      on_confirm,
    );
  }
  app_shared_button_red(screen, "🗑️ Delete photo", on_delete);
}
