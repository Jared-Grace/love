import { list_concat } from "./list_concat.mjs";
import { js_identifiers_invalid } from "./js_identifiers_invalid.mjs";
import { text_unique } from "./text_unique.mjs";
import { list_add } from "./list_add.mjs";
export function js_identifier_unique(existing, name) {
  let invalid = js_identifiers_invalid();
  let used = list_concat(existing, invalid);
  let unique = text_unique(used, name, "");
  list_add(existing, unique);
  return unique;
}
