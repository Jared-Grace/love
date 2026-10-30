import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_latest_public_folders } from "./app_shared_latest_public_folders.mjs";
import { property_get } from "./property_get.mjs";
import { html_public_remove_named } from "./html_public_remove_named.mjs";
export async function html_public_remove(search) {
  arguments_assert(arguments, 1);
  let folders = await app_shared_latest_public_folders(search);
  let a_name = property_get(folders, "a_name");
  let r = await html_public_remove_named(a_name);
  return r;
}
