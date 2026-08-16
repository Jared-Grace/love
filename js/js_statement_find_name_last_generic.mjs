import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { js_statement_find_mentions_generic } from "./js_statement_find_mentions_generic.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
export function js_statement_find_name_last_generic(ast, name, pick) {
  arguments_assert(arguments, 3);
  ("The line a name is last written on inside the function's own body, with the caller saying which line of the chain standing over that name counts as the one.");
  ("The closing end of a span, and why it had to exist. A run of paint is opened by naming something and closed by spending it - a list is filled and then walked, a box is made and then hung on the page - so the last line of the run almost never introduces a name of its own. Addressed by its earliest mention every word on that line points somewhere above the run, and the cut stops short, leaving the lines behind reaching for something that has moved away.");
  ("A name rather than any word at all, exactly as its neighbour has it: only the identifiers are searched, so a word read off a sentence in the body is refused however plainly it stands there.");
  ("Only the choosing of which mentions to walk is said here - all of them backwards, so the latest one inside the body wins. Everything else the two of them do is held one name down.");
  let mentions = js_identifiers_named(ast, name);
  let backwards = list_copy_reverse(mentions);
  let found = js_statement_find_mentions_generic(ast, name, backwards, pick);
  return found;
}
