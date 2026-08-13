import { arguments_assert } from "./arguments_assert.mjs";
import { property_not } from "./property_not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function js_member_dotted_or_null(node) {
  "The two plain words of a member written with a dot, joined back together with the dot between them - and nothing at all when the line is not that simple.";
  "Written inside brackets is nothing, and so is a half that is itself a lookup: navigator.clipboard.writeText has a member for its own object, and such a node carries no name, which is an answer of no here rather than a fault.";
  arguments_assert(arguments, 1);
  let written_after_a_dot = property_not(node, "computed");
  if (not(written_after_a_dot)) {
    return null;
  }
  let object = property_get(node, "object");
  let key = property_get(node, "property");
  let object_name = property_get_or_null(object, "name");
  let key_name = property_get_or_null(key, "name");
  if (null_is(object_name) || null_is(key_name)) {
    return null;
  }
  let dotted = text_combine_multiple([object_name, ".", key_name]);
  return dotted;
}
