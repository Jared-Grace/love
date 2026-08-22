import { function_transform_auto } from "./function_transform_auto.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { js_array_expression_only_elements } from "./js_array_expression_only_elements.mjs";
import { list_add } from "./list_add.mjs";
import { js_imports_missing_add_specified_single } from "./js_imports_missing_add_specified_single.mjs";
export async function function_list_call_add(f_name, name) {
  "Adds a call to one function to the end of the list another function hands back, together with the import that call needs.";
  "IT IS THE OTHER HALF OF THE PAIR NEXT DOOR, AND WHICH HALF A REGISTER WANTS IS DECIDED BY WHAT THE REGISTER HOLDS. A list of gates holds the gate functions themselves, so joining it means adding a NAME; a list of chapters holds each chapter's content, so joining it means adding a CALL. Both are the same paperwork - a line in the list and a line at the top of the file - and until now only the first of the two had a command, so every register holding results was still joined by hand.";
  "THE ARGUMENTS ARE BUILT FROM THE NAMED FUNCTION'S OWN PARAMETERS rather than taken from the caller, which is what keeps this to two arguments and keeps the second one a plain name. A register almost always holds calls that take nothing, and where it does not, what is written is a call with the parameter names in it, which is a shape a person finishes rather than a shape that runs wrong quietly.";
  "The name is read as a name and refused if it is anything more, and it is checked against the functions that exist, so a register cannot come to hold a word nothing answers to - the failure that would otherwise only show up the next time somebody ran the list.";
  "It refuses a function that writes out more than one list rather than choosing between them, because a caller naming a register has exactly one list in mind and the wrong choice here is silent.";
  "It canonicalizes afterwards and commits nothing, so the added line arrives in the shape the repo writes and lands in a commit of your own.";
  arguments_assert(arguments, 2);
  await function_exists_assert(name);
  async function lambda(ast) {
    let expression = await js_call_new_expression(name, ast);
    let elements = js_array_expression_only_elements(ast);
    list_add(elements, expression);
    await js_imports_missing_add_specified_single(ast, name);
  }
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
