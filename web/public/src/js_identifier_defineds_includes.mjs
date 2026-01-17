import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { js_identifier_defineds } from "../../../love/public/src/js_identifier_defineds.mjs";
export function js_identifier_defineds_includes(v, name) {
  let defineds = js_identifier_defineds(v);
  let includes = list_includes(defineds, name);
  return includes;
}
