import { arguments_assert } from "./arguments_assert.mjs";
import { js_find_declaration_named } from "./js_find_declaration_named.mjs";
import { list_ensure } from "./list_ensure.mjs";
import { js_array_identifier_remove } from "./js_array_identifier_remove.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
export async function qa_gate_remove(gate_f_name) {
  "$plain gate_f_name";
  "Takes one check back out of the list the whole-repo check runs, and drops whatever was brought in only for it.";
  "It is the undoing of the one beside it, and until now only one of the pair existed: the list the repo edits most often could be added to by name and could only be taken from by hand. A hand edit is committed under a message naming no command at all, so every retirement of a check was recorded as though nobody had done anything in particular.";
  "The verb underneath it refuses a name the list does not hold rather than doing nothing quietly, which is the guard that matters here - a list that did not hold the name and a list this has just cleaned look identical afterwards, and only one of them was meant.";
  "Whether the check's own function still exists is not asked, on purpose. A check is retired for reasons that have nothing to do with the function being sound: it may be moving somewhere the thing it asks about actually exists, or it may be one whose subject has gone. Demanding a live function to remove a name would make the one case nobody can repair - a listed name answering to nothing, which stops the list being built at all - the one case this could not fix.";
  arguments_assert(arguments, 1);
  function lambda(ast) {
    let found = js_find_declaration_named(ast, "gates");
    let selects = list_ensure(found);
    js_array_identifier_remove(ast, selects, gate_f_name);
  }
  let f_name = fn_name("qa_gates");
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
