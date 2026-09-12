import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_written_shapes } from "./app_code_expression_written_shapes.mjs";
import { app_code_operators_classed } from "./app_code_operators_classed.mjs";
import { app_code_expression_press_steps } from "./app_code_expression_press_steps.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_expression_symbols } from "./app_code_expression_symbols.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { each } from "./each.mjs";
import { app_code_expression_written_faults } from "./app_code_expression_written_faults.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_expression_written_report() {
  arguments_assert(arguments, 0);
  ("what holding every generated shape against the line it prints came to: how many shapes and how many steps were looked at, every step whose line does not mean its shape, and which operators of known strength were never once printed");
  ("Three numbers travel with the verdict because nothing wrong is also what a run that looked at nothing would say. A sweep narrowed by an edit somewhere above still hands back a list of shapes, still prints every line in it, and still finds no fault - and the shape count, the step count and the unprinted operators are the three things that fall apart in that case and in no other.");
  ("Steps and not lines, because a line is printed afresh after every press. A shape with four operators in it is five lines, and the middle three are the ones nobody has read.");
  let shapes = app_code_expression_written_shapes();
  let classed = app_code_operators_classed();
  let faults = [];
  let printed = [];
  let step_count = 0;
  function one(shape) {
    "one shape: its steps counted, its operators noted, its faults gathered";
    let steps = app_code_expression_press_steps(shape);
    step_count = step_count + list_size(steps);
    let symbols = app_code_expression_symbols(shape);
    function note(symbol) {
      list_add_unique(printed, symbol);
    }
    each(symbols, note);
    let shape_faults = app_code_expression_written_faults(shape);
    faults = list_concat(faults, shape_faults);
  }
  each(shapes, one);
  let unprinted = [];
  function unprinted_note(symbol) {
    "an operator the app has said the strength of that no generated shape ever put on a line";
    let missing = list_includes_not(printed, symbol);
    if (missing) {
      list_add(unprinted, symbol);
    }
  }
  each(classed, unprinted_note);
  let report = {
    shapes: list_size(shapes),
    steps: step_count,
    faults,
    unprinted,
  };
  return report;
}
