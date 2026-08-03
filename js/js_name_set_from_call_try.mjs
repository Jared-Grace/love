import { js_name_set_from_node_try } from "./js_name_set_from_node_try.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
export function js_name_set_from_call_try(ast, name) {
  "The function a written name was set from, and nothing at all when it was set from something other than a call or never set here.";
  "Two questions were folded into one here until the second one turned up: which function made the value, and whether the value was simply a written word. Both start from the same walk and part at the last line, so the walk moved next door and this is the reading of it that asks about a call.";
  "Nothing rather than a refusal, for the same reason as the call reader beneath it: this is asked about names that may well have come from anywhere, and a refusal would make the ordinary case the loud one.";
  let set_from = js_name_set_from_node_try(ast, name);
  let called = js_call_callee_name_try(set_from);
  return called;
}
