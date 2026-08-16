import { js_statement_returned_call } from "./js_statement_returned_call.mjs";
import { js_statement_call_alone } from "./js_statement_call_alone.mjs";
import { js_statement_call_held } from "./js_statement_call_held.mjs";
import { js_statement_returned_name } from "./js_statement_returned_name.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { property_get } from "./property_get.mjs";
export function js_statements_call_only(statements) {
  "The one call these statements amount to, or nothing when they amount to more than one call.";
  let size = list_size(statements);
  if (equal(size, 1)) {
    let only = list_get(statements, 0);
    let returned = js_statement_returned_call(only);
    if (equal_not(returned, null)) {
      return returned;
    }
    let alone = js_statement_call_alone(only);
    return alone;
  }
  if (equal(size, 2)) {
    let first = list_get(statements, 0);
    let second = list_get(statements, 1);
    let held = js_statement_call_held(first);
    if (equal(held, null)) {
      return null;
    }
    let name = property_get(held, "name");
    let returned_name = js_statement_returned_name(second);
    if (equal(returned_name, name)) {
      let call = property_get(held, "call");
      return call;
    }
    return null;
  }
  return null;
}
