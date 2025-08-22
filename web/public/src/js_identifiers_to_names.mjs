import { assert_message } from "./assert_message.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_all } from "./list_all.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { json_to } from "./json_to.mjs";
export function js_identifiers_to_names(identifiers) {
  let b2 = list_all(identifiers, js_identifier_is);
  let message2 = json_to(identifiers);
  assert_message(b2, message2);
  const names = list_map_property(identifiers, "name");
  return names;
}
