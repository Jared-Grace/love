import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_photos_source_remove } from "./app_shared_photos_source_remove.mjs";
import { photo_organizer_folder_put } from "./photo_organizer_folder_put.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_shared_confirm_over_red } from "./app_shared_confirm_over_red.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
export function photo_organizer_photo_delete_add(
  folder,
  screen,
  close,
  thumbnail,
  source,
) {
  "$plain folder";
  "$plain screen";
  "$plain close";
  "$plain thumbnail";
  "$plain source";
  "Under a photo opened from a folder, a red button to delete it. It asks first, in the same box over the page the calendar asks in before cancelling a meeting (human, 2026-11-27: \"delete photo should use same DRY dialog from calendar app\"); yes takes the photo out of the folder on this phone and out of the row of small squares, then closes the photo, and keeping it closes only the box, leaving the photo open.";
  arguments_assert(arguments, 5);
  async function on_confirm() {
    let photos = property_get(folder, "photos");
    app_shared_photos_source_remove(photos, source);
    await photo_organizer_folder_put(folder);
    html_remove(thumbnail);
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
