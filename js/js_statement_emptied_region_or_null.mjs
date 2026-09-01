import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { fn_name } from "./fn_name.mjs";
export function js_statement_emptied_region_or_null(statement, emptier_names) {
  "The name of the part of the screen one statement empties, or nothing when the statement empties nothing.";
  arguments_assert(arguments, 2);
  let expression_is = equal(statement.type, "ExpressionStatement");
  if (not(expression_is)) {
    return null;
  }
  let call = statement.expression;
  let call_is = equal(call.type, "CallExpression");
  if (not(call_is)) {
    return null;
  }
  let named_is = equal(call.callee.type, "Identifier");
  if (not(named_is)) {
    return null;
  }
  let empties = emptier_names.includes(call.callee.name);
  if (not(empties)) {
    return null;
  }
  ("setting a word is only an emptying when the word is nothing");
  let right = fn_name("html_text_set");
  let text_set_is = equal(call.callee.name, right);
  if (text_set_is) {
    let second = call.arguments[1];
    let literal_is = second && equal(second.type, "Literal");
    let blank_is = literal_is && equal(second.value, "");
    if (not(blank_is)) {
      return null;
    }
  }
  let first = call.arguments[0];
  if (equal(first, undefined)) {
    return null;
  }
  let identifier_is = equal(first.type, "Identifier");
  if (identifier_is) {
    let r = first.name;
    return r;
  }
  let member_is = equal(first.type, "MemberExpression");
  let plain_object_is = member_is && equal(first.object.type, "Identifier");
  if (plain_object_is) {
    let r2 = first.object.name;
    return r2;
  }
  return null;
}
