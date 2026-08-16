import { add_1 } from "./add_1.mjs";
import { app_code_expression_choose_say } from "./app_code_expression_choose_say.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { app_code_expression_paint_generic } from "./app_code_expression_paint_generic.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { noop } from "./noop.mjs";
import { not } from "./not.mjs";
export function app_code_expression_step_say(
  note,
  current,
  ready,
  value_index,
) {
  arguments_assert(arguments, 4);
  ("after a replacement has been made: say what the line is now and which operator to choose next, or say the line is finished");
  ("the line is finished, so the walkthrough ends with the very thing the quiz shows when a question is finished");
  ("Nothing is said about going on. The learner has just chosen every operator in the line for themselves - the walkthrough only named which one, the pressing was already theirs - so a parting line handing them their turn takes back what they just did, and the button underneath is the only thing that has to say where the turn is.");
  ("the number that has just arrived is handed back so the caller can pick it out once the words have settled, and nothing at all when the line is finished and there is no new line to read");
  html_clear(note);
  let more = app_code_expression_node_is(current);
  if (not(more)) {
    app_shared_success_message(note);
    return null;
  }
  ("the new line is written as separate pieces rather than as one piece of text, because one number in it is about to be spoken of on its own and a run of text has no place in it to point at");
  let line = html_div(note);
  html_span_text(line, "So now we have ");
  let code_span = html_span(line);
  html_style_code_dark_nowrap(code_span);
  let arrived = null;
  let index = 0;
  function on_value(item, span) {
    "the numbers go by in the order they are read, so the one wanted is the one whose turn it is";
    let same = equal(index, value_index);
    if (same) {
      arrived = span;
    }
    index = add_1(index);
  }
  app_code_expression_paint_generic(code_span, current, noop, on_value);
  app_code_expression_choose_say(note, ready, "Now, choose ");
  return arrived;
}
