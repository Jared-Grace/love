import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_array_expression_only_elements } from "./js_array_expression_only_elements.mjs";
import { list_add } from "./list_add.mjs";
import { js_imports_missing_add_specified_single } from "./js_imports_missing_add_specified_single.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_list_name_add(f_name, name) {
  "Adds one function's name to the end of the list another function hands back, together with the import that name needs.";
  "This is the shape of joining a register. A new gate is written and then named in the list of gates; a new screen is written and then named in the list of screens. The writing is the work and the naming is the paperwork, and the paperwork was two hand edits every time - a line in the list and a line at the top of the file - in a file nobody meant to be reading.";
  "The history says how much of it there is: of the last four hundred commits made under no command's name, seventy-six were a line or two added to one file, and the list of gates is the file that turns up most often among them.";
  "The name is read as a name and refused if it is anything more, which is what lets this be approved once instead of at every use. It is also checked against the functions that exist, so a list cannot come to hold a word nothing answers to - the failure that would otherwise only show up the next time somebody ran the list.";
  "It refuses a function that writes out more than one list rather than choosing between them, because a caller naming a register has exactly one list in mind and the wrong choice here is silent.";
  "It canonicalizes afterwards and commits nothing, so the added line arrives in the shape the repo writes and lands in a commit of your own.";
  arguments_assert(arguments, 2);
  await function_exists_assert(name);
  let expression = js_identifier_expression(name);
  async function lambda(ast) {
    let elements = js_array_expression_only_elements(ast);
    list_add(elements, expression);
    await js_imports_missing_add_specified_single(ast, name);
  }
  let output = await function_transform(f_name, lambda);
  await function_auto(f_name);
  return output;
}
