import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_next } from "./list_next.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
export function js_statement_find_name_body(ast, name) {
  arguments_assert(arguments, 2);
  ("The first line of the function's own body that mentions a word, however deep inside that line the word is written.");
  ("The address a span of work is chosen by. Asking for the line that calls a named function was the first try and it could not reach the line a span most often starts on, because that line is an accumulator being opened - a list or an object with nothing in it and so no call in it either. A word covers both: the accumulator is named by the name it introduces, and a loop is named by anything called inside it.");
  ("First mention rather than only mention, because a word worth addressing by is usually written several times and demanding one would refuse most of them. That makes the address readable straight off the function: it is the earliest line the word appears on, which is the line a reader points at anyway.");
  ("Mentions outside the body do not count, and the import line is why - a called function's earliest mention in the file is the line that imports it, which is not a line of the body at all.");
  let mentions = js_identifiers_named(ast, name);
  let body = js_flo_body(ast);
  let found = null;
  for (let mention of mentions) {
    let stack = js_node_to_visitor_stack(ast, mention);
    let inside = list_includes(stack, body);
    if (inside) {
      found = list_next(stack, body);
      break;
    }
  }
  null_not_is_assert_json(found, {
    hint: "no line of this function's body mentions that word. Would you like to check the spelling, or pick a word the function really writes?",
    name,
  });
  return found;
}
