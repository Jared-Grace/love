import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_block_item } from "./js_selects_block_item.mjs";
import { equal_assert } from "./equal_assert.mjs";
import { property_get } from "./property_get.mjs";
import { assert } from "./assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_statement_bracket_write_property_set(ast, selects) {
  "Turns the line a selection sits in from a write by brackets - record[key] = value - into the same write through the accessor, which refuses a key that reaches the language's own machinery.";
  "It is the repair the unproven keys gate asks for, and it had no command: the line could only be retyped by hand, and a hand edit is refused in exactly the files the gate names most.";
  "Not behaviour-preserving, on purpose: the accessor throws on a dangerous key and on a value that is not there, where brackets wrote both in silence. Any line that is not a plain write by brackets is refused rather than guessed at.";
  arguments_assert(arguments, 2);
  let item = js_selects_block_item(ast, selects);
  let left2 = property_get(item, "type");
  equal_assert(left2, "ExpressionStatement");
  let expression = property_get(item, "expression");
  let left3 = property_get(expression, "type");
  equal_assert(left3, "AssignmentExpression");
  let left4 = property_get(expression, "operator");
  equal_assert(left4, "=");
  let left = property_get(expression, "left");
  let left5 = property_get(left, "type");
  equal_assert(left5, "MemberExpression");
  let b = property_get(left, "computed");
  assert(b);
  let ast2 = property_get(left, "object");
  let code2 = js_unparse(ast2);
  let ast3 = property_get(left, "property");
  let code3 = js_unparse(ast3);
  let ast4 = property_get(expression, "right");
  let code4 = js_unparse(ast4);
  let code = text_combine_multiple([
    fn_name("property_set"),
    "(",
    code2,
    ", ",
    code3,
    ", ",
    code4,
    ");",
  ]);
  let parsed = js_parse_statement(code);
  object_replace(item, parsed);
}
