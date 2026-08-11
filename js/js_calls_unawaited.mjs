import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { not } from "./not.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_add } from "./list_add.mjs";
export function js_calls_unawaited(functions, ast) {
  arguments_assert(arguments, 2);
  ("Every call in this file to a function recorded as one that has to be waited for, where nothing is waiting for it.");
  ("A call that is not waited for hands back a promise instead of an answer, and a promise is an object - so it is never null, never empty, and never equal to anything the line below it tests for. The line below carries on as though it received a result, and every judgement it makes is made about the wrong thing. Nothing throws.");
  ("The record of which functions have to be waited for is the same one the auto pass reads before it writes an await in, so a call standing here is a call that pass would change. That is the point of asking it from the same place: a reading that kept its own list would drift from the pass and start naming calls the pass is happy with.");
  ("Being written under a return is not an excuse. The pass writes the wait in there too, and a promise handed back from a function nobody declared as one to wait for is the same silence one call further out.");
  let unawaited = [];
  let calls = js_list_type(ast, "CallExpression");
  for (let visited of calls) {
    let node = property_get(visited, "node");
    let callee = property_get(node, "callee");
    let named_is = js_identifier_is(callee);
    if (not(named_is)) {
      continue;
    }
    let name = property_get(callee, "name");
    let unknown_is = property_exists_not(functions, name);
    if (unknown_is) {
      continue;
    }
    let async_is = property_path_get_2(functions, name, "async");
    if (not(async_is)) {
      continue;
    }
    let stack = property_get(visited, "stack");
    let parent = list_get_end_1(stack);
    let waited_is = js_node_type_is(parent, "AwaitExpression");
    if (waited_is) {
      continue;
    }
    let code = js_unparse(node);
    list_add(unawaited, code);
  }
  return unawaited;
}
