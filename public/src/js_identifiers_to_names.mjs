import { assert_message } from "../../../love/public/src/assert_message.mjs";
import { js_identifier_is } from "../../../love/public/src/js_identifier_is.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function js_identifiers_to_names(identifiers) {
  let fn = js_identifier_is;
  let a = list_all(identifiers, fn);
  let message = json_to(identifiers);
  assert_message(a, message);
  const names = list_map_property(identifiers, "name");
  return names;
}
