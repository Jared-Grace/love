import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_receipts_purchase_path(folder_code, id, name) {
  "$plain folder_code";
  "$plain id";
  "$plain name";
  "Where one file of one purchase is stored: each purchase is a folder of its own inside the folder the code names, holding its details and its photos.";
  "It sits under user/uuid because storage already lets anybody write there and nobody read there. A purchase is somebody's spending, so a folder that cannot be read back from a browser is the private one without any change to the rules.";
  arguments_assert(arguments, 3);
  let path = text_combine_multiple([
    "user/uuid/receipts/",
    folder_code,
    "/",
    id,
    "/",
    name,
  ]);
  return path;
}
