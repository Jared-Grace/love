import { js_identifiers_invalid } from "../../../love/public/src/js_identifiers_invalid.mjs";
import { text_unique } from "../../../love/public/src/text_unique.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function js_identifier_unique(existing, name) {
  let used = js_identifiers_invalid(existing);
  let unique = text_unique(used, name, "");
  list_add(existing, unique);
  return unique;
}
