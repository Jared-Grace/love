import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_call_any_get } from "./js_statement_call_any_get.mjs";
import { null_is } from "./null_is.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { list_second } from "./list_second.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_size } from "./list_size.mjs";
import { each } from "./each.mjs";
export function js_function_arguments_assert_each_size_or_null(declaration) {
  arguments_assert(arguments, 1);
  ("How many tests the line naming a test per argument lists, and nothing at all when the body has no such line.");
  ("The sibling next door reads the other of the two lines a function can count itself with - the one saying a bare number. That one says how many, this one says how many and what each has to be, and the count it states is the length of its list. Both are read the same way and neither knows about the other, because a function carries one or the other and the caller asks for both.");
  ("Every line is looked at rather than only the opening one, for the same reason as next door: a body opening with prose carries this line second or third.");
  ("It says nothing rather than a number when the list is not written out on the spot. A list worked out elsewhere has no length to read here, and a made-up one would be a disagreement nobody wrote.");
  let body = property_get(declaration, "body");
  let statements = property_get(body, "body");
  let size = null;
  function statement_read(statement) {
    let call = js_statement_call_any_get(statement);
    let missing = null_is(call);
    if (missing) {
      return;
    }
    let callee = property_get(call, "callee");
    let name = js_identifier_name_try(callee);
    let right = fn_name("arguments_assert_each");
    let each_is = equal(name, right);
    if (not(each_is)) {
      return;
    }
    let args = property_get(call, "arguments");
    let second = list_second(args);
    let listed = js_node_type_is(second, "ArrayExpression");
    if (not(listed)) {
      return;
    }
    let elements = property_get(second, "elements");
    size = list_size(elements);
  }
  each(statements, statement_read);
  return size;
}
