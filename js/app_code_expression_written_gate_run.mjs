import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_written_report } from "./app_code_expression_written_report.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_code_expression_written_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every line a learner is shown while pressing an expression apart means the shape that printed it.");
  ("The check a person had to make twice by eye. Math.floor3.8 * 5 stood on the whole part screen and 23 - Math.floor2.3 * 10 on the order screen, and neither is a line of javascript - a pair of brackets that belong to the name Math.floor had gone. Both were found by somebody reading the screen. Nothing here could have found them, because nothing here had ever asked whether the line above the buttons says what the buttons are pressing apart.");
  ("Two writers, one comparison, and the comparison is plain text. One writer says what a shape means; the other hands the line that shape printed to javascript and says what came back. Both spell a meaning the same way - a pair of brackets round every operator, no spaces - so two meanings are the same exactly when the two texts are equal. There is no walk here that could pass a pair it forgot to look inside, and no rule about which brackets are needed, because deciding that is the thing being checked.");
  ("Brackets everywhere rather than where they are needed, spelled out: a writing that left out whatever the strengths make unnecessary would agree with a line that dropped a pair it needed. That is the one fault this was built to find, so the writing must not share the printer's opinion about it.");
  ("Every step, because the line is printed afresh after every press. The whole line is the half somebody has looked at; the shapes in the middle of the working are the half nobody has.");
  ("Zero is the ratchet and there is no baseline file. Measured 2026-09-12 over the generated shapes: none. A baseline would record a debt that does not exist.");
  ("The operators of known strength that never reached a line fail the gate too. A generator quietly narrowed to one operator hands back shapes, prints lines, and finds no fault, and this is the one part of the answer that falls apart in that case.");
  ("Proved to fire before it was believed. Held against the shape for Math.floor(3.5) the line Math.floor3.5 - the reported fault, typed out by hand - comes back as not a line of javascript at all, and 14 % (4 * 2) printed as 14 % 4 * 2 is answered with two different meanings. Both of those lines are now among the shapes this sweeps, along with the shape (2 ** 3) ** 2, which printed as 2 ** 3 ** 2 for the same reason: the remainder sign and the power sign had no strength of their own and took a comparison's by falling through.");
  let report = app_code_expression_written_report();
  let faults = property_get(report, "faults");
  let unprinted = property_get(report, "unprinted");
  function say(fault) {
    "one step whose line does not mean its shape";
    let code = property_get(fault, "code");
    let meant = property_get(fault, "meant");
    let says = property_get(fault, "says");
    console.log(
      "LINE DOES NOT MEAN ITS SHAPE  " +
        code +
        "  shape means " +
        meant +
        "  line says " +
        says,
    );
  }
  each(faults, say);
  let shapes = property_get(report, "shapes");
  let steps = property_get(report, "steps");
  console.log(
    "shapes " +
      shapes +
      "  steps " +
      steps +
      "  faults " +
      list_size(faults) +
      "  operators never printed " +
      list_size(unprinted),
  );
  let hint =
    "a line a learner reads while pressing an expression apart does not mean the shape it was printed from - the line is named above, beside what the shape means and what the line says. a line that will not read as javascript at all is the same fault at its loudest";
  list_empty_is_assert_json(faults, {
    hint,
  });
  let hint_unprinted =
    "an operator this app has said the strength of never once reached a printed line in this sweep, so nothing here checked how it prints. either the shapes stopped covering it or it was added to a class without being added to the shapes";
  list_empty_is_assert_json(unprinted, {
    hint: hint_unprinted,
  });
  let r = {
    shapes,
    steps,
  };
  return r;
}
