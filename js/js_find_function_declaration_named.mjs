import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { equal } from "./equal.mjs";
import { list_find_item_property } from "./list_find_item_property.mjs";
export function js_find_function_declaration_named(ast, name) {
  arguments_assert(arguments, 2);
  ("The function written out in this tree under the name given, or nothing when no function there wears it.");
  ("The twin of the one that finds a line binding a value by the name it binds. That one reaches every step of a normalized body, and a whole function written out beside another is the one thing it cannot reach - a function declaration binds its name without a line that makes a value.");
  ("Asked wherever a transform has just written a function into a tree and now wants the node back, which is the one moment when the name is known and the position is not.");
  let declarations = js_list_type(ast, "FunctionDeclaration");
  function named_is(v) {
    let node = property_get(v, "node");
    let written = js_function_declaration_name(node);
    let same = equal(written, name);
    return same;
  }
  let found = list_find_item_property(declarations, named_is, "node");
  return found;
}
