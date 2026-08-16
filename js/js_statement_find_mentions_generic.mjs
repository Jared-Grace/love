import { arguments_assert } from "./arguments_assert.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
export function js_statement_find_mentions_generic(ast, name, mentions, pick) {
  arguments_assert(arguments, 4);
  ("The line one of a given run of mentions is written on, with the caller saying both which mentions to walk and which line of the chain standing over one counts as the one.");
  ("The whole of the search, held once. Which mentions to walk is what tells the earliest one from the latest one, and which line of the chain to take is what tells the line the word stands on from the line at the top of the body - two quite separate choices, and neither of them belongs here.");
  ("Mentions outside the body do not count, and the import line is why - a called function's earliest mention in the file is the line that imports it, which is not a line of the body at all.");
  ("The first mention inside the body ends the walk whether or not the picker found a line, rather than moving on to the next one. A picker that comes back with nothing is saying this mention has no line that can hold a span, and another mention of the same word is a different place in the function, not a second try at this one.");
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
    hint: "no line of this function's body names that. Only the names count - a word standing in a piece of prose cannot be addressed by, so a word read off a sentence in the body will always be refused however plainly it is written there. Would you like to check the spelling, or pick a name the function really writes?",
    name,
  });
  return found;
}
