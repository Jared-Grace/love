import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast_body } from "./function_ast_body.mjs";
import { js_statement_address_name } from "./js_statement_address_name.mjs";
import { js_statements_span_candidates } from "./js_statements_span_candidates.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function function_span_candidates(f_name) {
  arguments_assert(arguments, 1);
  ("Every run of lines in the named function that could be cut out into a function of its own, longest first, each with the two names the cut is addressed by.");
  ("The twin of the lift candidates, for the other half of the size record. That one lists the functions written inside a long one; this lists the runs of straight work between them - and a function with no closures in it at all, which the lift reading answers about with an empty list, is the commoner shape once the lifting has been done.");
  ("What comes back is the arguments to the cut, not a description of them. The two addresses go straight into the cut beside a name of your choosing, so a row read off this list is a command that can be run rather than a place to go and look.");
  ("What it cannot say is whether a run is a thing worth naming. It knows only that pulling the run out would not go silently wrong, so the choosing is still a reader's - the list is where to look, in the order worth looking.");
  ("Nothing is written and nothing is moved.");
  let read = await function_ast_body(f_name);
  let ast = property_get(read, "ast");
  let statements = property_get(read, "statements");
  let addresses = [];
  for (let statement of statements) {
    let address = js_statement_address_name(ast, statement);
    list_add(addresses, address);
  }
  let candidates = js_statements_span_candidates(statements, addresses);
  return candidates;
}
