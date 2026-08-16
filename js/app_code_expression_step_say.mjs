import { app_code_expression_choose_say } from "./app_code_expression_choose_say.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { not } from "./not.mjs";
export function app_code_expression_step_say(note, current, ready, line_code) {
  arguments_assert(arguments, 4);
  ("after a replacement has been made: say what the line is now and which operator to choose next, or say the line is finished");
  ("the line is finished, so the walkthrough ends with the very thing the quiz shows when a question is finished");
  ("Nothing is said about going on. The learner has just chosen every operator in the line for themselves - the walkthrough only named which one, the pressing was already theirs - so a parting line handing them their turn takes back what they just did, and the button underneath is the only thing that has to say where the turn is.");
  html_clear(note);
  let more = app_code_expression_node_is(current);
  if (not(more)) {
    app_shared_success_message(note);
    return;
  }
  html_div_cycle_code(note, ["So now we have ", line_code]);
  app_code_expression_choose_say(note, ready, "Now, choose ");
}
