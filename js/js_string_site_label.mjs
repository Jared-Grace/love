import { js_node_name_text_try } from "./js_node_name_text_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_stack_node_above } from "./js_stack_node_above.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
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
  ("A field keyed by something worked out, and a binding that is a whole shape being");
  ("taken apart, both stand exactly where a plain name stands and say no word. The");
  ("last line here already answers that case - describe the site by its shape - so");
  ("these two ask for a word and fall through to it rather than insisting on one.");
  if (property_is) {
    let key = property_get(parent, "key");
    let named = js_node_name_text_try(key);
    if (null_not_is(named)) {
      return named;
    }
  }
  let call_is = equal(type, "CallExpression");
  if (call_is) {
    let called = js_call_callee_name_try(parent);
    return called;
  }
  let declarator_is = equal(type, "VariableDeclarator");
  if (declarator_is) {
    let id = property_get(parent, "id");
    let bound = js_node_name_text_try(id);
    if (null_not_is(bound)) {
      return bound;
    }
  }
  return type;
}
