import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { not } from "./not.mjs";
export function qa_gate_count_hollow_is(node, asserted) {
  "Whether a value a gate reports is worked out from nothing but the lists it refuses to have anything in - which makes it nothing on every run that passes.";
  "This is the shape that reads as a reading and is not one. A gate answering how much it checked, where how much it checked is the length of its offenders, says nothing checked every single time it is green - and a gate whose sweep had stopped reaching anything at all would answer with that same word. There is then no number anywhere that could tell a clean repo from a blind one.";
  ("A call is judged by what it was given rather than by everything written in it, because the name of the call is always there and is never one of the lists in question. Asked the other way round, every count would look like a reading, since ",
    fn_name("list_size"),
    " is spelled in all of them.");
  ("A value mentioning no name at all - a nought written out - is not hollow by this reading and is refused a step earlier, where a written-down answer is recognised for what it is.");
  arguments_assert(arguments, 2);
  let call_is = js_node_type_is(node, "CallExpression");
  let read = [];
  if (call_is) {
    let call_arguments = property_get(node, "arguments");
    for (let argument of call_arguments) {
      let names = js_identifiers_referenced_names(argument);
      list_add_multiple(read, names);
    }
  }
  if (not(call_is)) {
    let names = js_identifiers_referenced_names(node);
    list_add_multiple(read, names);
  }
  let none_is = list_empty_is(read);
  if (none_is) {
    return false;
  }
  for (let name of read) {
    let refused_is = list_includes(asserted, name);
    if (not(refused_is)) {
      return false;
    }
  }
  return true;
}
