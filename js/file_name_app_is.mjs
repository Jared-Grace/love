import { file_name_app_chunk_is } from "./file_name_app_chunk_is.mjs";
import { file_names_html_js } from "./file_names_html_js.mjs";
import { list_includes } from "./list_includes.mjs";
export function file_name_app_is(file_name, app_name) {
  "$plain file_name";
  "$plain app_name";
  "True when this file is one of the pieces one app is built into - its page, its script, or one of the extra scripts a build cut out of it.";
  "The pair an app is written as can be named up front; the extra ones cannot, because their names carry a number a build chooses. So one half of this is a list and the other half is a shape, and the question is whole only when both are asked.";
  let pair = file_names_html_js(app_name);
  let named = list_includes(pair, file_name);
  if (named) {
    return true;
  }
  let chunk = file_name_app_chunk_is(file_name, app_name);
  return chunk;
}
