import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_replace_ask } from "./app_code_expression_replace_ask.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { noop } from "./noop.mjs";
import { promise_wrap_unawait } from "./promise_wrap_unawait.mjs";
import { text_to } from "./text_to.mjs";
export async function app_code_expression_replace_await(
  note,
  node,
  value,
  retire,
  settle,
) {
  arguments_assert(arguments, 5);
  ("offer the swap the learner has just earned, and wait there until they press it: the replacement is something they do rather than something that happens to them");
  ("The saying and the waiting are one thing and are written as one. Split, the caller holds a promise whose only resolver is inside words it also has to write, and the two have to be kept in the right order by hand.");
  ("The words are handed to the settler rather than written straight into the page, because saying them changes how much there is to read above the line and the line is what the learner is looking at; the settler is what lets the page take up the difference slowly.");
  let solved_code = app_code_expression_code(node);
  let value_text = text_to(value);
  let press = noop;
  function lambda$resolve(resolve) {
    press = resolve;
  }
  ("the waiting is opened BEFORE the button is made, because the button is made inside the change whose height is being measured and it has to be given the thing to do at the moment it is made");
  let pressed = promise_wrap_unawait(lambda$resolve);
  function change() {
    app_code_expression_replace_ask(
      note,
      solved_code,
      value_text,
      retire,
      press,
    );
  }
  await settle(change);
  await pressed;
}
