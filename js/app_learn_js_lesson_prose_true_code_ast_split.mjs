import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { modulo } from "./modulo.mjs";
import { subtract } from "./subtract.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function app_learn_js_lesson_prose_true_code_ast_split(ast) {
  arguments_assert(arguments, 1);
  ("Write every true and false in a lesson's writing as code, and hand back how many were split out.");
  ("2026-11-25, at the human's asking: true and false are values, and 85 lessons already wrote them as code; 18 wrote them as plain words. A line handed to the drawers below alternates plain writing and code, starting with plain, so a whole word true or false in a plain part is split into the plain before it, the word as code, and the plain after it - the alternation is kept, so nothing else on the line moves from code to plain or back.");
  ("Only a line handed to one of the drawers is touched, so the rule follows what the screen does rather than how a sentence is worded. A plain part left empty at the very end is dropped, since nothing follows it; anywhere else it stays, holding the alternation. Running it twice changes nothing: a word already split out is code, and code is never looked inside.");
  let drawers = [
    fn_name("app_learn_js_div_cycle_code"),
    fn_name("app_learn_js_remember_from_lesson"),
  ];
  let split = 0;
  let word = /\b(true|false)\b/;
  function literal(text) {
    let node = {
      type: "Literal",
      value: text,
    };
    return node;
  }
  function each_call(v) {
    let call = v.node;
    let callee = call.callee;
    if (not(callee) || not(drawers.includes(callee.name))) {
      return;
    }
    for (let arg of call.arguments) {
      if (not_equal(arg.type, "ArrayExpression")) {
        continue;
      }
      let elements = arg.elements;
      function lambda(e) {
        let text_is =
          e && equal(e.type, "Literal") && equal(typeof e.value, "string");
        return text_is;
      }
      ('a part written as a name, as differs in ["", differs, " is true"], is kept as it stands: its place alone says whether it is plain or code, so the written parts round it are still split');
      function lambda2(e2) {
        let kept = e2 && not_equal(e2.type, "SpreadElement");
        return kept;
      }
      let spread_none = elements.every(lambda2);
      if (not(spread_none)) {
        continue;
      }
      let rebuilt = [];
      let changed = false;
      for (let i = 0; less_than(i, elements.length); i++) {
        let e = elements[i];
        let left = modulo(i, 2);
        let plain = equal(left, 0);
        if (not(plain) || not(lambda(e)) || not(word.test(e.value))) {
          rebuilt.push(e);
          continue;
        }
        let rest = e.value;
        while (word.test(rest)) {
          let m = word.exec(rest);
          let before = rest.slice(0, m.index);
          let v2 = literal(before);
          rebuilt.push(v2);
          let v3 = literal(m[1]);
          rebuilt.push(v3);
          rest = rest.slice(m.index + m[1].length);
          split = split + 1;
        }
        let right = subtract(elements.length, 1);
        let last = equal(i, right);
        if (not(last && equal(rest, ""))) {
          let v4 = literal(rest);
          rebuilt.push(v4);
        }
        changed = true;
      }
      if (changed) {
        arg.elements = rebuilt;
      }
    }
  }
  js_visit_type(ast, "CallExpression", each_call);
  return split;
}
