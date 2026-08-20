import { app_code_lesson_expression_choose_order_boolean_generic } from "./app_code_lesson_expression_choose_order_boolean_generic.mjs";
import { app_code_lesson_expression_choose_order_not_pair_above } from "./app_code_lesson_expression_choose_order_not_pair_above.mjs";
import { app_code_lesson_expression_choose_order_not_pair_questions } from "./app_code_lesson_expression_choose_order_not_pair_questions.mjs";
import { app_code_lesson_expression_choose_order_not_pair_title_name_id } from "./app_code_lesson_expression_choose_order_not_pair_title_name_id.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_choose_order_not_pair() {
  arguments_assert(arguments, 0);
  ("a true and a false joined by an && or an || with a ! in front of the whole of it, taken a press at a time: !(true && false), choose the && , choose what it comes to, then choose the ! and what that comes to");
  ("Both of its parents are already met. A ! in front of a bracketed thing was the lesson two before it, and brackets round an && or an || were a pair of lessons earlier in the run. Nothing here is a new mark, and nothing here is a new rule - the one new thing is that the thing under the ! is two things joined rather than one comparison.");
  ("It stands at the end of the run because that is where the last of its parents is. The lesson saying a ! reaches only as far as the thing next to it, and so needs brackets to reach past it, comes several screens after the two press-at-a-time lessons this joins, and a line asking a learner to read those brackets before they have been told what they are for would be asking them to guess.");
  ("Three parts on one line where the lessons around it have two. That is the step, and it is one step: the same rule the learner has been reading off every line - a part goes when nothing is left inside it - now has to be read twice before the line is done.");
  ("Nothing has to refuse the wrong press. The ! cannot go first because what stands after it is not a value yet - it is the joined pair, still waiting - so the rule is read off the line rather than enforced against the learner, which is the same reading every lesson in this run has asked for.");
  ("Every part of this line comes to a true or a false, so the value offered instead is the other of the two and nothing has to be invented.");
  let name_id =
    app_code_lesson_expression_choose_order_not_pair_title_name_id();
  let bank = app_code_lesson_expression_choose_order_not_pair_questions();
  let lesson = app_code_lesson_expression_choose_order_boolean_generic(
    name_id,
    app_code_lesson_expression_choose_order_not_pair_above,
    bank,
  );
  return lesson;
}
