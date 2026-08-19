import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_statement_call_get } from "./js_statement_call_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_statement_property_get_object_name_try(statement) {
  "The name of the thing this one line takes a piece out of, when the whole of the line is taking one named piece out of one named thing and keeping it - and nothing at all otherwise.";
  "The name is what is wanted rather than a yes or no, because the question this answers is always about a run of lines and always the same one: are these all pieces of the SAME thing? A yes or no per line could not tell a run taking a screen apart from a run taking four different screens apart.";
  "The piece has to be named on the spot. A piece worked out while the program runs is a piece nobody reading the file can name, so the line is doing something rather than only unpacking.";
  "The piece has to be kept. A line that takes a piece out and throws it away was run for something else that happened on the way.";
  arguments_assert(arguments, 1);
  let got = js_statement_call_get(statement);
  let none = null_is(got);
  if (none) {
    return null;
  }
  let declaration = property_get(got, "declaration");
  let thrown_away = null_is(declaration);
  if (thrown_away) {
    return null;
  }
  let call = property_get(got, "call");
  let called = js_call_callee_name_try(call);
  let reader = fn_name("property_get");
  if (not_equal(called, reader)) {
    return null;
  }
  let args = js_call_arguments_get(call);
  let object = list_first(args);
  let object_named_is = js_node_type_is(object, "Identifier");
  if (not(object_named_is)) {
    return null;
  }
  let key = list_last(args);
  let key_written_is = js_node_type_is(key, "Literal");
  if (not(key_written_is)) {
    return null;
  }
  let name = property_get(object, "name");
  return name;
}
