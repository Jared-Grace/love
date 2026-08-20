import { list_random_item } from "./list_random_item.mjs";
import { not } from "./not.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
export function app_code_lesson_expression_brackets_value_generic(
  name_id,
  above,
  expression_of,
) {
  arguments_assert(arguments, 3);
  ("a whole bracketed boolean line asked for its value in one go, with the three things such a lesson differs by handed in: what it is called, what stands above the card, and how a line of it is built");
  ("The twin of a pressing lesson, and the shape every one of them takes. A learner who can press the bracketed operator first has still never been asked to hold both steps at once, which is the thing they will need in front of real code.");
  ("A screen holds one line that comes to true and one that comes to false, so neither answer can be reached by habit.");
  ("It also holds one line with the brackets at each end, which is what the worked cards above such a lesson promise. Drawn a line at a time, the two would fall on the same end about half the visits, and half of those a learner would be shown a sentence saying the marks may move beside two lines that never moved them.");
  ("Which of the two gets the left end is drawn, and only then does the other take what is left. Settled instead, the end would move in step with the answer and a learner could read what the line comes to off where the brackets sit, without solving anything.");
  ("The maker is handed in because it is the one thing the lessons of this shape differ by, and each of them shares its maker with the pressing lesson it is the twin of - so a learner meets one family of lines twice rather than two families that merely look alike. Which end the brackets stand at is said here rather than there, because a pressing lesson and its twin need it moved differently.");
  ("The wrong answer offered is the opposite word, which is the only other thing a line like this can come to.");
  function code_wanted(want_true, brackets_left) {
    "one line of this lesson's family, drawn to come out to want_true with the brackets at the end asked for, handed over as the text of it";
    let tree = expression_of(want_true, brackets_left);
    let code = app_code_expression_code(tree);
    return code;
  }
  function refill() {
    "two questions a screen: one line coming to true and one coming to false, one with the brackets at the left end and one at the right";
    let sides = [true, false];
    let brackets_left = list_random_item(sides);
    let v = code_wanted(true, brackets_left);
    let n = not(brackets_left);
    let v2 = code_wanted(false, n);
    let list = [v, v2];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    forwards_answer_count_override: 2,
  });
  return lesson;
}
