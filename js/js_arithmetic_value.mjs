import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { exponent } from "./exponent.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { modulo } from "./modulo.mjs";
import { subtract } from "./subtract.mjs";
export function js_arithmetic_value(code) {
  "the value of a line of JS arithmetic - numbers, + - * / % **, a sign in front, and parentheses - worked out without running it as code: (2 + 3) * 4 comes back as 20";
  "It stands where eval stood in the lessons that work out the answer to a line they built themselves. eval gave the right number, but it will run anything at all, and a function that reaches it cannot be told apart from one that hands the machine to whatever text it is given. That one call made every code lesson count as dangerous to edit, because the lesson list imports the lessons that held it. This answers only arithmetic and throws on anything else, so it is safe whatever text arrives.";
  "It follows JS's own rules rather than school arithmetic, so it agrees with eval on every line it accepts: * / % before + -, left to right within a level, ** binding tightest and grouping to the right, a sign in front of the left side of ** refused as JS refuses it, and ++ or -- written together refused as JS refuses them. A number with a leading 0 is refused too, because module code is strict and strict JS refuses it.";
  let tokens = [];
  let i = 0;
  while (less_than(i, code.length)) {
    let c = code[i];
    if (/\s/.test(c)) {
      i = i + 1;
      continue;
    }
    let v = code.slice(i);
    let number = /^\d+(\.\d+)?/.exec(v);
    if (not_equal(number, null)) {
      let text = number[0];
      if (/^0\d/.test(text)) {
        throw new Error("a number with a leading 0 is not allowed: " + code);
      }
      tokens.push({
        number: Number(text),
      });
      i = i + text.length;
      continue;
    }
    let pair = code.slice(i, i + 2);
    if (equal(pair, "**") || equal(pair, "++") || equal(pair, "--")) {
      tokens.push({
        op: pair,
      });
      i = i + 2;
      continue;
    }
    if ("+-*/%()".includes(c)) {
      tokens.push({
        op: c,
      });
      i = i + 1;
      continue;
    }
    throw new Error("not arithmetic: " + code);
  }
  let at = 0;
  function peek() {
    let token = tokens[at];
    if (equal(token, undefined)) {
      return null;
    }
    if (equal(token.op, undefined)) {
      return null;
    }
    let r = token.op;
    return r;
  }
  function primary() {
    let token = tokens[at];
    if (equal(token, undefined)) {
      throw new Error("arithmetic ends too early: " + code);
    }
    at = at + 1;
    if (not_equal(token.number, undefined)) {
      let r2 = token.number;
      return r2;
    }
    if (equal(token.op, "(")) {
      let value = additive();
      let left = peek();
      if (not_equal(left, ")")) {
        throw new Error("a ( is never closed: " + code);
      }
      at = at + 1;
      return value;
    }
    throw new Error("not arithmetic: " + code);
  }
  function unary() {
    let op = peek();
    if (equal(op, "-")) {
      at = at + 1;
      let r3 = -unary();
      return r3;
    }
    if (equal(op, "+")) {
      at = at + 1;
      let r4 = +unary();
      return r4;
    }
    let r5 = primary();
    return r5;
  }
  function power_level() {
    let op = peek();
    if (equal(op, "-") || equal(op, "+")) {
      let value = unary();
      let left2 = peek();
      if (equal(left2, "**")) {
        throw new Error(
          "a sign in front of ** needs parentheses in JS: " + code,
        );
      }
      return value;
    }
    let base = primary();
    let left3 = peek();
    if (equal(left3, "**")) {
      at = at + 1;
      let power = power_level();
      let e = exponent(base, power);
      return e;
    }
    return base;
  }
  function multiplicative() {
    let value = power_level();
    while (true) {
      let op = peek();
      if (equal(op, "*")) {
        at = at + 1;
        let right = power_level();
        value = multiply(value, right);
      } else if (equal(op, "/")) {
        at = at + 1;
        let bottom = power_level();
        value = divide(value, bottom);
      } else if (equal(op, "%")) {
        at = at + 1;
        let right2 = power_level();
        value = modulo(value, right2);
      } else {
        return value;
      }
    }
  }
  function additive() {
    let value = multiplicative();
    while (true) {
      let op = peek();
      if (equal(op, "+")) {
        at = at + 1;
        value = value + multiplicative();
      } else if (equal(op, "-")) {
        at = at + 1;
        let right3 = multiplicative();
        value = subtract(value, right3);
      } else {
        return value;
      }
    }
  }
  let result = additive();
  if (not_equal(at, tokens.length)) {
    throw new Error("not arithmetic: " + code);
  }
  return result;
}
