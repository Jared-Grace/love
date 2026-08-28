import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_function_local_object_expression_try(function_node, name) {
  arguments_assert(arguments, 2);
  ("$plain function_node");
  ("$plain name");
  ("The object literal a name inside this function is set to, when the name is set to one exactly once and nothing else is done to it - and nothing at all otherwise.");
  ("ONE DECLARATION OR NONE. A name declared twice in the same function - once in each arm of a choice, say - has no single literal to point at, so it is refused rather than answered with whichever one was met first. Reading it as the first would be reading a shape off one arm and attributing it to both.");
  ("It follows a name only as far as the literal it was born with; a line further down that adds a key to the object is not seen. So what it answers is the shape written down, which is exactly the shape a person reading the function would read off it too, and the same thing a rename can silently rewrite.");
  let declarators = js_list_type_nodes(function_node, "VariableDeclarator");
  let found = null;
  for (let one of declarators) {
    let id = property_get(one, "id");
    let id_kind = property_get(id, "type");
    let plain = equal(id_kind, "Identifier");
    if (not(plain)) {
      continue;
    }
    let spelled = property_get(id, "name");
    let same = equal(spelled, name);
    if (not(same)) {
      continue;
    }
    let b = equal(found, null);
    let held = not(b);
    if (held) {
      return null;
    }
    let init = property_get(one, "init");
    if (not(init)) {
      return null;
    }
    let init_kind = property_get(init, "type");
    let literal = equal(init_kind, "ObjectExpression");
    if (not(literal)) {
      return null;
    }
    found = init;
  }
  return found;
}
