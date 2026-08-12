import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
export function js_statement_find_name_generic(ast, name, pick) {
  arguments_assert(arguments, 3);
  ("The line a name is first written on inside the function's own body, with the caller saying which line of the stack standing over that name counts as the one.");
  ("A name rather than any word at all. What is searched is the identifiers, so a word written inside a piece of prose or any other run of text cannot be addressed by, however plainly it stands there. That is worth saying because a function here carries as much prose as code, and a word read off the prose looks like a perfectly good address right up until it is refused.");
  ("The whole of the search, held once. Two readers wrote it out between them and differed only in which node of the stack they took, so a fix made in one of them was silently missing from the other, and the closing refusal was spelled out twice word for word.");
  ("First mention rather than only mention, because a word worth addressing by is usually written several times and demanding one would refuse most of them. That makes the address readable straight off the function: it is the earliest line the word appears on, which is the line a reader points at anyway.");
  ("Mentions outside the body do not count, and the import line is why - a called function's earliest mention in the file is the line that imports it, which is not a line of the body at all.");
  ("The first mention inside the body ends the search whether or not the picker found a line, rather than moving on to the next mention. A picker that comes back with nothing is saying this mention has no line that can hold a span, and a later mention of the same word is a different place in the function, not a second try at this one.");
  let mentions = js_identifiers_named(ast, name);
  let body = js_flo_body(ast);
  let found = null;
  for (let mention of mentions) {
    let stack = js_node_to_visitor_stack(ast, mention);
    let inside = list_includes(stack, body);
    if (not(inside)) {
      continue;
    }
    found = pick(stack, body);
    break;
  }
  null_not_is_assert_json(found, {
    hint: "no line of this function's body mentions that word. Would you like to check the spelling, or pick a word the function really writes?",
    name,
  });
  return found;
}
