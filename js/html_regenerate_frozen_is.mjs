import { path_base } from "./path_base.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { html_extension } from "./html_extension.mjs";
import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { list_includes } from "./list_includes.mjs";
export function html_regenerate_frozen_is(file_path) {
  let base = path_base(file_path);
  let app_name = text_suffix_without(base, html_extension());
  let frozen = apps_frozen_names();
  let is = list_includes(frozen, app_name);
  return is;
}
