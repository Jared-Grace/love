import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_arguments_assert_is } from "./js_statement_arguments_assert_is.mjs";
import { js_statement_call_any_get } from "./js_statement_call_any_get.mjs";
import { list_second } from "./list_second.mjs";
import { each } from "./each.mjs";
export function js_function_arguments_assert_number_node_or_null(declaration) {
  arguments_assert(arguments, 1);
  ("The number itself in the line at the top of this body - the piece of the file that says how many arguments the function takes - and nothing at all when the body has no such line.");
  ("Handed back as the piece rather than as the number, because the two askers want different things from it. One only wants to read what it says; the other has to change it, and changing it means having the piece in hand rather than a copy of what was in it.");
  ("Every line is looked at rather than only the opening one. A body that opens with prose carries this line second or third, and a reading that took the first line would say the function has no count at all.");
  let body = property_get(declaration, "body");
  let statements = property_get(body, "body");
  let node = null;
  function statement_read(statement) {
    let guard_is = js_statement_arguments_assert_is(statement);
    if (guard_is) {
      let call = js_statement_call_any_get(statement);
      let args = property_get(call, "arguments");
      let second = list_second(args);
      node = second;
    }
  }
  each(statements, statement_read);
  return node;
}
