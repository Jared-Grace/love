import { app_code_lesson_expression_comparison_equal_generic_examples } from "./app_code_lesson_expression_comparison_equal_generic_examples.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_or } from "./js_operator_or.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_lesson_expression_comparison } from "./app_code_lesson_expression_comparison.mjs";
export function app_code_lesson_expression_comparison_equal_generic(words) {
  "the shared body of the two lessons teaching a comparison that also accepts equal (>= and <=): one strict relation makes it true, equal makes it true, the opposite relation makes it false";
  "The two differ in three things and nothing else: which strict relation counts as";
  "true, which one counts as false, and the words a reader is asked the question in.";
  "Written out twice they were a hundred and eight lines each, agreeing on all but";
  "nine - and every one of those hundred is a place the two can quietly stop saying";
  "the same thing.";
  "Whether the true relation is the smaller or the larger side is handed over rather";
  "than worked out from the operator, because a reader should not have to know that";
  "the pair-maker's true means less before they can tell which lesson this is.";
  let operator = property_get(words, "operator");
  let strict_operator = property_get(words, "strict_operator");
  let opposite_operator = property_get(words, "opposite_operator");
  let middle_words = property_get(words, "middle_words");
  let true_ordering = property_get(words, "true_ordering");
  let symbol = property_get(operator, "operator");
  let strict_symbol = property_get(strict_operator, "operator");
  let opposite_symbol = property_get(opposite_operator, "operator");
  let object = js_operator_triple_equal();
  let equal_symbol = property_get(object, "operator");
  let or_symbol = js_operator_or();
  let t = js_keyword_true();
  let t2 = js_keyword_true();
  let t3 = js_keyword_true();
  let t4 = js_keyword_true();
  let t5 = js_keyword_true();
  let f = js_keyword_false();
  let explanation = [
    ["if ", strict_symbol, " is ", t, ", then ", symbol, " is ", t2],
    ["if ", equal_symbol, " is ", t3, ", then ", symbol, " is ", t4],
    ["if ", opposite_symbol, " is ", t5, ", then ", symbol, " is ", f],
  ];
  function closing() {
    let parts = [
      "",
      symbol,
      " is like ",
      strict_symbol,
      " ",
      or_symbol,
      " ",
      equal_symbol,
    ];
    return parts;
  }
  let next_arg = app_code_lesson_expression_comparison_equal_generic_examples(
    symbol,
    true_ordering,
  );
  let rights = [middle_words];
  let lesson = app_code_lesson_expression_comparison({
    operator,
    question_middle: middle_words,
    name_id_rights: rights,
    closing,
    preamble: null,
    explanation,
    next_arg,
    example_count: 3,
  });
  return lesson;
}
