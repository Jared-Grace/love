import { app_code_lesson_expression_brackets_worked_card } from "./app_code_lesson_expression_brackets_worked_card.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { app_code_lesson_expression_choose_order_brackets_moved_other_pair } from "./app_code_lesson_expression_choose_order_brackets_moved_other_pair.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
export function app_code_lesson_expression_brackets_moved_intro(root) {
  arguments_assert(arguments, 1);
  ("the three cards above the brackets around either pair lesson: the rule in one sentence, then the same three words carried all the way to their value with the marks round the first pair and then round the second");
  ("Only the rule is said again, and it is said the way the pressing lesson said it, with nothing added about the marks being movable. That they may go round either pair was the news there; here it is something the learner has already pressed their way through.");
  ("The three words are the same on both cards and only the marks move, which is the whole claim of the lesson. Different words on the second card would leave a reader finding which of two things had changed before they could see that only one had.");
  ("The first card is the one whose brackets change nothing, so the learner watches the three words answer the way the operators would have answered on their own, and then watches the very same words come out the other way once the pair is moved. Shown the other way round, the moving pair would read as the ordinary case and the harmless one as the surprise.");
  ("The false at one end and the true at the other are what make the two cards land differently. With a true at the left end or a false at the right the marks would change nothing wherever they went, and the screen would show a pair being moved for no reason a learner could see.");
  ("The sentence above the second card is asked for from the pressing lesson rather than written again here, because a learner reads the two screens one after the other and a near-copy is a thing to be compared where the same words are a thing already known.");
  let left_bracket = js_code_parenthesis_left();
  let right_bracket = js_code_parenthesis_right();
  let heading_none = [];
  let heading_other =
    app_code_lesson_expression_choose_order_brackets_moved_other_pair();
  app_code_container_light_blue_cycle_code(root, [
    "Whatever is inside ",
    left_bracket,
    " and ",
    right_bracket,
    " is solved first",
  ]);
  app_code_lesson_expression_brackets_worked_card(
    root,
    heading_none,
    false,
    true,
    true,
    true,
    false,
  );
  app_code_lesson_expression_brackets_worked_card(
    root,
    heading_other,
    false,
    true,
    true,
    false,
    true,
  );
}
