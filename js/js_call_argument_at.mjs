import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { subtract } from "./subtract.mjs";
import { list_get } from "./list_get.mjs";
export function js_call_argument_at(call, place) {
  arguments_assert(arguments, 2);
  ("One of the things a call is given, by where it stands among them.");
  ("Counting starts at one, the way a person counts arguments out loud, so the");
  ("subtraction that turns a place into an index lives here rather than at every");
  ("address that wants an argument.");
  ("Which call was meant is settled before this is asked - one address finds the");
  ("only call to a name, another finds the third of several - and both then want");
  ("the same thing from whatever they found.");
  let args = js_call_arguments_get(call);
  let counted = number_from_text(place);
  let index = subtract(counted, 1);
  let only = list_get(args, index);
  return only;
}
