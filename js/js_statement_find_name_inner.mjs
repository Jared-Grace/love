import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { js_statement_node_is } from "./js_statement_node_is.mjs";
import { list_previous } from "./list_previous.mjs";
import { list_is } from "./list_is.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";

export function js_statement_find_name_inner(ast, name) {
  arguments_assert(arguments, 2);
  ("The nearest line to the first mention of a word - the line the word is actually written on, however many loops and branches stand between it and the top of the function.");
  ("The twin of the reader that climbs to the top of the body, and the difference is the whole point. Asking for the line at the top of the body addresses the loop, which is right when the span is meant to take the loop whole; asking for the nearest line addresses something written inside it, which is the only way to cut a loop's own contents down. A long function whose size is folded inside a loop could be reached by neither the span reader that climbs nor the reader that lifts a closure, because a loop is neither.");
  ("The line has to be one of a list of lines - a block's own contents - and not a lone line hanging off a branch written without braces. A span is cut out of a run of lines, so a line standing on its own is not a place a span can begin.");
  ("Mentions outside the body do not count, for the same reason as its twin: a called function's earliest mention in the file is the line that imports it.");
  let mentions = js_identifiers_named(ast, name);
  let body = js_flo_body(ast);
  let found = null;
  for (let mention of mentions) {
    let stack = js_node_to_visitor_stack(ast, mention);
    let inside = list_includes(stack, body);
    if (!inside) {
      continue;
    }
    let nearest = list_copy_reverse(stack);
    for (let node of nearest) {
      let statement_is = js_statement_node_is(node);
      if (!statement_is) {
        continue;
      }
      let container = list_previous(stack, node);
      let listed = list_is(container);
      if (listed) {
        found = node;
        break;
      }
    }
    break;
  }
  null_not_is_assert_json(found, {
    hint: "no line of this function's body mentions that word. Would you like to check the spelling, or pick a word the function really writes?",
    name,
  });
  return found;
}
