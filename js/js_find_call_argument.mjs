import { js_call_named_find } from "./js_call_named_find.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_get } from "./list_get.mjs";
import { subtract } from "./subtract.mjs";
export function js_find_call_argument(ast, name, place) {
  "One argument handed to a named call, addressed by which call and which position - which is how a selector says where.";
  "The call itself was already addressable and the pieces inside it were not, so a transform could replace a whole call and nothing smaller. Most of what a person wants to change about a call is one of the things it is given, which is a smaller and safer edit than rewriting the call around it.";
  "Position rather than name, because an argument has no name where it is written - the name belongs to the parameter waiting for it, on the other side of a call the reader may not have open. Counting starts at one, the way a person counts arguments out loud.";
  "The name has to be called exactly once here, which the address it is built on already insists on, so which call was meant is never a guess.";
  let call = js_call_named_find(ast, name);
  let args = js_call_arguments_get(call);
  let counted = number_from_text(place);
  let index = subtract(counted, 1);
  let only = list_get(args, index);
  return only;
}
