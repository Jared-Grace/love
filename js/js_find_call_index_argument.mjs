import { js_call_argument_at } from "./js_call_argument_at.mjs";
import { js_call_named_find_index } from "./js_call_named_find_index.mjs";
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
  let only = js_call_argument_at(call, place);
  return only;
}
