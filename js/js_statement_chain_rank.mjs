import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { list_get } from "./list_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function js_statement_chain_rank(statement, ranks, bound_at) {
  arguments_assert(arguments, 3);
  ("How far along a chain of lines this one stands: one when it reads nothing an earlier line made, and otherwise one past the furthest along of the lines it reads.");
  ("A line reading nothing that came before it can be read on its own, wherever it sits in the body. So its place in the file is not what it costs a reader - what it costs is how much had to be worked out before it could be understood, and that is what this counts.");
  ("The two things it is handed are the walk's memory: how far along every line so far stands, and which line last gave each name its value. Both belong to the walk rather than to the line, which is why they arrive rather than being worked out here.");
  let rank = 1;
  let read = js_identifiers_referenced_names(statement);
  for (let name of read) {
    let at = property_get_or_null(bound_at, name);
    let outside_is = null_is(at);
    if (outside_is) {
      continue;
    }
    let earlier = list_get(ranks, at);
    let after = add(earlier, 1);
    let further_is = greater_than(after, rank);
    if (further_is) {
      rank = after;
    }
  }
  return rank;
}
