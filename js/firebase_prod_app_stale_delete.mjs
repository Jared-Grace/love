import { folder_app_stale_delete } from "./folder_app_stale_delete.mjs";
import { folder_public } from "./folder_public.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function firebase_prod_app_stale_delete(app_name, kept) {
  "$plain app_name";
  "Takes away any piece of one app that is waiting to be sent and was not made by the build now replacing it, answering with what it took away.";
  "Where to look is the only thing this settles; the taking-away itself belongs to the shared one, because a frozen copy needs the same thing done to it before it is built in and the two must not be able to disagree about what a piece of an app is.";
  let fop = folder_public();
  let folder = await user_repo_path_combine(fop);
  let deleted = await folder_app_stale_delete(folder, app_name, kept);
  return deleted;
}
