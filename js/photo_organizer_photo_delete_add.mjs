import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_photos_source_remove } from "./app_shared_photos_source_remove.mjs";
import { photo_organizer_folder_put } from "./photo_organizer_folder_put.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_confirm_choices } from "./app_shared_confirm_choices.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
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
  "Under a photo opened from a folder, a red button to delete it. It asks first; yes takes the photo out of the folder on this phone and out of the row of small squares, then closes the photo, and back closes it with nothing changed.";
  arguments_assert(arguments, 5);
  async function on_confirm() {
    let photos = property_get(folder, "photos");
    app_shared_photos_source_remove(photos, source);
    await photo_organizer_folder_put(folder);
    html_remove(thumbnail);
    close();
  }
  function on_delete() {
    html_clear(screen);
    app_shared_confirm_choices({
      parent: screen,
      question:
        "Delete this photo? It is deleted from this phone and cannot be brought back.",
      button_confirm: app_shared_button_red,
      text_confirm: "🗑️ Yes, delete it",
      on_confirm,
      button_back: app_shared_button,
      text_back: app_shared_button_back_text(),
      on_back: close,
    });
  }
  app_shared_button_red(screen, "🗑️ Delete photo", on_delete);
}
