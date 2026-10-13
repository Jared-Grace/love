import { app_shared_unsent_add_custom } from "./app_shared_unsent_add_custom.mjs";
export async function app_shared_unsent_add(path, file) {
  "$plain path";
  "$plain file";
  "Keep one photo on this phone under the storage address it is going to, so it survives having no internet, and the app being closed, until it is sent.";
  await app_shared_unsent_add_custom(path, file, {});
}
