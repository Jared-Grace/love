import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
import { photo_organizer_folder_keys_within } from "./photo_organizer_folder_keys_within.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { photo_organizer_folders_delete } from "./photo_organizer_folders_delete.mjs";
import { app_shared_confirm_choices } from "./app_shared_confirm_choices.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
export function photo_organizer_folder_delete_screen(
  root,
  folders,
  folder,
  open,
) {
  "$plain root";
  "$plain folders";
  "$plain folder";
  "$plain open";
  "Asks before deleting a folder, saying how much goes with it: every folder inside it at any depth, and every photo in any of them, all off this phone for good. Yes deletes them and opens the folder it sat inside; Back opens the folder again as it was.";
  "open is handed the key of the folder to show next.";
  arguments_assert(arguments, 4);
  html_clear(root);
  let folder_key = property_get(folder, "key");
  let keys = photo_organizer_folder_keys_within(folders, folder_key);
  let inside = subtract(keys.length, 1);
  let photos = 0;
  for (let f of folders) {
    let value = property_get(f, "key");
    if (keys.includes(value)) {
      photos = photos + property_get(f, "photos").length;
    }
  }
  let name = property_get(folder, "name");
  let v = String(inside);
  let folders_words = equal(inside, 1)
    ? "1 folder"
    : text_combine_multiple([v, " folders"]);
  let v2 = String(photos);
  let photos_words = equal(photos, 1)
    ? "1 photo"
    : text_combine_multiple([v2, " photos"]);
  let question = text_combine_multiple([
    "Delete the folder ",
    name,
    "? Everything in it goes too - ",
    folders_words,
    " and ",
    photos_words,
    ". They are deleted from this phone and cannot be brought back.",
  ]);
  async function on_confirm() {
    await photo_organizer_folders_delete(keys);
    let value2 = property_get(folder, "parent");
    await open(value2);
  }
  async function on_back() {
    await open(folder_key);
  }
  app_shared_confirm_choices({
    parent: root,
    question,
    button_confirm: app_shared_button_red,
    text_confirm: text_combine_multiple(["🗑️ Yes, delete ", name]),
    on_confirm,
    button_back: app_shared_button,
    text_back: app_shared_button_back_text(),
    on_back,
  });
}
