import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { null_is } from "./null_is.mjs";
export function js_node_name_try(node) {
  "The name a piece of parsed code carries, or nothing where it carries none.";
  "Two kinds of thing carry a name a reader would recognise: a name itself, and a call, which carries the name of what it calls. Everything else is nameless, and nothing is the honest answer for it rather than a stop, because this is asked while walking over every piece of code in a file and almost none of them are either.";
  "A call reached through an object is nameless here too, since the name of what it calls is not one word. That is the same short answer the reading beneath this one gives, and the reason is written down there.";
  let named = js_identifier_name_try(node);
  let unnamed = null_is(named);
  if (unnamed) {
    let called = js_call_callee_name_try(node);
    return called;
  }
  return named;
}
