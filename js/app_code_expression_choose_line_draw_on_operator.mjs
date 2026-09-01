import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { app_code_expression_operator_pressable } from "./app_code_expression_operator_pressable.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { app_code_expression_choose_line_press_elsewhere } from "./app_code_expression_choose_line_press_elsewhere.mjs";
import { app_code_expression_choose_line_operator_refuse } from "./app_code_expression_choose_line_operator_refuse.mjs";
import { each } from "./each.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { app_code_expression_refusals_clear } from "./app_code_expression_refusals_clear.mjs";
import { app_code_expression_chosen_set } from "./app_code_expression_chosen_set.mjs";
import { app_code_expression_chips_settle } from "./app_code_expression_chips_settle.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_glow_clear } from "./app_shared_glow_clear.mjs";
import { app_code_expression_choose_line_stepped_draw } from "./app_code_expression_choose_line_stepped_draw.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function app_code_expression_choose_line_draw_on_operator({
  rising,
  ready,
  on_wrong,
  line,
  on_chosen,
  current,
  on_finished,
  on_change,
}) {
  "THREE OF THE FOUR THINGS A PRESS CAN COME TO ARE DRAWN NEXT DOOR, and each of them is one that needs to remember nothing between presses: a press made after the line was already answered, a press made on an operator that has to wait its turn, and everything that happens once the answer has been shown. What is left here is the one thing that cannot be handed anywhere - the three things this drawing of the line has to keep hold of between one press and the next.";
  arguments_assert(arguments, 1);
  let chosen = false;
  ("whatever is waiting on the learner while the line has stopped answering, handed over by whoever put the question up - because a press made on the line after that is not a mistake about the line, it is a learner who has not found where the asking moved to");
  ("Held here rather than known here. The line has no idea what a value question looks like, and the page that drew one has no idea a press was made on the line, so the one of them that can see the press is told by the one of them that can see the question.");
  let waiting = null;
  function waiting_on(component) {
    "what to point at if a press is made on the line while this question is open";
    waiting = component;
  }
  ("every operator drawn on this line is kept, because the moment one of them is chosen the rest have to be SEEN to stop answering - a chip left standing on an operator that no longer answers is a control that swallows the press, and a learner pressing it is told nothing at all");
  let pressable = [];
  ("every operator refused on this drawing of the line is kept, because a refusal is answered again the moment the right one is pressed - and by then the line is holding the marks rather than the presses that made them");
  let refused = [];
  function on_operator(node, span, node_span) {
    if (not(rising)) {
      app_code_expression_operator_pressable(span);
    }
    list_add(pressable, span);
    ("the operator that may go next is marked as the way on, from the same list that decides whether a press of it is answered or refused - so a walk of the whole course works this line the way a learner does, and there is no second answer key to disagree with the one the presses are judged by");
    let ready_now = list_includes(ready, node);
    if (ready_now) {
      html_data_set_test_happy(span);
    }
    async function on_click() {
      if (chosen) {
        app_code_expression_choose_line_press_elsewhere(waiting);
        return;
      }
      let ready_is = list_includes(ready, node);
      if (not(ready_is)) {
        app_code_expression_choose_line_operator_refuse(
          span,
          refused,
          node,
          on_wrong,
        );
        return;
      }
      chosen = true;
      ("and the marks go with the answering: the line has stopped taking presses, so nothing on it is the way on any more. What is left standing marked would be pressed again by a walk, over and over, into the guard above that answers it with a glow - and the question it should be answering is the one that just opened somewhere else.");
      each(pressable, html_data_set_test_happy_remove);
      ("the reds go before anything else happens, so what the learner watches from here is one block being worked out rather than a working out with a refusal still standing beside it");
      app_code_expression_refusals_clear(refused);
      ("the blue block is the first thing that happens, in the frame the press is made, so the press is answered before anything else on the line is asked to change");
      app_code_expression_chosen_set(node_span, span);
      ("and only then do the other chips go, so the line stops offering presses it will not answer while the value question is open");
      ("This is the whole of the fix for a learner pressing a second operator and being met with nothing. The press was already refused - it was the LOOK of the thing that lied, and a screen that looks pressable and is not reads as broken rather than as finished with.");
      ("They go in two stages rather than one: plain where they stand, a pause, and then the room they were holding closes up and the rest of the line slides along into it. Together it is two changes in one frame and the operators are read as having been moved rather than as having stopped answering.");
      await app_code_expression_chips_settle(line, pressable);
      let node_value = app_code_expression_solved(node, node);
      ("the blue block is handed over with what it comes to, so whatever answers the press may show the swap happening ON the line rather than only saying it beside the line");
      await on_chosen(node, node_value, node_span, waiting_on);
      ("the pointing is over the moment the question it pointed at is answered, and it is put out here rather than by whoever lit it, because it is lit from here and only ever while this one await is open");
      let waiting_was = null_is(waiting);
      if (not(waiting_was)) {
        app_shared_glow_clear(waiting);
      }
      await app_code_expression_choose_line_stepped_draw({
        line,
        node_span,
        node_value,
        current,
        node,
        on_wrong,
        on_chosen,
        on_finished,
        on_change,
      });
    }
    html_on_click(span, on_click);
  }
  let r = {
    pressable,
    on_operator,
  };
  return r;
}
