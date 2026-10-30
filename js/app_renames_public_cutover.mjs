import { arguments_assert } from "./arguments_assert.mjs";
import { app_renames } from "./app_renames.mjs";
import { property_get } from "./property_get.mjs";
import { app_renames_page_ready } from "./app_renames_page_ready.mjs";
import { not } from "./not.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_public_remove_named } from "./html_public_remove_named.mjs";
import { list_add } from "./list_add.mjs";
import { app_renames_redirects_write } from "./app_renames_redirects_write.mjs";
export async function app_renames_public_cutover() {
  arguments_assert(arguments, 0);
  ("Finishes every app rename whose new page is already in the served folder: the old page's files are taken out, and every such old address is sent on to the new one. A rename whose new page has not been promoted yet is left alone, so its old page goes on being served.");
  ("Finds its own set from the renames record and the served folder, so it takes nothing and running it again changes nothing.");
  let renames = await app_renames();
  let removed = [];
  for (let rename of renames) {
    let before = property_get(rename, "before");
    let ready = await app_renames_page_ready(renames, before);
    if (not(ready)) {
      continue;
    }
    let to_folder = folder_public_absolute();
    let present = await folder_app_file_names(to_folder, before);
    if (list_empty_is(present)) {
      continue;
    }
    let done = await html_public_remove_named(before);
    list_add(removed, done);
  }
  let redirects = await app_renames_redirects_write();
  let r = {
    removed,
    redirects,
  };
  return r;
}
