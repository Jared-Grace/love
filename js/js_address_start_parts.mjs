import { equal } from "./equal.mjs";
import { js_address_start_parts_call } from "./js_address_start_parts_call.mjs";
export function js_address_start_parts(expression, starts) {
  "the smaller expressions that can supply the beginning of this expression's text";
  "only the beginning counts, because the beginning of an address is what decides which site it goes to - whatever is stuck on after a fixed site can only ever reach that site";
  let kind = expression.type;
  if (equal(kind, "AwaitExpression")) {
    let r = [expression.argument];
    return r;
  }
  if (equal(kind, "BinaryExpression")) {
    let r2 = equal(expression.operator, "+") ? [expression.left] : [];
    return r2;
  }
  if (equal(kind, "TemplateLiteral")) {
    let blank = equal(expression.quasis[0].value.cooked, "");
    let r3 = blank ? expression.expressions.slice(0, 1) : [];
    return r3;
  }
  if (equal(kind, "ConditionalExpression")) {
    let r4 = [expression.consequent, expression.alternate];
    return r4;
  }
  if (equal(kind, "LogicalExpression")) {
    let r5 = [expression.left, expression.right];
    return r5;
  }
  if (equal(kind, "NewExpression")) {
    let r6 = equal(expression.callee.name, "URL")
      ? expression.arguments.slice(0, 1)
      : [];
    return r6;
  }
  if (equal(kind, "CallExpression")) {
    let r62 = js_address_start_parts_call(expression, starts);
    return r62;
  }
  let r7 = [];
  return r7;
}
