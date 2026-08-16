import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { js_statement_find_name_body } from "./js_statement_find_name_body.mjs";
import { list_add } from "./list_add.mjs";
import { list_first_try } from "./list_first_try.mjs";
export function js_statement_address_name(ast, statement) {
  arguments_assert(arguments, 2);
  ("A name that addresses the given line of a function's own body, or nothing when no name in it reaches it.");
  ("The two ends of a span are chosen by a name written in them, and only a name whose earliest mention in the whole body falls on that very line reaches it. A name written on an earlier line as well would send the cut somewhere above the run, which is a wrong cut rather than a refused one.");
  ("The question is settled by asking the finder the cut itself asks and seeing where it lands, rather than by working out afresh which mention comes first. Reading the rule a second time is how two readers come to disagree; asking the one reader cannot.");
  ("Nothing is written and nothing is moved.");
  let names = js_identifiers_referenced_names(statement);
  let reaching = [];
  for (let name of names) {
    let found = js_statement_find_name_body(ast, name);
    let reaches = equal(found, statement);
    if (reaches) {
      list_add(reaching, name);
    }
  }
  let first = list_first_try(reaching);
  return first;
}
