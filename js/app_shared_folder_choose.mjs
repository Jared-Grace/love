import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { app_shared_folder_known } from "./app_shared_folder_known.mjs";
import { app_shared_folder_code_valid_is } from "./app_shared_folder_code_valid_is.mjs";
import { app_shared_folder_code_screen } from "./app_shared_folder_code_screen.mjs";
import { storage_local_name_set } from "./storage_local_name_set.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
export function app_shared_folder_choose(root, app_name, on_folder) {
  "$plain root";
  "$plain app_name";
  "The whole of choosing a folder, for any app that keeps what it holds under a folder code: straight on when a code is already known - from the link first, then from this device - and the code box only when none is.";
  "A code in the link wins over the one kept here, because a link sent for one folder must open that folder; it is then kept, so the next opening needs no link.";
  "Choosing a folder writes it after the # of the address, so the address in the bar is always one that opens this folder when sent.";
  "on_folder is handed the code and, beside it, the way back to the code box - which takes the current code so the box opens filled with it. An app puts that way back on whatever names the folder on its own screen.";
  "It was written out in each app that asks for a folder, and three copies of one decision are three places to change it.";
  arguments_assert(arguments, 3);
  let key = text_frozen("folder_code");
  let key2 = text_frozen("folder");
  let known = app_shared_folder_known(app_name);
  if (app_shared_folder_code_valid_is(known)) {
    on_code(known);
  } else {
    app_shared_folder_code_screen(root, known, on_code);
  }
  async function on_code(folder_code) {
    storage_local_name_set(app_name, key, folder_code);
    html_hash_property_set(key2, folder_code);
    await on_folder(folder_code, on_change);
  }
  function on_change(folder_code) {
    app_shared_folder_code_screen(root, folder_code, on_code);
  }
}
