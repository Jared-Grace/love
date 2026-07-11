import { log } from "../../../love/public/src/log.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { js_identifier_name } from "../../../love/public/src/js_identifier_name.mjs";
export function js_identifier_name_starts_with(id, prefix) {
  let name = js_identifier_name(id);
  let starts_with = text_starts_with(name, prefix);
  return starts_with;
}
