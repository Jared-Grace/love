import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_worked_card_not(
  root,
  whole,
  inner,
  inner_value,
  stepped,
  stepped_value,
) {
  arguments_assert(arguments, 6);
  (
    "the card that carries one line held inside a ! all the way to its value: what stands inside is solved first, which leaves the ! in front of a value, and then that comes to its own"
  );
  (
    "The line in the middle stops at a ! in front of a value rather than going straight to the answer, because that is the step the ! is there to teach. A card that skipped it would show the answer arriving without ever showing the ! do anything."
  );
  (
    "One card rather than one per lesson, because the lessons that put a ! around something differ in what stands inside it, never in the three steps. It is deliberately not the same card as the one for two joining marks: there the middle step leaves a shorter line, here it leaves the whole line with a value already."
  );
  let worked = app_code_container_light_blue(root);
  html_div_cycle_code(worked, ["For ", whole, ", we do ", inner, " first"]);
  html_div_cycle_code(worked, [
    "",
    inner,
    " is ",
    inner_value,
    ", so ",
    whole,
    " is ",
    stepped,
  ]);
  html_div_cycle_code(worked, [
    "",
    stepped,
    " is ",
    stepped_value,
    ", so ",
    whole,
    " is ",
    stepped_value,
  ]);
}
