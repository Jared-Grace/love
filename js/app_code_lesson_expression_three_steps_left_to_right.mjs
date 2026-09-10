import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_same_strength_operator_count } from "./app_code_lesson_expression_choose_order_same_strength_operator_count.mjs";
import { app_code_expression_flat_random_same_strength } from "./app_code_expression_flat_random_same_strength.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_lesson_same_message } from "./app_code_lesson_same_message.mjs";
import { app_code_container_light_blue_text } from "./app_code_container_light_blue_text.mjs";
import { app_code_lesson_expression_choose_order_same_strength_above } from "./app_code_lesson_expression_choose_order_same_strength_above.mjs";
import { app_code_expression_flat_value_right_to_left } from "./app_code_expression_flat_value_right_to_left.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_expression_three_steps_left_to_right_title_name_id } from "./app_code_lesson_expression_three_steps_left_to_right_title_name_id.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
export function app_code_lesson_expression_three_steps_left_to_right() {
  arguments_assert(arguments, 0);
  ("the whole line answered in one go: 8 - 2 - 4 + 7 asked for what it comes to, with nothing to press");
  ("The twin of the lesson that walks the same line a press at a time, and the one the run was missing. A learner who can press three operators in the right order has still never been asked to hold three steps at once, which is what reading real code asks of them, and the pressing lesson before this one says in as many words that the lessons after it ask for a line like this in one go.");
  ("The lines are drawn by the very same maker the pressing lesson draws its lines with, so a learner meets one family of lines twice rather than two families that merely look alike. Anything the maker is later taught to draw arrives in both lessons together, and neither can drift away from the other.");
  ("What stands above the card is the pressing lesson's own telling, asked for rather than written again: one whole line of this kind taken all the way down, with the reason for each step said before it is taken. Written afresh it would be the same walk of the same family of lines in different words, and a learner who reads a near copy stops to compare it against the one they already read.");
  ("★ SO A CARD ABOVE IT SAYS THE TELLING IS THE ONE THEY ALREADY READ. Reusing the telling word for word is the right thing to do and it is also the thing that looks like a mistake: the learner meets a paragraph they have just finished and asks what they are supposed to be spotting. Nothing in the paragraph answers that, because what changed is not in the paragraph - it is that the card below no longer takes the line a press at a time. The card says so before the telling starts, so the hunt for a difference never begins.");
  ("It says the previous lesson rather than naming it, because here the twin really is the lesson immediately before this one.");
  ("The wrong answer offered is the line taken from the right hand end instead of the left. On a line whose operators are all as strong as each other those are the only two orders there are, so it is exactly the mistake this lesson exists to take away - and it is a whole answer arrived at by a rule, never a nudge of the right one.");
  function code_new() {
    "one line of this lesson's family, handed over as the text of it";
    let count =
      app_code_lesson_expression_choose_order_same_strength_operator_count();
    let tree = app_code_expression_flat_random_same_strength(count);
    let code = app_code_expression_code(tree);
    return code;
  }
  function above(root) {
    "the card saying this telling is the one already read, and then the pressing lesson's telling itself";
    let text = app_code_lesson_same_message(
      "you are asked to provide the final answer, instead of solving it step by step",
    );
    app_code_container_light_blue_text(root, text);
    app_code_lesson_expression_choose_order_same_strength_above(root);
  }
  function refill() {
    "two lines a screen, each drawn on its own so a screen can hold an adding line and a scaling one";
    let v = code_new();
    let v2 = code_new();
    let list = [v, v2];
    return list;
  }
  function decoys(question, answer) {
    "the tailored wrong answer is the line read from the right hand end back towards the left, which is the only other order there is on a line like this; where it lands on the right answer the multiple choice drops it as a duplicate";
    let v = app_code_expression_flat_value_right_to_left(question);
    let r = [v];
    return r;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id =
    app_code_lesson_expression_three_steps_left_to_right_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys,
  });
  return lesson;
}
