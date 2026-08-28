import { arguments_assert } from "./arguments_assert.mjs";
import { apps_page_dark } from "./apps_page_dark.mjs";
import { list_includes } from "./list_includes.mjs";
export function apps_page_dark_is(name) {
  "$plain name";
  arguments_assert(arguments, 1);
  ("Whether this app's page is painted dark before anything of it has loaded.");
  let dark = apps_page_dark();
  let r = list_includes(dark, name);
  return r;
}
