import { text_includes } from "./text_includes.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
export function js_identifier_name_includes(id, part) {
  let name = js_identifier_name(id);
  let includes = text_includes(name, part);
  return includes;
}
