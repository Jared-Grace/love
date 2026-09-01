import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { list_copy } from "./list_copy.mjs";
import { js_statement_pattern_names_or_null } from "./js_statement_pattern_names_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { js_object_pattern_statements } from "./js_object_pattern_statements.mjs";
import { list_replace_multiple } from "./list_replace_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function js_object_pattern_assignments_expand(ast, name_record) {
  arguments_assert(arguments, 2);
  ("$plain name_record");
  ("the word the record is written under on each line this adds, joined with the first of the words that record is taken apart into, so that two of these in one function cannot both claim the same word.");
  ("Writes out every place a record is taken apart straight into words that already stand for something, so that each of those words is written on a line of its own instead, and answers with the words the records were written under.");
  ("IT IS THE SAME CODE BY REASONING RATHER THAN BY TRYING IT. What it puts in place of the line is the same right-hand side, run once, in the same place, with the same entries read off it in the same order into the same words. Nothing can run between those lines, because they stand together where the one line stood.");
  ("IT IS WORTH DOING FOR WHAT IT UNBLOCKS RATHER THAN FOR ITSELF. A word written by a record being taken apart cannot be kept in a record instead of in a plain local: the writing is a shape rather than a call, so there is no call to swap for another. That refusal is what stopped the longest function in this repo being cut down, and these lines lift it.");
  ("IT LEAVES ALONE ANYTHING IT CANNOT SAY IN FULL, one line at a time rather than one function at a time, so a function holding one plain line of this shape and one clever one still gets the plain one written out.");
  let expanded = [];
  let blocks = js_list_type_nodes(ast, "BlockStatement");
  function block_each(block) {
    let body = js_block_body_get(block);
    let statements = list_copy(body);
    function statement_each(statement) {
      let names = js_statement_pattern_names_or_null(statement);
      let found = null_not_is(names);
      if (found) {
        let first = list_first(names);
        let joined = add("_", first);
        let name_held = add(name_record, joined);
        let expression = property_get(statement, "expression");
        let node_right = property_get(expression, "right");
        let written = js_object_pattern_statements(
          name_held,
          names,
          node_right,
        );
        list_replace_multiple(body, statement, written);
        list_add(expanded, name_held);
      }
    }
    each(statements, statement_each);
  }
  each(blocks, block_each);
  return expanded;
}
