import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { js_statement_find_mentions_generic } from "./js_statement_find_mentions_generic.mjs";
export function js_statement_find_name_generic(ast, name, pick) {
  arguments_assert(arguments, 3);
  ("The line a name is first written on inside the function's own body, with the caller saying which line of the stack standing over that name counts as the one.");
  ("A name rather than any word at all. What is searched is the identifiers, so a word written inside a piece of prose or any other run of text cannot be addressed by, however plainly it stands there. That is worth saying because a function here carries as much prose as code, and a word read off the prose looks like a perfectly good address right up until it is refused.");
  ("First mention rather than only mention, because a name worth addressing by is usually written several times and demanding one would refuse most of them. That makes the address readable straight off the function: it is the earliest line the name appears on, which is the line a reader points at anyway.");
  ("Only the choosing of which mentions to walk is said here - all of them, in the order they are written, so the earliest one inside the body wins. Its neighbour walks the same mentions backwards and so lands on the latest, and everything else the two of them do is held one name down.");
  let mentions = js_identifiers_named(ast, name);
  let found = js_statement_find_mentions_generic(ast, name, mentions, pick);
  return found;
}
