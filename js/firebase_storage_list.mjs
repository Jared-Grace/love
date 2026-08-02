import { firebase_storage_list_page } from "./firebase_storage_list_page.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function firebase_storage_list(project_url, prefix) {
  "Every name a bucket holds under a prefix, however many pages that takes.";
  "This is the only way to learn what is actually up there. Everything else here reads a name it already knew, which cannot see a file some other machine wrote - and the game writes straight from a browser, so what the bucket holds is regularly ahead of anything on this disk.";
  let names = [];
  let page_token = null;
  let more = true;
  while (more) {
    let page = await firebase_storage_list_page(
      project_url,
      prefix,
      page_token,
    );
    let some = property_get(page, "names");
    list_add_multiple(names, some);
    page_token = property_get(page, "next");
    more = null_not_is(page_token);
  }
  return names;
}
