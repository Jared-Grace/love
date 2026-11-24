import { arguments_assert } from "./arguments_assert.mjs";
import { file_names_app_pages } from "./file_names_app_pages.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
export async function folder_app_pages_standing(folder, app_name) {
  "$plain folder";
  "$plain app_name";
  "Whether every page of one app is standing in one folder - its own page and each of its pages per language. One missing is enough for no, because a page a link points at and that is not there is a dead link.";
  arguments_assert(arguments, 2);
  let page_names = file_names_app_pages(app_name);
  for (let page_name of page_names) {
    let page_path = path_join([folder, page_name]);
    let page_standing = await file_exists(page_path);
    if (not(page_standing)) {
      return false;
    }
  }
  return true;
}
