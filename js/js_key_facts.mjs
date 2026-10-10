import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { js_visit } from "./js_visit.mjs";
import { not_equal } from "./not_equal.mjs";
import { fn_name } from "./fn_name.mjs";
export function js_key_facts(ast) {
  "what a body says about its own names, read once so that every key it reaches a record with can be judged against it: the value each name starts with, every later assignment to it, which names are ever given a new value, and where each name is first checked to be a safe word or a whole number";
  "A name given a new value anywhere is never trusted from its check, because the check may have been made on the old value. Taking a name apart into others counts every name inside the pattern as given a new value - more than strictly happens, and the safe side to be wrong on.";
  "Names are read by spelling across the whole file rather than scope by scope. The shadowing gate already refuses one name meaning two things in nested scopes, so the spelling is as good as the binding here.";
  let inits = new Map();
  let assigns = new Map();
  let reassigned = new Set();
  let guarded = new Map();
  let integers = new Map();
  function identifiers_mark(pattern) {
    function mark(v) {
      let n = property_get(v, "node");
      if (equal(n.type, "Identifier")) {
        reassigned.add(n.name);
      }
    }
    js_visit(pattern, mark);
  }
  function binding_read(v) {
    let n = property_get(v, "node");
    if (equal(n.type, "VariableDeclarator") && equal(n.id.type, "Identifier")) {
      inits.set(n.id.name, n.init);
    }
    if (equal(n.type, "AssignmentExpression")) {
      if (equal(n.left.type, "Identifier")) {
        let before = assigns.get(n.left.name) ?? [];
        before.push(n);
        assigns.set(n.left.name, before);
      }
      ("Writing into a record - a[k] = v - gives neither a nor k a new value, so only a name or a pattern on the left counts.");
      if (not_equal(n.left.type, "MemberExpression")) {
        identifiers_mark(n.left);
      }
    }
    if (
      equal(n.type, "UpdateExpression") &&
      equal(n.argument.type, "Identifier")
    ) {
      reassigned.add(n.argument.name);
    }
  }
  js_visit(ast, binding_read);
  ("Which check guards which argument: the name-only check and the integer checks look at their first argument, and the check that also asks about the record looks at its second. The tidy-up pass writes two checks in a row as each over a list, so that form is read as one check per name.");
  let words_checks = new Map([
    [fn_name("property_name_internal_not_assert"), 0],
    [fn_name("property_name_internal_not_assert_object"), 1],
  ]);
  let integer_checks = new Map([
    [fn_name("integer_is_assert"), 0],
    [fn_name("integer_is_assert_json"), 0],
  ]);
  function first_check_note(table, element, at) {
    if (equal(element, null) || not_equal(element.type, "Identifier")) {
      return;
    }
    if (reassigned.has(element.name) || table.has(element.name)) {
      return;
    }
    table.set(element.name, at);
  }
  function check_read(v) {
    let n = property_get(v, "node");
    if (
      not_equal(n.type, "CallExpression") ||
      not_equal(n.callee.type, "Identifier")
    ) {
      return;
    }
    let callee = n.callee.name;
    let args = n.arguments;
    if (
      equal(callee, "each") &&
      equal(args.length, 2) &&
      equal(args[0].type, "ArrayExpression") &&
      equal(args[1].type, "Identifier")
    ) {
      let check = args[1].name;
      let table = null;
      let left2 = words_checks.get(check);
      if (equal(left2, 0)) {
        table = guarded;
      }
      if (integer_checks.has(check)) {
        table = integers;
      }
      if (not_equal(table, null)) {
        for (let element of args[0].elements) {
          first_check_note(table, element, n.start);
        }
      }
      return;
    }
    if (words_checks.has(callee)) {
      let element = args[words_checks.get(callee)] ?? null;
      first_check_note(guarded, element, n.start);
    }
    if (integer_checks.has(callee)) {
      let element = args[integer_checks.get(callee)] ?? null;
      first_check_note(integers, element, n.start);
    }
  }
  js_visit(ast, check_read);
  let facts = {
    inits,
    assigns,
    reassigned,
    guarded,
    integers,
    visiting: new Set(),
  };
  return facts;
}
