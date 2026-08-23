import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { apps_page_not_app_allowed_names } from "./apps_page_not_app_allowed_names.mjs";
import { apps_page_redirect_is } from "./apps_page_redirect_is.mjs";
import { apps_paths } from "./apps_paths.mjs";
import { data_identifiers_get_properties } from "./data_identifiers_get_properties.mjs";
import { file_read } from "./file_read.mjs";
import { list_includes } from "./list_includes.mjs";
import { path_name } from "./path_name.mjs";
export async function apps_pages_not_app() {
  "every page sitting in a public folder that no app answers to - the pages a reader can reach by address and nothing here claims.";
  "a page is an app when a function is named after it, and that is the whole test. The name of the page and the name of its way in are the same word, so nothing has to be registered anywhere for a page to count - which is also what makes a page that counts for nothing so easy to leave behind.";
  "a one-off screen belongs behind the sandbox's hash instead of at an address of its own. A page costs an address forever, and an address is the one thing that cannot quietly be taken back once a reader has kept it; a hash costs nothing and is thrown away by closing the tab.";
  "the pages that WERE looked at come back beside the offenders, because an empty offender list is also what a sweep over no pages at all hands back.";
  let paths = await apps_paths();
  let identifier_names = await data_identifiers_get_properties();
  let allowed = apps_page_not_app_allowed_names();
  let offenders = [];
  let checked = [];
  for (let path of paths) {
    let name = path_name(path);
    checked.push(name);
    let prefixed = app_shared_name_prefixed(name);
    let is_app = list_includes(identifier_names, prefixed);
    let is_allowed = list_includes(allowed, name);
    if (is_app || is_allowed) {
      continue;
    }
    let text = await file_read(path);
    let is_redirect = apps_page_redirect_is(text);
    if (is_redirect) {
      continue;
    }
    offenders.push(name);
  }
  let r = {
    offenders,
    checked,
  };
  return r;
}
