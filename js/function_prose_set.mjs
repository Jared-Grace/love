import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { js_prose_statement } from "./js_prose_statement.mjs";
import { js_prose_statement_nodes } from "./js_prose_statement_nodes.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_prose_set(f_name, position, sentence) {
  "Puts a new sentence in the place of one line a function already says about itself, named by its number.";
  "Adding a line has a command and changing one did not, which left every correction to a hand edit. A line that has gone wrong is worse than a line that is missing: the missing one is silent, and the wrong one is read and believed. Two of those were corrected by hand on this repo the day this was written, both of them numbers that had been guessed and then measured.";
  "The number is the one the reading command hands back, counting from one. Read there, change here.";
  "The sentence is a whole argument of the command, so a comma is fine in it, and it is quoted before it is written, so nothing handed in here can arrive as code.";
  "The old statement keeps its place and only what it says is replaced, rather than one line being taken out and another put back. A line of an account sits among its neighbours in a written order, and taking it out to put one back is two chances to land it somewhere else.";
  arguments_assert(arguments, 3);
  let index = number_from_text(position) - 1;
  function lambda(ast) {
    let statements = js_prose_statement_nodes(ast);
    let statement = list_get(statements, index);
    let written = js_prose_statement(sentence);
    let expression = property_get(written, "expression");
    property_set(statement, "expression", expression);
  }
  let output = await function_transform(f_name, lambda);
  await function_auto(f_name);
  return output;
}
