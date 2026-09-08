import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { js_code_not_parenthesis_wrapped } from "./js_code_not_parenthesis_wrapped.mjs";
import { app_code_comparison_pair_equality } from "./app_code_comparison_pair_equality.mjs";
import { property_get } from "./property_get.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { app_code_lesson_expression_not_equal_same_title_name_id } from "./app_code_lesson_expression_not_equal_same_title_name_id.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_expression_not_equal_same_intro } from "./app_code_lesson_expression_not_equal_same_intro.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
export function app_code_lesson_expression_not_equal_same() {
  "the derivation the curriculum promised out loud and had not kept: a !== b is the same line as !(a === b). When !== was first taught it was deliberately framed as asking whether two sides are DIFFERENT - an everyday primitive standing beside SAME - and not as the negation of ===, because that reading needs a ! around a whole comparison and there was no lesson for one. There is now, immediately before this, so the promise can be paid.";
  "The quiz matches the two forms against each other rather than asking for a value, because what is being taught is that the two spellings mean one thing. A value question would be answered correctly by a learner who never noticed they were the same line.";
  "Both truths appear across a screen: sides that are the same and sides that are different. Neither changes what the answer is - the answer is the other spelling either way - but a learner who only ever saw one would have no reason to believe the match holds generally.";
  "TWO EXAMPLES, AND THEY ARE THE DIAGONAL OF THE FOUR. Two things vary here and they vary independently, so the four questions are a two by two. Examples are drawn in the order this list is written, so the two on the screen are the first two, and taking the first two of a list written a row at a time means the second thing on it never varies at all - which is how both examples came to be the direction the lesson is named for, with the other direction sitting behind a button as though it were more of the same. Written diagonally, two examples move both things at once: different sides with the one mark, then same sides with the other. The remaining two are the rest of the square and are still there behind the button for a learner who wants them.";
  "Two rather than all four because a learner reads examples to find the pattern, not to check it. Every case shown is a case they were not asked to think about, and the two that carry both variations between them say everything the four say - the other two only repeat it with the parts swapped round.";
  "BOTH DIRECTIONS OF THE SAME SWAP ARE ASKED, not only the one the lesson is named for. Put a ! round === and you have !==; put a ! round !== and you have ===. That is one fact about what the ! does to these two marks, and asking it only one way round leaves a learner who has learned the one direction as a spelling to memorise rather than as the ! turning the mark over.";
  "It is NOT a lesson of its own, because there is no second step to take. A learner who can say that !== is !(===) already holds everything needed to say that === is !(!==); a lesson for it would be the same card with the two marks exchanged, which reads as a new thing to learn and is not one.";
  let different_symbol = js_operator_bang_double_equal_symbol();
  let same_symbol = js_operator_triple_equal_symbol();
  let bang_symbol = js_operator_bang_symbol();
  function short_form(left, right, operator) {
    "the spelling with no ! in it - a !== b, or a === b when the swap is asked the other way round";
    let code = app_code_operator_code(left, operator, right);
    return code;
  }
  function long_form(left, right, operator) {
    "the same line spelled with a ! around the opposite mark - !(a === b), or !(a !== b) the other way round";
    let inner = app_code_operator_code(left, operator, right);
    let code = js_code_not_parenthesis_wrapped(inner);
    return code;
  }
  function batch_get() {
    "four questions across the two things that vary independently: whether the sides are the same, and which of the two marks the question is written with";
    let pair = app_code_comparison_pair_equality();
    let wants = [
      {
        want_same: false,
        swapped: false,
      },
      {
        want_same: true,
        swapped: true,
      },
      {
        want_same: true,
        swapped: false,
      },
      {
        want_same: false,
        swapped: true,
      },
    ];
    function to_pair(want) {
      let want_same = property_get(want, "want_same");
      let swapped = property_get(want, "swapped");
      let sides = pair(want_same);
      let left = property_text_to(sides, "left");
      let right = property_text_to(sides, "right");
      ("the two marks trade places between the two directions, and nothing else about the question changes - which is the whole of what is being shown");
      let plain = different_symbol;
      let negated = same_symbol;
      if (swapped) {
        plain = same_symbol;
        negated = different_symbol;
      }
      let question = short_form(left, right, plain);
      let answer = long_form(left, right, negated);
      let built = {
        question,
        answer,
      };
      return built;
    }
    let pairs = list_map(wants, to_pair);
    return pairs;
  }
  let example_question_label = app_code_label_code_question();
  let written_with = text_combine_multiple([
    "Written with ",
    bang_symbol,
    ": ",
  ]);
  ("the question naming a mark by name would be wrong on half the questions now that both directions are asked, so it names what is being asked for instead: the same line with no ! in it. That is true of every answer here whichever way round the swap is going");
  let which_code = text_combine_multiple([
    "Which code writes this without the ",
    bang_symbol,
    "? ",
  ]);
  let forwards = {
    question_label: example_question_label,
    on_question: html_text_set_code_dark,
    answer_label: written_with,
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
  };
  let backwards = {
    question_label: written_with,
    on_question: html_text_set_code_dark,
    answer_label: which_code,
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
  };
  let quizzes_get = app_code_lesson_quizzes_unscramble_both({
    batch_get,
    forwards,
    backwards,
  });
  let name_id = app_code_lesson_expression_not_equal_same_title_name_id();
  let lesson = app_code_lesson_base(
    name_id,
    app_code_lesson_expression_not_equal_same_intro,
    2,
    batch_get,
    html_text_set_code_dark,
    written_with,
    quizzes_get,
    example_question_label,
    html_div_text_code_dark,
  );
  return lesson;
}
