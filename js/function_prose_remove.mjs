import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { subtract } from "./subtract.mjs";
import { js_prose_statement_nodes } from "./js_prose_statement_nodes.mjs";
import { list_index_is } from "./list_index_is.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { js_prose_statement_remove } from "./js_prose_statement_remove.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
export async function function_prose_remove(f_name, position) {
  "Takes one line out of what a function says about itself, named by its number.";
  "This is the third of the three things that can be done to a line, and the last one still done by hand. A line can go stale rather than wrong - it explains a choice nobody makes here any more, or points at a neighbour that has gone - and then the honest repair is to take it out rather than to write something else in its place.";
  "The number is the one the reading command hands back, counting from one. Read there, take out here.";
  "Only the line named is touched, so the numbers of every line after it move up by one. Taking out two lines means reading the account again in between, and this refuses a number that is past the end rather than quietly doing nothing.";
  arguments_assert(arguments, 2);
  let left = number_from_text(position);
  let index = subtract(left, 1);
  function lambda(ast) {
    let statements = js_prose_statement_nodes(ast);
    let within_is = list_index_is(statements, index);
    let lines = list_size(statements);
    assert_json(within_is, {
      hint: "this function does not say that many things about itself — would you like to read its account back first, and name one of the numbers there?",
      f_name,
      position,
      lines,
    });
    js_prose_statement_remove(ast, index);
  }
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
