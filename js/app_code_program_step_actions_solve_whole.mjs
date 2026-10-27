import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_last } from "./list_last.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_code_expression_name } from "./app_code_expression_name.mjs";
import { property_set } from "./property_set.mjs";
import { text_slice } from "./text_slice.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { app_code_expression_from_js } from "./app_code_expression_from_js.mjs";
import { app_code_expression_names_apart } from "./app_code_expression_names_apart.mjs";
import { catch_null } from "./catch_null.mjs";
import { app_code_expression_values_number_boolean_is } from "./app_code_expression_values_number_boolean_is.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
import { list_get } from "./list_get.mjs";
import { subtract } from "./subtract.mjs";
import { list_set } from "./list_set.mjs";
export function app_code_program_step_actions_solve_whole(code, actions) {
  arguments_assert(arguments, 2);
  ("the actions of one line of a program's trace, as a learner stepping through it is asked them: an expression holding more than one operator is solved whole, as the expression lessons solve a line - one action carrying the expression's shape, whose names and operators the learner presses in the order JavaScript takes them, choosing what each comes to. code is the whole program, since the trace places every action in it");
  ("Asked for by the human 2026-10-17: when solving an expression, as in let a = ..., the entire expression should be solved step by step, like the existing expression solver - you choose the next operator to solve, and you choose the solved value.");
  ("2026-10-17, at the human's asking: a name is read when JavaScript reaches it and not before, so the names stand in the pressed line as names, each one pressed in its turn among the operators. In a * b + c, c is read after the * is worked out. Reading every name first would teach an order JavaScript does not keep, and one that gives the wrong value once a line changes what it reads, as ++s * s does.");
  ("Not picked: every name first, then the operators, which is how this was first built. Not picked: each name just before the operator that uses it, which reads s + ++s as 6 where JavaScript gets 5. Not picked: an expression with one operator, which is still asked for by its value, as the step lessons built on it were shown and kept; pressing the only operator there is would be a press that cannot be wrong.");
  ("An expression is left as the trace gives it, one operator after another, wherever its shape cannot be read whole: a line written the short way, as a += b * 2, whose operator has no place of its own in the line; a value that is a string, which the pressed line would write without its quotes; or a shape that works out to anything but what the trace says, which would mean the two read the line by different rules.");
  let result = [];
  let run = [];
  function evaluate_is(action) {
    let kind = property_get(action, "kind");
    let r = equal(kind, "evaluate");
    return r;
  }
  function operator_is(action) {
    let expression = property_get(action, "expression");
    let b = null_is(expression);
    let r2 = not(b);
    return r2;
  }
  function run_plain() {
    for (let action of run) {
      list_add(result, action);
    }
  }
  function run_whole() {
    let operators = list_filter(run, operator_is);
    let a = list_size(operators);
    if (less_than(a, 2)) {
      return false;
    }
    let root = list_last(operators);
    let left = list_last(run);
    if (not_equal(left, root)) {
      return false;
    }
    let root_from = property_get(root, "from");
    let root_to = property_get(root, "to");
    for (let operator of operators) {
      let left2 = property_get(operator, "lead");
      let short_is =
        not_equal(left2, "") || not(null_is(property_get(operator, "within")));
      if (short_is) {
        return false;
      }
      let a2 = property_get(operator, "from");
      let inside =
        greater_than_equal(a2, root_from) &&
        less_than_equal(property_get(operator, "to"), root_to);
      if (not(inside)) {
        return false;
      }
    }
    function name_is(action) {
      let b2 = operator_is(action);
      let r3 = not(b2);
      return r3;
    }
    let names = list_filter(run, name_is);
    let values = {};
    for (let named of names) {
      let from = property_get(named, "from");
      if (null_is(from)) {
        return false;
      }
      let name = property_get(named, "name");
      let value = property_get(named, "value");
      let expression_named = app_code_expression_name(name, value);
      property_set(values, name, expression_named);
    }
    let slice = text_slice(code, root_from, root_to);
    function parse() {
      let expression = js_parse_expression(slice);
      let shape = app_code_expression_from_js(expression, values);
      let apart = app_code_expression_names_apart(shape);
      return apart;
    }
    let tree = catch_null(parse);
    if (null_is(tree)) {
      return false;
    }
    let plain = app_code_expression_values_number_boolean_is(tree);
    if (not(plain)) {
      return false;
    }
    let worked = app_code_expression_value(tree);
    let right = property_get(root, "value");
    if (not_equal(worked, right)) {
      return false;
    }
    let whole = app_code_expression_code(tree);
    let solving = object_copy_assign(root, {
      name: whole,
      whole,
      tree,
    });
    list_add(result, solving);
    return true;
  }
  function run_end() {
    let start = list_size(result);
    let done = run_whole();
    if (not(done)) {
      run_plain();
    }
    run = [];
    run_continues_mark(start);
  }
  function run_continues_mark(start) {
    "2026-10-17, at the human's asking: solving an expression is chosen once, and every step of it after that is asked straight on - each name in it, then its operators - without choosing Solve an expression again. So each step after the first inside the one expression is marked continues. Inside is inside the span of the run's last operator, which holds the whole expression; a run with no operator, or a step with no place in the line, as the a that a += b adds to, is chosen as before. Not picked: chaining every evaluating in a run, which would join names that only sit side by side, as two things logged";
    let top = null;
    for (let index = start; less_than(index, list_size(result)); index++) {
      let action = list_get(result, index);
      if (operator_is(action)) {
        top = action;
      }
    }
    if (null_is(top)) {
      return;
    }
    let top_from = property_get(top, "from");
    let top_to = property_get(top, "to");
    function inside_is(action) {
      let from = property_get(action, "from");
      if (null_is(from)) {
        return false;
      }
      let r4 =
        greater_than_equal(from, top_from) &&
        less_than_equal(property_get(action, "to"), top_to);
      return r4;
    }
    for (let index = start + 1; less_than(index, list_size(result)); index++) {
      let index2 = subtract(index, 1);
      let before = list_get(result, index2);
      let action = list_get(result, index);
      let joined = inside_is(before) && inside_is(action);
      if (joined) {
        let marked = object_copy_assign(action, {
          continues: true,
        });
        list_set(result, index, marked);
      }
    }
  }
  ("a run of evaluating with nothing else between may still hold two expressions one after the other, as an if's condition and the line inside its { } can; each ends at an operator that no operator after it in the run holds inside its own span");
  function top_is(index) {
    let action = list_get(actions, index);
    let b3 = operator_is(action);
    if (not(b3)) {
      return false;
    }
    let from3 = property_get(action, "from");
    let to = property_get(action, "to");
    for (let later = index + 1; less_than(later, list_size(actions)); later++) {
      let after = list_get(actions, later);
      let b4 = evaluate_is(after);
      if (not(b4)) {
        return true;
      }
      let holds =
        operator_is(after) &&
        less_than_equal(property_get(after, "from"), from3) &&
        greater_than_equal(property_get(after, "to"), to);
      if (holds) {
        return false;
      }
    }
    return true;
  }
  for (let index = 0; less_than(index, list_size(actions)); index++) {
    let action = list_get(actions, index);
    if (evaluate_is(action)) {
      list_add(run, action);
      if (top_is(index)) {
        run_end();
      }
      continue;
    }
    run_end();
    list_add(result, action);
  }
  run_end();
  return result;
}
