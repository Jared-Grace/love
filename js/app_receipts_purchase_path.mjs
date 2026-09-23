import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_receipts_purchase_path(folder_code, id, name) {
  "$plain folder_code";
  "$plain id";
  "$plain name";
  "Where one file of one purchase is stored: each purchase is a folder of its own inside the folder the code names, holding its details and its photos.";
  "The folder code is the password. Storage lets whoever knows a code read, list and add to that folder, lets nobody list the codes, and lets nobody delete - so every phone given the code sees the same purchases, and nobody without it can find them.";
  arguments_assert(arguments, 3);
  let path = text_combine_multiple([
    "receipts/",
    folder_code,
    "/",
    id,
    "/",
    name,
  ]);
  return path;
}
