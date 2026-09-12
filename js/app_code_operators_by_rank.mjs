import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operators_weakest } from "./app_code_operators_weakest.mjs";
import { app_code_operators_weaker } from "./app_code_operators_weaker.mjs";
import { app_code_operators_comparing } from "./app_code_operators_comparing.mjs";
import { app_code_operators_weak } from "./app_code_operators_weak.mjs";
import { app_code_operators_scaling } from "./app_code_operators_scaling.mjs";
import { app_code_operators_powering } from "./app_code_operators_powering.mjs";
import { app_code_operators_strongest } from "./app_code_operators_strongest.mjs";
export function app_code_operators_by_rank() {
  arguments_assert(arguments, 0);
  ("every strength class this app knows, weakest first: || , then &&, then the comparisons, then + and -, then * / and the remainder, then the power sign, then ! and Math.floor");
  ("The classes in an ORDER rather than a number written beside each one. Only the order ever meant anything - a caller asks whether one strength stands below another, never what a strength is worth - so the order is the whole fact, and the place a class sits in this list is its number. A class put in the middle renumbers everything above it for free, and nothing has to be told.");
  ("Every operator the app can work out appears in exactly one of these. That is what lets the question REFUSE instead of guess: a class reached by falling through cannot be told apart from an operator nobody has classed at all, so there is no class here reached that way. The remainder sign and the power sign both sat in that hole, and the printer wrote the shape 14 % (4 * 2) as the line 14 % 4 * 2.");
  let weakest = app_code_operators_weakest();
  let weaker = app_code_operators_weaker();
  let comparing = app_code_operators_comparing();
  let weak = app_code_operators_weak();
  let scaling = app_code_operators_scaling();
  let powering = app_code_operators_powering();
  let strongest = app_code_operators_strongest();
  let classes = [
    weakest,
    weaker,
    comparing,
    weak,
    scaling,
    powering,
    strongest,
  ];
  return classes;
}
