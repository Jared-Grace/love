import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_key_constant_or_null(node, facts, depth) {
  "the word a key always is, worked out from the code alone, or null when the code does not settle it: a written word or number, words joined with +, a name that starts as one of those and is never given another value, and the two repo calls that only hand a written word back";
  "depth stops a chain of names that refer round to each other from walking for ever; a key that deep is reported as unsettled, which is the safe answer";
  if (equal(node, null) || greater_than(depth, 40)) {
    return null;
  }
  if (
    equal(node.type, "Literal") &&
    (equal(typeof node.value, "string") || equal(typeof node.value, "number"))
  ) {
    let r = String(node.value);
    return r;
  }
  if (
    equal(node.type, "TemplateLiteral") &&
    equal(node.expressions.length, 0)
  ) {
    let r2 = node.quasis[0].value.cooked;
    return r2;
  }
  let deeper = depth + 1;
  if (equal(node.type, "BinaryExpression") && equal(node.operator, "+")) {
    let left = js_key_constant_or_null(node.left, facts, deeper);
    if (equal(left, null)) {
      return null;
    }
    let right = js_key_constant_or_null(node.right, facts, deeper);
    if (equal(right, null)) {
      return null;
    }
    let r3 = left + right;
    return r3;
  }
  let inits = property_get(facts, "inits");
  let reassigned = property_get(facts, "reassigned");
  if (
    equal(node.type, "Identifier") &&
    inits.has(node.name) &&
    not(reassigned.has(node.name))
  ) {
    let node2 = inits.get(node.name);
    let value = js_key_constant_or_null(node2, facts, deeper);
    return value;
  }
  if (
    equal(node.type, "CallExpression") &&
    equal(node.callee.type, "Identifier")
  ) {
    let callee = node.callee.name;
    let args = node.arguments;
    if (equal(callee, fn_name("fn_name")) && equal(args.length, 1)) {
      let value = js_key_constant_or_null(args[0], facts, deeper);
      return value;
    }
    if (equal(callee, fn_name("text_combine")) && equal(args.length, 2)) {
      let left = js_key_constant_or_null(args[0], facts, deeper);
      if (equal(left, null)) {
        return null;
      }
      let right = js_key_constant_or_null(args[1], facts, deeper);
      if (equal(right, null)) {
        return null;
      }
      let r4 = left + right;
      return r4;
    }
  }
  return null;
}
