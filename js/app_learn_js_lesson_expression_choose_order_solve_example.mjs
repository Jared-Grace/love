import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { text_empty } from "./text_empty.mjs";
import { app_learn_js_example_answer_label } from "./app_learn_js_example_answer_label.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { app_learn_js_label_text_set } from "./app_learn_js_label_text_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_success_message_spaced } from "./app_shared_success_message_spaced.mjs";
import { app_shared_code_surfaces_inside } from "./app_shared_code_surfaces_inside.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { app_shared_code_surfaces_color_paint } from "./app_shared_code_surfaces_color_paint.mjs";
import { html_height_change_animate } from "./html_height_change_animate.mjs";
import { app_learn_js_expression_choose_order_ask } from "./app_learn_js_expression_choose_order_ask.mjs";
import { noop } from "./noop.mjs";
export function app_learn_js_lesson_expression_choose_order_solve_example(
  parent,
  card,
  tree,
  decoys_get,
) {
  arguments_assert(arguments, 4);
  ("the lesson's front page: the same two presses the quiz asks for, with what the lesson is for said above them and then what to do NOW - the operator is chosen the way it was chosen before, and then what it comes to is chosen too");
  ("Laid out exactly as the walkthrough of the lesson before it: the words at the top of the card above the Code label, and the line to press underneath. The two screens are one screen with one thing changed, so a learner arriving at the second finds every part of it where they left it, and the one difference is the only thing they have to find.");
  ("What the lesson is FOR is said above the card and not here, so nothing on the card is about a line other than the one on it. All the card holds is the asking and the line it is asking about.");
  ("Nothing stands in a box of its own. The lesson before says all of its words as plain lines at the top of the card, and a box drawn around the same words here would read as a different kind of saying rather than as the same saying carried on.");
  ("One asking at a time, and always the one for the press that is wanted right now. Both of them standing together is a plan to hold in the head before starting; one at a time, each is only ever about the press being made, and the words arrive as the learner reaches them rather than having to be remembered from the top of the screen.");
  ("The words are the quiz's own three askings, out of the same three functions the quiz sets its label from. The front page IS the quiz with nothing counted against you, so a second wording of the same three instructions would be two sets of words to keep in step, and the screen next door would be asking in words the learner had never been shown.");
  ("The asking goes when the line is down to a value, because there is nothing left to press and an instruction still standing there would be asking for a press that cannot be made. What was said ABOVE it stays, because it is what the lesson is for rather than what to do next.");
  ("A wrong press is answered by the line itself, in red, the same way it is in the quiz. Being stopped from getting it wrong is not this page's job.");
  ("Which wrong values are offered is handed in, because it is the one thing the lessons on this page differ by. A line of numbers and a line of comparisons are pressed the same way, laid out the same way and finished the same way; what a learner could plausibly press INSTEAD is the only place the two part company, and a second copy of this page would leave one lesson's habits to be repaired in two files.");
  ("2026-11-09, at the human's asking: the asking is the label directly over the line it names - Expression to solve - drawn the way the quiz draws its label over the same line, so code shown above it, such as the array a line reads, stands under its own Code label first and the two labels each sit over the one thing they name. It once stood at the top of the card above the Code label, which put the name of the expression over the array");
  let head = html_div(parent);
  let quiz_label = text_empty();
  let asking = app_learn_js_example_answer_label(head, quiz_label);
  let duration = app_shared_animation_duration();
  function ask(words) {
    "the one place the asking is written, so the three askings take turns in it instead of standing beside each other";
    app_learn_js_label_text_set(asking, words);
  }
  function finished_say() {
    "the line is finished, so where the asking stood the learner is told well done - in the very words and the very green the walkthrough of the lesson before ends in, and the quiz ends every question in, out of the one place all three of them read";
    "It replaces the asking rather than standing under it, because the asking was the only thing on the card that was ever about what to do next, and there is nothing to do next.";
    html_clear(asking);
    ("2026-11-10, at the human's asking: spaced and lettered black, as it is where it stands alone elsewhere, rather than taking the blue of the label it is put in");
    app_shared_success_message_spaced(asking);
    ("2026-11-10, at the human's asking: the code on the card turns green once the line is solved, the array it reads as well as the line, as a program stepped through turns green once it is complete - green saying solved as it says right everywhere else in this app");
    let surfaces = app_shared_code_surfaces_inside(parent);
    let green = app_shared_button_background();
    app_shared_code_surfaces_color_paint(surfaces, green);
  }
  async function finished_grow() {
    "the well done is three times the height of the asking it stands in place of, so the room for it is taken slowly and the words are held back until it has been taken - by the very unit the walkthrough of the lesson before moves its own head with, so the two screens grow at one speed and in one manner.";
    "Everything under the card - the line, the buttons, the whole rest of the page - slides down as the room is made, rather than being somewhere else by the time the learner looks back. Taken at once it was a jump, and the well done arrived in the middle of it, so the one thing on the screen worth reading was the thing hardest to catch.";
    await html_height_change_animate(head, asking, finished_say, duration);
  }
  ("the pressing is the quiz next door's pressing, out of the one place both of them read - all this page does differently is write the asking on the card instead of over a row of answers, and count nothing against a wrong press");
  app_learn_js_expression_choose_order_ask({
    parent,
    tree,
    say: ask,
    finished: finished_grow,
    decoys_get,
    on_wrong: noop,
    on_success: noop,
    value_arrive: noop,
  });
}
