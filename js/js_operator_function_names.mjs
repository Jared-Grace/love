import { list_includes_not } from "./list_includes_not.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { js_operators_unary } from "./js_operators_unary.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function js_operator_function_names() {
  "Every function name the auto pass WRITES INTO code when it turns an operator";
  "into a call. These are not ordinary repo functions: a local wearing one of";
  "these names is hidden from the file by the tooling itself, so the next";
  "comparison anybody writes there becomes a call to the local instead of to the";
  "operator - a line that reads exactly right and means something else.";
  "Read off the operator tables rather than written out again, so a new operator";
  "joins this list by being added there and cannot be forgotten here.";
  "Both slots count. A record names the function the operator becomes, and some";
  "also name one the LEFT side is rebuilt with - minus is written back through";
  "add, division through multiply - so a name that only ever appears in that";
  "second slot is written into code just as surely as the first.";
  let binary = js_operators_binary();
  let unary = js_operators_unary();
  let operators = list_concat(binary, unary);
  let names = [];
  function slot_add(record, key) {
    let fn = property_get_or_null(record, key);
    let missing = null_is(fn);
    if (missing) {
      return;
    }
    let fresh = list_includes_not(names, fn.name);
    if (fresh) {
      list_add(names, fn.name);
    }
  }
  for (let record of operators) {
    slot_add(record, "fn");
    slot_add(record, "left_transform");
  }
  ("An empty answer here would make every gate reading it pass while checking");
  ("nothing, which is the one failure a list like this can have and the one that");
  ("looks exactly like success.");
  let some = list_empty_not_is(names);
  assert_json(some, {
    hint: "the operator tables answered with no function names at all, so anything checking against this list would be checking nothing — would you like to look at whether the tables still carry a fn on each record?",
  });
  return names;
}
