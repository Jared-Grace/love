import { arguments_assert } from "./arguments_assert.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_receipts_upload_path(file, folder_code) {
  arguments_assert(arguments, 2);
  ("$plain file");
  ("$plain folder_code");
  ("Where one receipt photo is stored: in the folder the person typed a code for, named by when it was sent.");
  ("The folder is the code rather than this device, so everyone who types the same code sends into one place - a household, or a trip - and one person on two phones is still one folder.");
  ("It sits under user/uuid because storage already lets anybody write there and nobody read there. A receipt is somebody's spending, so a folder that cannot be read back from a browser is the private one without any change to the rules.");
  ("A random part follows the time so two photos sent in the same moment cannot land on one name.");
  let when = date_iso_to(new Date());
  let random_part = uuid_browser();
  let extension = file.name.split(".").pop();
  let path = text_combine_multiple([
    "user/uuid/receipts/",
    folder_code,
    "/",
    when,
    "_",
    random_part,
    ".",
    extension,
  ]);
  return path;
}
