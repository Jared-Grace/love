import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_lift_wrapper_refusals } from "./js_function_lift_wrapper_refusals.mjs";
import { js_function_nested_lift_reading } from "./js_function_nested_lift_reading.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function function_lift_wrapper_nested_readings(ast, nested) {
  "Of the functions written inside one function, those whose body the move that leaves the name behind would take, each with the reading that says what it must be given.";
  "The twin of the one beside it, and the wider of the two: this move can take a function written as a value, which is where most of a long function's length here actually sits.";
  "Why one would not go ahead is asked next door, so this list and the move itself cannot disagree about a single function. The reading is asked for only once that has come back clear, because a function being turned down never needs one.";
  arguments_assert(arguments, 2);
  let readings = [];
  for (let declaration of nested) {
    let refusals = await js_function_lift_wrapper_refusals(ast, declaration);
    let refused_is = list_empty_not_is(refusals);
    if (refused_is) {
      continue;
    }
    let reading = await js_function_nested_lift_reading(ast, declaration);
    let taken = {
      declaration,
      reading,
    };
    list_add(readings, taken);
  }
  return readings;
}
