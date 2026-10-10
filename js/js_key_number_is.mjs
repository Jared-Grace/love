import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_key_number_is(node, facts, depth) {
  "whether the code alone shows this key is always a number - a written number, a sign or arithmetic, a length, a Math call, one of the repo's arithmetic calls, or a name checked to be a whole number earlier or only ever given numbers. A number can never name the language's own machinery, so a record reached with one is safe whatever the number is.";
  "+ counts only when both sides are numbers, because + joins words as well. A name that refers round to itself while being judged is taken as a number for that one step: every other value it is given still has to be one, so the loop cannot let a word in.";
  if (equal(node, null) || greater_than(depth, 30)) {
    return false;
  }
  let deeper = depth + 1;
  let arithmetic = ["-", "*", "/", "%", "**", "|", "&", "^", "<<", ">>", ">>>"];
  if (equal(node.type, "Literal")) {
    let is = equal(typeof node.value, "number");
    return is;
  }
  if (equal(node.type, "UnaryExpression")) {
    let is = ["-", "+", "~"].includes(node.operator);
    return is;
  }
  if (equal(node.type, "UpdateExpression")) {
    return true;
  }
  if (equal(node.type, "BinaryExpression")) {
    if (arithmetic.includes(node.operator)) {
      return true;
    }
    let is =
      equal(node.operator, "+") &&
      js_key_number_is(node.left, facts, deeper) &&
      js_key_number_is(node.right, facts, deeper);
    return is;
  }
  if (equal(node.type, "MemberExpression")) {
    let is = not(node.computed) && equal(node.property.name, "length");
    return is;
  }
  if (equal(node.type, "ConditionalExpression")) {
    let is =
      js_key_number_is(node.consequent, facts, deeper) &&
      js_key_number_is(node.alternate, facts, deeper);
    return is;
  }
  if (equal(node.type, "CallExpression")) {
    let callee = node.callee;
    if (
      equal(callee.type, "MemberExpression") &&
      equal(callee.object.type, "Identifier") &&
      equal(callee.object.name, "Math") &&
      not(callee.computed)
    ) {
      return true;
    }
    if (not_equal(callee.type, "Identifier")) {
      return false;
    }
    let numbers_always = [
      "parseInt",
      "parseFloat",
      "Number",
      "subtract",
      "multiply",
      "divide",
      "modulo",
      "exponent",
      fn_name("subtract_1"),
      fn_name("list_size"),
    ];
    if (numbers_always.includes(callee.name)) {
      return true;
    }
    if (equal(callee.name, fn_name("add_1"))) {
      let is = js_key_number_is(node.arguments[0] ?? null, facts, deeper);
      return is;
    }
    if (equal(callee.name, "add")) {
      function argument_number_is(argument) {
        let is = js_key_number_is(argument, facts, deeper);
        return is;
      }
      let is = node.arguments.every(argument_number_is);
      return is;
    }
    return false;
  }
  if (not_equal(node.type, "Identifier")) {
    return false;
  }
  let integers = property_get(facts, "integers");
  if (
    integers.has(node.name) &&
    less_than(integers.get(node.name), node.start)
  ) {
    return true;
  }
  let inits = property_get(facts, "inits");
  let b = inits.has(node.name);
  if (not(b)) {
    return false;
  }
  let visiting = property_get(facts, "visiting");
  if (visiting.has(node.name)) {
    return true;
  }
  visiting.add(node.name);
  let node2 = inits.get(node.name);
  let is = js_key_number_is(node2, facts, deeper);
  let assigns = property_get(facts, "assigns");
  for (let assignment of assigns.get(node.name) ?? []) {
    if (not(is)) {
      break;
    }
    if (equal(assignment.operator, "=") || equal(assignment.operator, "+=")) {
      is = js_key_number_is(assignment.right, facts, deeper);
    } else {
      let v = assignment.operator.slice(0, -1);
      is = arithmetic.includes(v);
    }
  }
  visiting.delete(node.name);
  return is;
}
