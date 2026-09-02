import { js_expression_is } from "./js_expression_is.mjs";
import { js_parse } from "./js_parse.mjs";
import { app_code_lesson_quiz_token_select_variations_collect } from "./app_code_lesson_quiz_token_select_variations_collect.mjs";
import { list_adder } from "./list_adder.mjs";
import { app_code_lesson_quiz_token_select_meaning_variations } from "./app_code_lesson_quiz_token_select_meaning_variations.mjs";
import { app_code_lesson_quiz_token_select_shape_variations } from "./app_code_lesson_quiz_token_select_shape_variations.mjs";
import { app_code_lesson_quiz_token_select_variations_generate_all } from "./app_code_lesson_quiz_token_select_variations_generate_all.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_code_same_meaning_is } from "./js_code_same_meaning_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { app_code_lesson_quiz_token_select_variations_spelled } from "./app_code_lesson_quiz_token_select_variations_spelled.mjs";
import { lists_unique } from "./lists_unique.mjs";
export function app_code_lesson_quiz_token_select_variations(code) {
  "every accepted token ordering for the unscramble. A commutative operator (+ * === !== || &&) can keep or swap its two sides; a commutative call (Math.min / Math.max) can take its arguments in ANY order - all permutations. The accepted orderings are the cartesian product of every such node's orderings; enumerate them, restoring each node to its original after its own loop so the tree is left unchanged.";
  "IT WIDENS AND THEN NARROWS, AND THE NARROWING IS NEXT DOOR. What is left here is the widening - every road to another ordering of the same line - plus the one reading that asks whether an ordering still says what the question says. The checks that ask whether it still says it the way the question wrote it are all the same kind of check and live under one name, because a reader who wants to know what the pool holds should not have to read three filters to find out where it came from.";
  let expression_is = js_expression_is(code);
  let tree = js_parse(code);
  function collect(la) {
    let r = app_code_lesson_quiz_token_select_variations_collect(la, tree);
    return r;
  }
  let orderable_nodes = list_adder(collect);
  let value_codes = app_code_lesson_quiz_token_select_meaning_variations(code);
  let shape_codes = app_code_lesson_quiz_token_select_shape_variations(code);
  function generate_all_with_values(la) {
    "the question's own wording, then the commutative-swap orderings, plus every same-tiles same-value rearrangement and every dealing of the tiles back into the question's own shape, into one deduplicated pool";
    "The wording the question was asked in goes in first and by hand, because neither of the two halves below is guaranteed to produce it. The swap half re-prints the line from its tree, and printing drops a bracket the line does not need - so (3 === 5) === (5 === 3) came back as 3 === 5 === (5 === 3), and the learner who copied the line the lesson had just taught them pressed an opening bracket and was told they were wrong. The same-tiles half was no help either: it declines above a small tile count, and that line has eleven.";
    "Nothing can be lost by putting it there. It is the answer the question was written to have, so it is right by construction, and everything else in the pool is only ever another way of saying it.";
    la(code);
    app_code_lesson_quiz_token_select_variations_generate_all(
      la,
      tree,
      orderable_nodes,
    );
    each(value_codes, la);
    ("The dealing half is here for the orderings neither of the two above can reach. The swap half only ever exchanges the two sides of one sign, so it cannot move a sign; the same-tiles half declines above seven tiles. A line like (3 !== 2) !== (8 === 6) has eleven, and the answer that reads (8 !== 6) === (2 !== 3) needs a sign moved - so it was offered nowhere and a learner who built it was told they were wrong.");
    ("It only deals - it never judges - so everything it offers goes through the same reading and the same spelling checks below as everything else.");
    each(shape_codes, la);
  }
  let codes = list_adder_unique(generate_all_with_values);
  ('Swapping the two sides of a sign that reads both ways is not always safe, because a plus is not always a sum. "He" + " gave" swapped over is a different sentence, and it was being accepted. So every ordering gathered above is asked once more whether it still says what the question says, and the ones that no longer do are dropped.');
  ("Only lines that stand for a value are asked. Anything else - a whole statement, say - has no sides to weigh against each other, and asking would throw away the very ordering it was written in.");
  function said_alike_is(candidate) {
    let said_alike = js_code_same_meaning_is(code, candidate);
    return said_alike;
  }
  let said = codes;
  if (expression_is) {
    said = list_filter(codes, said_alike_is);
  }
  let tokenised = list_map(said, app_code_quiz_tokens);
  let variations = app_code_lesson_quiz_token_select_variations_spelled(
    tokenised,
    code,
    expression_is,
  );
  ("Said last, because every road above can arrive at an ordering another one already reached, and the trimming just above can make two of them one. What reads this pool is a learner's answer and two gates, and an ordering standing in it twice is the same ordering either way - so the duplicate was never anything but a longer read.");
  variations = lists_unique(variations);
  return variations;
}
