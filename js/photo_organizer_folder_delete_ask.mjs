import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { photo_organizer_folder_keys_within } from "./photo_organizer_folder_keys_within.mjs";
import { subtract } from "./subtract.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { photo_organizer_folders_delete } from "./photo_organizer_folders_delete.mjs";
import { photo_organizer_photos_delete } from "./photo_organizer_photos_delete.mjs";
import { html_loading } from "./html_loading.mjs";
import { app_shared_confirm_over_red } from "./app_shared_confirm_over_red.mjs";
export function photo_organizer_folder_delete_ask(folders, folder, open) {
  "$plain folders";
  "$plain folder";
  "$plain open";
  "Asks before deleting a folder, in the same box over the page the calendar asks in before cancelling a meeting, saying how much goes with it: every folder inside it at any depth, and every photo in any of them, all out of storage for good. Yes deletes them and opens the folder it sat inside; keeping it closes only the box, leaving the folder as it was.";
  "open is handed the key of the folder to show next.";
  arguments_assert(arguments, 3);
  let key = property_get(folder, "key");
  let keys = photo_organizer_folder_keys_within(folders, key);
  let inside = subtract(keys.length, 1);
  let gone = [];
  for (let f of folders) {
    let value = property_get(f, "key");
    if (keys.includes(value)) {
      let items = property_get(f, "photos");
      list_add_multiple(gone, items);
    }
  }
  let photos = gone.length;
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
    ". They are deleted for everyone and cannot be brought back.",
  ]);
  ("The folders go before their pictures, so a delete stopped partway leaves spare pictures behind, never a folder showing pictures that are gone.");
  async function delete_now() {
    await photo_organizer_folders_delete(keys);
    await photo_organizer_photos_delete(gone);
  }
  async function on_confirm() {
    await html_loading(delete_now);
    let value2 = property_get(folder, "parent");
    await open(value2);
  }
  let text_confirm = text_combine_multiple(["🗑️ Yes, delete ", name]);
  app_shared_confirm_over_red(
    question,
    text_confirm,
    "Keep the folder",
    on_confirm,
  );
}
