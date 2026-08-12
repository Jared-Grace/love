import { app_code_lesson_expression_comparing_a_comparison_recall } from "./app_code_lesson_expression_comparing_a_comparison_recall.mjs";
import { app_code_parentheses_inside_before_outside } from "./app_code_parentheses_inside_before_outside.mjs";
import { js_true_false_word } from "./js_true_false_word.mjs";
import { app_code_lesson_expression_parentheses_one_side_title_name_id } from "./app_code_lesson_expression_parentheses_one_side_title_name_id.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_comparison_side } from "./app_code_comparison_side.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { equal } from "./equal.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_parentheses_one_side() {
  "( and ) around a comparison, on the one line where they change nothing: (3 === 5) === false. The previous lesson wrote that same line flat - 3 === 5 === false - and said so deliberately, because parentheses there would have been a rule the learner could not yet see the need for. Here they are the whole lesson and nothing else moves: the same shape, the same answer, one new pair of symbols. Meeting them on a line whose value they do not change is what makes the next lesson safe, where both sides are comparisons and the parentheses decide the answer for real.";
  "Exactly ONE side is wrapped, and it is the left one on half the examples and the right one on the other half. Wrapping BOTH is the next lesson, and doing it here would put two new things in one step - brackets, and a second comparison - when only one of them is this lesson's idea. Moving the single comparison to the right adds no second thing, so it belongs here: the line still holds one bracket pair and one plain true or false.";
  "The two orders are not the same to read, which is why both are shown. (3 > 8) === false reads straight through - the bracket comes first, so working the inside first is what left to right already does. false === (3 > 8) hands the reader false === with nothing yet to compare it to, so they have to go right, work the bracket, and come back. That is the case the rule is actually for, and it is the same asymmetry the arithmetic-comparison lesson meets - which is also why that lesson varies the side inside itself rather than spending a second lesson on the mirror.";
  let name_id = app_code_lesson_expression_parentheses_one_side_title_name_id();
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
  function expression(want_true, comparison_first) {
    "a comparison wrapped in ( and ) and a plain true or false, in whichever order comparison_first asks for, joined by === or !== picked so the whole line lands on want_true. Swapping the two sides cannot change the answer - === and !== read the same either way - so the same operator choice serves both orders";
    let comparison = app_code_comparison_side();
    let plain_value = list_random_item([true, false]);
    let agree = property_equals(comparison, "value", plain_value);
    let wanted = equal(agree, want_true);
    let on_true = js_operator_triple_equal_symbol();
    let on_false = js_operator_bang_double_equal_symbol();
    let symbol = ternary(wanted, on_true, on_false);
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let inside = property_get(comparison, "code");
    let comparison_code = text_combine_multiple([open, inside, close]);
    let plain_code = js_true_false_word(plain_value);
    let left_code = ternary(comparison_first, comparison_code, plain_code);
    let right_code = ternary(comparison_first, plain_code, comparison_code);
    let code = text_combine_multiple([left_code, " ", symbol, " ", right_code]);
    return code;
  }
  function refill() {
    "four examples a screen, crossing the two things that vary so every screen shows all four: true and false alternating, and the comparison on the left then the right";
    let v = expression(true, true);
    let v2 = expression(false, false);
    let v3 = expression(true, false);
    let v4 = expression(false, true);
    let list = [v, v2, v3, v4];
    return list;
  }
  function above(root) {
    "the word this lesson rests on, then what ( and ) do, that they change nothing on this shape, then the same line worked out twice";
    "The recall card comes first because the word comparison was defined in the arithmetic-comparison lesson and then went quiet for thirty-two lessons before this one, whose every line is about putting brackets around one. It is the same card the comparing-a-comparison lesson shows, word for word, which is what a recall should be - recognised and passed over rather than compared against a near-copy.";
    app_code_lesson_expression_comparing_a_comparison_recall(root);
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let idea = app_code_container_light_blue(root);
    html_div_cycle_code(idea, [
      "We can put ",
      open,
      " and ",
      close,
      " around a comparison",
    ]);
    html_div_cycle_code(idea, [
      "",
      "(3 === 5)",
      " means the same as ",
      "3 === 5",
    ]);
    let r = app_code_parentheses_inside_before_outside(
      " show that whatever is inside",
    );
    html_div_cycle_code(idea, ["The ", open, " and ", close, r]);
    let first = app_code_container_light_blue(root);
    html_div_cycle_code(first, ["", "3 === 5", " is ", "false"]);
    html_div_cycle_code(first, ["So ", "(3 === 5) === false", " is ", "true"]);
    let second = app_code_container_light_blue(root);
    html_div_cycle_code(second, ["", "2 < 5", " is ", "true"]);
    html_div_cycle_code(second, ["So ", "(2 < 5) !== true", " is ", "false"]);
    let either = app_code_container_light_blue(root);
    ("The outer operator is named by its SYMBOL, never by the word comparison. Two comparisons stand on this line - the > inside the brackets and the === outside them - and the word is already spent on the inner one by the card above, which says we put ( and ) AROUND a comparison. So either side of the comparison would say the brackets can sit outside the thing they are around. Both symbols are listed because the quiz asks both, and a rule naming only === would read as a rule about ===.");
    let same_symbol = js_operator_triple_equal_symbol();
    let different_symbol = js_operator_bang_double_equal_symbol();
    html_div_cycle_code(either, [
      "The ",
      open,
      " and ",
      close,
      " can be on either side of the ",
      same_symbol,
      " or ",
      different_symbol,
    ]);
    html_div_cycle_code(either, ["", "3 > 8", " is ", "false"]);
    html_div_cycle_code(either, ["So ", "false === (3 > 8)", " is ", "true"]);
    ("Solve, not work out - the childhood math word the track already runs on, decided in the arithmetic-both-sides lesson and used by every lesson that names the act. Past tense, because the two lines above it on this card have already done it: the line points back at what the reader just watched happen, rather than stating a rule they have yet to apply.");
    ("However needs an antecedent, and this line is it. Without it the word points at nothing on the card and the reader supplies the contrast themselves - or misses that there is one.");
    ("Going from left to right names the READING motion, not an evaluation rule, which is why the phrase is safe here after being refused elsewhere. The shared inside-before-outside sentence must not say before working left to right, because that would be a claim about every operator and ** runs right to left; this line makes no claim about any operator at all - it says only what stands before what on this one line.");
    ("The line names the === and the 3 > 8, and deliberately not the false. The false is leftmost, but it is already a value - there is nothing to solve about it, so a reader is never tempted to do it first and no contrast is set up by saying it comes first. The === is the one whose turn the brackets defer, so it is the one worth naming. Saying the === is first would be the other error: true about which operator comes first, false about the page, because the false is standing to its left. Comes before the 3 > 8 is true on both counts at once, and it hands the next line its subject.");
    html_div_cycle_code(either, [
      "Going from left to right, the ",
      "===",
      " comes before the ",
      "3 > 8",
    ]);
    ("The reason clause INSTANTIATES the idea card three cards up rather than repeating it. That card states the rule in its general form - whatever is inside is solved before whatever is outside - and this line says what the whatever turned out to be here. A rule and its instance differ in GENERALITY, not in wording, so this is not the near-copy the repo warns against: substituting the instance into the rule is the whole of what a worked example does, and a card that shows an instance without ever naming which rule it instances leaves the reader to guess the link.");
    ("3 > 8 is written twice rather than replaced by it. The repo kills a pronoun with the name it stands for, and here the doubled name is also what binds the two halves of the sentence together - the thing solved first and the thing inside the brackets are the SAME thing, which is the entire point.");
    html_div_cycle_code(either, [
      "However, we had to solve the ",
      "3 > 8",
      " first because ",
      "3 > 8",
      " was inside ",
      open,
      " and ",
      close,
    ]);
  }
}
