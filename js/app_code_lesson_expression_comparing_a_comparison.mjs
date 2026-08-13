import { app_code_lesson_expression_comparing_a_comparison_line } from "./app_code_lesson_expression_comparing_a_comparison_line.mjs";
import { app_code_lesson_expression_comparing_a_comparison_suppose_line } from "./app_code_lesson_expression_comparing_a_comparison_suppose_line.mjs";
import { app_code_lesson_expression_comparing_a_comparison_expression } from "./app_code_lesson_expression_comparing_a_comparison_expression.mjs";
import { app_code_lesson_expression_comparing_a_comparison_worked_example } from "./app_code_lesson_expression_comparing_a_comparison_worked_example.mjs";
import { js_true_false_word } from "./js_true_false_word.mjs";
import { app_code_lesson_expression_comparing_a_comparison_recall } from "./app_code_lesson_expression_comparing_a_comparison_recall.mjs";
import { app_code_lesson_expression_comparing_a_comparison_title_name_id } from "./app_code_lesson_expression_comparing_a_comparison_title_name_id.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
export function app_code_lesson_expression_comparing_a_comparison() {
  "a comparison standing where a plain true or false stood: 3 === 5 === false. ONE new idea on top of the previous lesson, which compared two plain true/false values - the left side is now a comparison, so it has to be worked out first and only then compared. That is the very rule the arithmetic-comparison lesson already taught (arithmetic first, then compare), with a comparison in the place arithmetic held, so the step is small. The right side stays a plain true or false here; both sides being comparisons is the both-sides parentheses lesson. Answer is the code's own true/false value, correct by construction.";
  "Taught as replacing rather than as evaluating: a comparison works out to a true or false, so it can be replaced by that true or false, and the line that is left is one the learner already knows how to read. The order caveat is pointed back at a rule they already have - we do * before + - so it is recognised rather than taken on. In every line this lesson can generate, replacing in order lands on the right value on its own.";
  "Parentheses are therefore not shown at all. They change no answer here, so they would be a rule the learner cannot yet see the need for. They earn their place in the two lessons that follow: the one-side lesson meets them on a line whose answer they do not change, and the both-sides lesson is where they change the answer for real - a === b === b === a is false while (a === b) === (b === a) is true. Those lessons are named by what they teach rather than by how many places ahead they sit, because an ordinal goes stale the moment a lesson is inserted or moved and nothing checks it.";
  "Without parentheses the unscramble will not accept the true or false first on an === or !== line, and that is right rather than a cost. === does commute, but only around its own two operands: 3 === 5 === false could be written false === (3 === 5), while written flat false === 3 === 5 reads as (false === 3) === 5 - a different line, and false where the original is true. The quiz offers only orderings whose every token has a button, so the commuted form is dropped for wanting parentheses this lesson never shows.";
  "It does accept the true or false first when the left side is < > <= or >=, because those bind tighter than === and !==, so true !== 2 < 5 still reads as true !== (2 < 5). Two lines of the same shape therefore accept different orderings. That is JS precedence showing through rather than a fault, and it is invisible here: swapping === and !== is not taught until several lessons later, so nothing has told the learner to try leading with the true or false.";
  let name_id =
    app_code_lesson_expression_comparing_a_comparison_title_name_id();
  let next_arg = list_iterator_refillable(refill);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 4,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    forwards_answer_count_override: 2,
  });
  return lesson;
  function refill() {
    "four examples a screen, true and false alternating";
    let v = app_code_lesson_expression_comparing_a_comparison_expression(true);
    let v2 =
      app_code_lesson_expression_comparing_a_comparison_expression(false);
    let v3 = app_code_lesson_expression_comparing_a_comparison_expression(true);
    let v4 =
      app_code_lesson_expression_comparing_a_comparison_expression(false);
    let list = [v, v2, v3, v4];
    return list;
  }
  function replacing(root, code, value) {
    "the move the whole lesson is: a comparison works out to a true or false, so the comparison can be replaced by that true or false. Said on its own, before any line is walked through, because it is the rule and the walkthroughs are only it happening";
    "The order caveat points back to a rule the learner already has - we do * before + - so replacing in order is a rule they are recognising rather than one they are taking on";
    let card = app_code_container_light_blue(root);
    let answer = js_true_false_word(value);
    html_div_cycle_code(card, ["", code, " is ", answer]);
    html_div_cycle_code(card, ["So we can replace ", code, " with ", answer]);
    let times = js_operator_asterisk_symbol();
    let plus = js_operator_plus_symbol();
    html_div_cycle_code(card, [
      "In general, replacing must honor order like ",
      times,
      " before ",
      plus,
    ]);
  }
  function above(root) {
    "first what the word comparison names, then the line the whole screen is here to solve, then the idea: a comparison results in true or false, so a comparison can be used anywhere a true or false can be; then the replacing rule, then two lines walked through a replacement at a time";
    "The line comes second, before anything that solves it, because the screen used to prove its lemmas first and only then name the theorem: a learner met a comparison results in true or false, and then we can replace 3 === 5 with false, with nowhere to put either - the line those two facts were FOR had not been shown yet. Asked first, each line after it is heard as an answer, and the second walkthrough was already written this way round, so the screen now asks in one voice rather than two";
    app_code_lesson_expression_comparing_a_comparison_recall(root);
    let same_first = js_operator_triple_equal();
    let goal = app_code_container_light_blue(root);
    let goal_line = app_code_lesson_expression_comparing_a_comparison_line(
      "3 === 5",
      same_first,
      false,
    );
    app_code_lesson_expression_comparing_a_comparison_suppose_line(
      goal,
      "Suppose",
      goal_line,
    );
    let idea = app_code_container_light_blue(root);
    let t = js_keyword_true();
    let f = js_keyword_false();
    let smaller = js_operator_less_than_symbol();
    html_div_cycle_code(idea, [
      "A comparison like ",
      smaller,
      " will result in ",
      t,
      " or ",
      f,
    ]);
    let t2 = js_keyword_true();
    let f2 = js_keyword_false();
    html_div_cycle_code(idea, [
      "So anywhere ",
      t2,
      " or ",
      f2,
      " can be used, we can use a comparison",
    ]);
    let same = js_operator_triple_equal();
    let different = js_operator_bang_double_equal();
    replacing(root, "3 === 5", false);
    app_code_lesson_expression_comparing_a_comparison_worked_example(
      root,
      "Suppose",
      "3 === 5",
      false,
      same,
      false,
    );
    app_code_lesson_expression_comparing_a_comparison_worked_example(
      root,
      "And suppose",
      "2 < 5",
      true,
      different,
      true,
    );
  }
}
