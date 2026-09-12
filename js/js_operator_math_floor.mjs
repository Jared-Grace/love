import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { floor } from "./floor.mjs";
export function js_operator_math_floor() {
  arguments_assert(arguments, 0);
  ("rounding down, as one of the operators written in front of the single thing it acts on, paired with what it does: Math.floor, and rounding down");
  ("It sits with the operators rather than with the functions because of what a learner does with it. On a line like Math.floor(14 / 4) * 4 the rounding down is one of the three things that happen, in one of the three places, and a learner taking that line apart a press at a time presses it exactly as they press the times. What tells it apart from the others is only how it is written - a name with its brackets - and that is a question about spelling.");
  let operator = js_code_math_floor_name();
  let fn = floor;
  let o = {
    fn,
    operator,
  };
  return o;
}
