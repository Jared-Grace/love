import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function js_lesson_rights_space_strip_declared_each(v, list_strip) {
  arguments_assert(arguments, 2);
  ("the shape where the words stand under a name of their own beside the call");
  let node = property_get(v, "node");
  let id = property_get(node, "id");
  let named = js_node_type_is(id, "Identifier");
  if (not(named)) {
    return;
  }
  let id_name = property_get(id, "name");
  ("a numbered second one counts too, since a file holding two lessons names them apart that way");
  let wanted = text_starts_with(id_name, "rights");
  if (not(wanted)) {
    return;
  }
  let init = property_get(node, "init");
  list_strip(init);
}
