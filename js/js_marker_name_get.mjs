import { not_equal } from "./not_equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { property_get } from "./property_get.mjs";
import { assert_message } from "./assert_message.mjs";
import { not } from "./not.mjs";
import { list_is } from "./list_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_marker_name_get(v) {
  "The name a marker is standing under, read off a call while the walk is at it - and nothing at all when the call being looked at is not a marker.";
  "Nothing rather than a refusal, because this is asked of every call in a file and almost none of them are markers. A refusal would make the ordinary answer the loud one.";
  "Four things have to hold before the name is handed back, and each is a way a marker could be written that nothing could act on: it has to stand as a statement of its own, so there is a place to put what replaces it; it has to be called by a plain word rather than reached through something; it has to be the marker itself and not some other call; and its name has to be written out on the spot, because a name worked out while the program runs is not there to be read while the file is being changed.";
  "The one thing that throws instead of answering is a marker whose statement is not sitting in a list of statements. Every other failure here means this was not a marker; that one means it was, and the walk has arrived somewhere the change cannot be made, which is worth stopping for rather than passing over in silence.";
  let stack = property_get(v, "stack");
  let stack_ = list_get_end(stack, 1);
  let a = js_node_is(stack_);
  if (not(a)) {
    return null;
  }
  let a2 = js_node_type_is(stack_, "ExpressionStatement");
  if (not(a2)) {
    return null;
  }
  let node = property_get(v, "node");
  let callee = property_get(node, "callee");
  let a3 = js_node_type_is(callee, "Identifier");
  if (not(a3)) {
    return null;
  }
  let name = property_get(callee, "name");
  let right = fn_name("marker");
  if (not_equal(name, right)) {
    return null;
  }
  let arguments2 = js_call_arguments_get(node);
  if (list_empty_is(arguments2)) {
    return null;
  }
  let a_first = list_first(arguments2);
  let a4 = js_node_type_is(a_first, "Literal");
  if (not(a4)) {
    return null;
  }
  let stack_2 = list_get_end(stack, 2);
  let a5 = list_is(stack_2);
  assert_message(
    a5,
    "The marker's grandparent in the stack was expected to be a list. Would you like to check the AST stack?",
  );
  let value = property_get(a_first, "value");
  return value;
}
