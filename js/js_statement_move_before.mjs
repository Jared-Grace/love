import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_move_before_refusals } from "./js_statement_move_before_refusals.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { js_statement_find_name_body } from "./js_statement_find_name_body.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_index_of_insert } from "./list_index_of_insert.mjs";
export function js_statement_move_before(ast, address, address_before) {
  arguments_assert(arguments, 3);
  ("$plain address");
  ("the word written on the line to be moved.");
  ("$plain address_before");
  ("the word written on the line it is to come to stand above.");
  ("Lifts one line of a function's body up to stand immediately above another line of the same body.");
  ("THE WHOLE OF THE PROOF IS THAT NOTHING BETWEEN THE TWO PLACES CARES, and that is what the reading in front of the writing is for: it refuses every shape where a name would be read before it is bound, where a jumped line reads what the moved line binds, or where either side waits.");
  ("The line is taken out first and put back second, so the place it goes to is found again after the taking out rather than before it. Finding it before would name a slot that has since shifted, and the line would land one place off - above the line above the one meant, which is a wrong move rather than a refused one.");
  let refusals = js_statement_move_before_refusals(
    ast,
    address,
    address_before,
  );
  let free_is = list_empty_is(refusals);
  true_is_assert_json(free_is, {
    address,
    address_before,
    refusals,
    hint: "something between the two places would read or write differently after the move, or one of them waits - ask the reading beside this one for the reasons before asking for the move",
  });
  let moved = js_statement_find_name_body(ast, address);
  let target = js_statement_find_name_body(ast, address_before);
  let declaration = js_flo(ast);
  let statements = js_function_declaration_to_block_body(declaration);
  list_remove(statements, moved);
  list_index_of_insert(statements, target, moved);
}
