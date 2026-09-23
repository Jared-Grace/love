import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_contact_user_id } from "./app_shared_contact_user_id.mjs";
import { date_iso_to } from "./date_iso_to.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_receipts_upload_path(file) {
  arguments_assert(arguments, 1);
  ("$plain file");
  ("Where one receipt photo is stored: under this device's own folder, named by when it was sent.");
  ("It sits under user/uuid because storage already lets anybody write there and nobody read there. A receipt is somebody's spending, so a folder that cannot be read back from a browser is the private one without any change to the rules.");
  ("A random part follows the time so two photos sent in the same moment cannot land on one name.");
  let user_id = await app_shared_contact_user_id();
  let when = date_iso_to(new Date());
  let random = uuid_browser();
  let extension = file.name.split(".").pop();
  let path = text_combine_multiple([
    "user/uuid/receipts/",
    user_id,
    "/",
    when,
    "_",
    random,
    ".",
    extension,
  ]);
  return path;
}
