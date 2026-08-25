import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_first } from "./html_div_first.mjs";
import { app_code_head_spaced_above_code } from "./app_code_head_spaced_above_code.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_lesson_expression_choose_order_intro } from "./app_code_lesson_expression_choose_order_intro.mjs";
import { html_remove_if_not_null } from "./html_remove_if_not_null.mjs";
import { html_height_change_animate } from "./html_height_change_animate.mjs";
import { app_code_head_flush_above_code } from "./app_code_head_flush_above_code.mjs";
import { app_code_expression_replace_await } from "./app_code_expression_replace_await.mjs";
export function app_code_lesson_expression_choose_order_walkthrough_on_chosen(
  parent,
  card,
  tree,
) {
  arguments_assert(arguments, 3);
  let line_holder = html_div(parent);
  ("what the lesson is for is said of the very line the learner is about to press, so it stands inside the example rather than in a card of its own above it");
  ("It used to be said above the example, of a line built for the saying. That put two different lines of the same shape one under the other, and a learner comparing them for what had changed was reading a difference the lesson never meant to draw.");
  let head = html_div_first(card);
  ("the words stand off from the Code label under them, because the label and the line it introduces are a second thing on the card and words running straight into a label read as one sentence broken in the middle");
  app_code_head_spaced_above_code(head);
  let duration = app_shared_animation_duration();
  let intro = html_div(head);
  let note = html_div(head);
  let whole_line = app_code_expression_code(tree);
  let line_code = whole_line;
  ("which operators may go next is kept alongside the line itself, for the same reason: a refused press is answered about the line as it stands, and the answer names the operator that may go instead of the one just pressed");
  let ready_now = [];
  let rule_line = app_code_lesson_expression_choose_order_intro(
    intro,
    whole_line,
  );
  function rule_line_retire() {
    "the rule goes as soon as it has been used: the learner has just done the thing it asked for, and a sentence still telling them to do it reads as another turn to take rather than as the one they have taken";
    html_remove_if_not_null(rule_line);
    rule_line = null;
  }
  async function head_said(change) {
    "say something new in the walkthrough, and let the walkthrough grow or shrink to fit it slowly rather than at once";
    "Every one of these presses changes how much there is to read above the line, and the line is what the learner is looking at. Changed at once, the line is somewhere else by the time they look back at it and they have to find it again; grown to slowly, it slides to its new place under their eyes and is never lost.";
    "The whole head moves, not the line, because the line is only one of the things standing under the words - the labels and the buttons are under them too, and a line sliding while everything around it jumped would read as the line coming loose from the page.";
    "The words themselves are hidden while the head is moving, and shown again once it has arrived, so nothing is read while anything is sliding.";
    let promise = await html_height_change_animate(
      head,
      note,
      change,
      duration,
    );
    return promise;
  }
  async function head_said_button(change) {
    "the same settling, for words that end in a button rather than in a line to read: the head gives back the room it leaves above the Code label, because the button carries room of its own underneath it";
    "The giving back is done INSIDE the change, where the two heights are measured around it, so the room leaves at the same moment the words do and the head slides once instead of jumping and then sliding.";
    function change_flush() {
      app_code_head_flush_above_code(head);
      change();
    }
    let promise = await head_said(change_flush);
    return promise;
  }
  async function on_chosen(node, value, node_span, waiting_on) {
    "the press is answered in words before anything on the line moves: what the chosen operator comes to, and then a button to make the swap, so the replacement is something the learner does rather than something that happens to them";
    "the blue block itself is handed over too, because once the button is pressed the swap is shown travelling between that block and the two blue pieces of the sentence naming it";
    await app_code_expression_replace_await(
      note,
      node,
      node_span,
      value,
      rule_line_retire,
      head_said_button,
      waiting_on,
    );
  }
  return {
    line_holder,
    head,
    note,
    line_code,
    ready_now,
    head_said,
    on_chosen,
  };
}
