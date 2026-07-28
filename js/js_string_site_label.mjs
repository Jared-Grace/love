import { js_stack_node_above } from "./js_stack_node_above.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_name_text } from "./js_node_name_text.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
export function js_string_site_label(stack) {
  arguments_assert(arguments, 1);
  ("What a written value is doing where it sits, in one word: the setting it is");
  ("given to, the function it is handed to, or the name it is bound to.");
  ("Two values spelled the same are two different things whenever they are doing");
  ("different jobs, and the job is written right beside the value every time -");
  ("but only in the file. Reading a list of files that hold a spelling and calling");
  ("them copies of one constant is how a margin gets routed through a corner.");
  let parent = js_stack_node_above(stack);
  let type = js_node_type(parent);
  let property_is = equal(type, "Property");
  if (property_is) {
    let key = property_get(parent, "key");
    let named = js_node_name_text(key);
    return named;
  }
  let call_is = equal(type, "CallExpression");
  if (call_is) {
    let called = js_call_callee_name_try(parent);
    return called;
  }
  let declarator_is = equal(type, "VariableDeclarator");
  if (declarator_is) {
    let id = property_get(parent, "id");
    let bound = js_node_name_text(id);
    return bound;
  }
  return type;
}
