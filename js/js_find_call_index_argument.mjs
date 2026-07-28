import { js_call_named_find_index } from "./js_call_named_find_index.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_get } from "./list_get.mjs";
import { subtract } from "./subtract.mjs";
export function js_find_call_index_argument(ast, f_name, index_text, place) {
  "One thing handed to one of several calls to the same name - which call,";
  "counting from nothing, and then which argument, counting from one.";
  "The address beside this one reaches an argument only where the name is called";
  "exactly once, which is the rarer half of the cases. A gathering function is";
  "called wherever something is gathered, so the record a report is built out of";
  "is almost always handed to a name the file uses several times - and until now";
  "that record could not be addressed at all.";
  "Two counts rather than one because they answer different questions and are";
  "read off the file differently: written order picks the call, and the way a";
  "person counts arguments out loud picks the argument.";
  let call = js_call_named_find_index(ast, f_name, index_text);
  let args = js_call_arguments_get(call);
  let counted = number_from_text(place);
  let index = subtract(counted, 1);
  let only = list_get(args, index);
  return only;
}
