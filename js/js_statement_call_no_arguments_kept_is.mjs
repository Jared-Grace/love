import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_statement_call_get } from "./js_statement_call_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_statement_call_no_arguments_kept_is(statement) {
  "Whether this one line does nothing but put a name on what a function handed back when it was asked for nothing.";
  "Asked of a line rather than of a body, because it is a line's whole shape that is being judged: a call handed nothing gives back the same thing every time it is asked, so a line like this fetches a constant and does not compute one.";
  "The result has to be kept for this to be true. A call handed nothing whose answer is thrown away was run for what it did rather than for what it said, and a run of those is real work that two functions could be sharing - which is the opposite of what a reader of this is about to conclude.";
  arguments_assert(arguments, 1);
  let got = js_statement_call_get(statement);
  let none = null_is(got);
  if (none) {
    return false;
  }
  let declaration = property_get(got, "declaration");
  let thrown_away = null_is(declaration);
  if (thrown_away) {
    return false;
  }
  let call = property_get(got, "call");
  let args = js_call_arguments_get(call);
  let asked_nothing = list_empty_is(args);
  return asked_nothing;
}
