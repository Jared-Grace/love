import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_statement_chain_rank } from "./js_statement_chain_rank.mjs";
import { js_statement_names_bound_note } from "./js_statement_names_bound_note.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function js_statements_chain_longest(statements) {
  arguments_assert(arguments, 1);
  ("The longest run of lines that have to be read in order: each one reading a name the one before it made.");
  ("This is what a body costs a reader, where its length is not. A hundred lines that each stand on their own can be read in any order and forgotten one at a time; ten lines where the tenth rests on the ninth have to be held all at once. So a list, however long it runs, comes out flat here - which is exactly the difference somebody means when they say a function that only returns a list is fine.");
  ("A name given a value inside a smaller scope is counted the same as one given a value beside it. That overcounts a little, since a name in a loop body may be gone by the next line, and the overcount is the safe direction: it never calls a tangled body flat.");
  let ranks = [];
  let bound_at = {};
  let longest = 0;
  for (let statement of statements) {
    let index = list_size(ranks);
    let rank = js_statement_chain_rank(statement, ranks, bound_at);
    list_add(ranks, rank);
    let deeper_is = greater_than(rank, longest);
    if (deeper_is) {
      longest = rank;
    }
    js_statement_names_bound_note(bound_at, statement, index);
  }
  return longest;
}
