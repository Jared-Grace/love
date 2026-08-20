import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_first_try } from "./list_first_try.mjs";
export function js_call_first_argument_try(call) {
  "The first thing a call was given, or nothing at all when it was given nothing.";
  "Its neighbour hands back every argument a call carries, unplaced, so a reader wanting the first one had to take the list apart itself. The first argument is the one worth naming because of what tends to sit there - the list a check is about, the offenders a ratchet is handed - so asking for it is a question people have rather than a position they happen to want.";
  "Nothing rather than a complaint when the call is empty, because a call written with no arguments is ordinary code and not a fault. The caller then decides, and the two readers above it both decide the same way: they leave it out.";
  arguments_assert(arguments, 1);
  let call_arguments = js_call_arguments_get(call);
  let first = list_first_try(call_arguments);
  return first;
}
