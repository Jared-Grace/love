import { function_transform_auto } from "./function_transform_auto.mjs";
import { function_exists_assert_json } from "./function_exists_assert_json.mjs";
import { qa_gates_names } from "./qa_gates_names.mjs";
import { js_find_declaration_named } from "./js_find_declaration_named.mjs";
import { js_array_identifier_add } from "./js_array_identifier_add.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_ensure } from "./list_ensure.mjs";
import { assert_json } from "./assert_json.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export async function qa_gate_add(gate_f_name) {
  "Puts one more check into the list the whole-repo check runs, and brings in whatever it needs to be there.";
  "Every piece of this was already built and granted, and the joining of them was not, so it stayed a hand edit: the file says outright that a new check is added by adding its function to the list, and it was being done by replacing text in the source. Five words of address had to be remembered and spelled right to do it any other way, and the one word here is what makes the built thing reachable.";
  "The name has to answer to a live function before anything is written. A name nothing answers to sits in the list looking exactly like its neighbours and stops the list being built at all, which takes down every check at once rather than the one that was mistyped.";
  "Naming one that is already there is refused rather than done twice. The same check asked twice costs its whole time twice and can say nothing new, and a list holding a name two times reads as a mistake nobody meant to leave.";
  "It goes on the end. Where a check sits says nothing about it - the runner deals them out by how long each was last measured to take - so there is no place it belongs better than the place that needs no decision.";
  arguments_assert(arguments, 1);
  await function_exists_assert_json(gate_f_name, {
    hint: "a check has to be a function that already exists before it can be listed - would you like to write it first, or is the name spelled differently?",
  });
  let names = await qa_gates_names();
  let fresh = list_includes_not(names, gate_f_name);
  assert_json(fresh, {
    gate_f_name,
    hint: "this check is already in the list, so there is nothing to add - asking twice would only run it twice",
  });
  function lambda(ast) {
    let found = js_find_declaration_named(ast, "gates");
    let selects = list_ensure(found);
    js_array_identifier_add(ast, selects, gate_f_name);
  }
  let f_name = fn_name("qa_gates");
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
