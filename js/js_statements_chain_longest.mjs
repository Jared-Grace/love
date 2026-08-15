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
  ("Counting scopes apart was tried and measured on 2026-08-15 against the ninety-six functions over the size ceiling, and it was not taken. It moves the numbers a great deal - a dispatch table of small renderers fell from eleven to five, a borrowed piece of arithmetic from thirty-seven to eight - and it excuses exactly the same five functions, because the ones that are really tables are three deep either way. What it costs is the gap: counted apart, nothing at all is three and eight functions sit at four, so the line would run through a crowd instead of through empty space, and the next person to move it by one would forgive eight bodies nobody has read.");
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
