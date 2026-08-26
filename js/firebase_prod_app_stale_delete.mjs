import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { folder_app_stale_delete } from "./folder_app_stale_delete.mjs";
export async function firebase_prod_app_stale_delete(app_name, kept) {
  "$plain app_name";
  "Takes away any piece of one app that is waiting to be sent and was not made by the build now replacing it, answering with what it took away.";
  "Where to look is the only thing this settles; the taking-away itself belongs to the shared one, because a frozen copy needs the same thing done to it before it is built in and the two must not be able to disagree about what a piece of an app is.";
  let folder = folder_public_absolute();
  let deleted = await folder_app_stale_delete(folder, app_name, kept);
  return deleted;
}
