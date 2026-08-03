import { js_assert_json_get_call_point_at_record } from "./js_assert_json_get_call_point_at_record.mjs";
import { js_function_declaration_record_line_try } from "./js_function_declaration_record_line_try.mjs";
import { js_assert_json_get_call_below_try } from "./js_assert_json_get_call_below_try.mjs";
import { js_declaration_single_variable_name_try } from "./js_declaration_single_variable_name_try.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { each } from "./each.mjs";
import { object_replace } from "./object_replace.mjs";
import { add } from "./add.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_assert_json_get_lambda_collapse(ast) {
  "points every hand-written lazy payload in this file at the helper that already builds one, and answers how many it moved";
  "There are two of these checks side by side: one takes the record itself and one";
  "takes a wrapper that will build the record if it is ever needed. The first is the";
  "second with the wrapper already supplied, and it has been there the whole time.";
  "Twelve functions wrote the wrapper out anyway - a named inner function";
  "whose whole body is one record of its own arguments and a line handing that record";
  "back - because each was written by copying the one beside it. That is the same way";
  "the same words ended up in eighteen lessons.";
  "The wrapper is not removed, it is unwrapped. The record's own line already stands";
  "inside the inner function, so the inner function is replaced by that very line and";
  "no new code is written at all: the record keeps its name, its words and its order.";
  "Only a body that is exactly one record of plain names and one line handing it back";
  "is touched. Where the wrapper computes something - a list difference asked only once";
  "the check has already failed - the waiting is the whole point of the wrapper, so it";
  "is left alone. That is why this cannot be a search for the word and a rewrite.";
  "Three things would break it and each is refused rather than risked: a record built";
  "below the line that reads it, since an inner function may stand under its own call";
  "and a plain name may not; a name the enclosing function already binds, which would";
  "be two declarations of one word; and anything handed over that is not a plain name.";
  let moved = 0;
  let bound = js_binding_names(ast);
  function name_free_is(record_name) {
    "the record's name may leave the wrapper only if the wrapper is the one place binding it";
    function named(one) {
      let same = equal(one, record_name);
      return same;
    }
    let left = list_filter_size(bound, named);
    let once_is = equal(left, 1);
    return once_is;
  }
  function block_each(v) {
    let node = property_get(v, "node");
    let body = property_get(node, "body");
    function statement_each(statement) {
      let declared_is = js_node_type_is(statement, "FunctionDeclaration");
      if (not(declared_is)) {
        return;
      }
      let held = js_function_declaration_record_line_try(statement);
      let held_is = equal_not(held, null);
      if (not(held_is)) {
        return;
      }
      let id = property_get(statement, "id");
      let wrapper_name = js_identifier_name_try(id);
      let call = js_assert_json_get_call_below_try(
        body,
        statement,
        wrapper_name,
      );
      let called_is = equal_not(call, null);
      if (not(called_is)) {
        return;
      }
      let record_name = js_declaration_single_variable_name_try(held);
      let free_is = name_free_is(record_name);
      if (not(free_is)) {
        return;
      }
      js_assert_json_get_call_point_at_record(call, record_name);
      object_replace(statement, held);
      moved = add(moved, 1);
    }
    each(body, statement_each);
  }
  js_visit_types(ast, ["BlockStatement"], block_each);
  return moved;
}
