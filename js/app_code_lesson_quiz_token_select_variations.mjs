import { app_code_lesson_quiz_token_select_variations_collect } from "./app_code_lesson_quiz_token_select_variations_collect.mjs";
import { js_tokens_parenthesis_group_sizes } from "./js_tokens_parenthesis_group_sizes.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { list_tally_covers_is } from "./list_tally_covers_is.mjs";
import { app_code_lesson_quiz_token_select_variations_generate_all } from "./app_code_lesson_quiz_token_select_variations_generate_all.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { app_code_lesson_quiz_token_select_meaning_variations } from "./app_code_lesson_quiz_token_select_meaning_variations.mjs";
import { app_code_lesson_quiz_token_select_shape_variations } from "./app_code_lesson_quiz_token_select_shape_variations.mjs";
import { js_code_same_meaning_is } from "./js_code_same_meaning_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { js_expression_is } from "./js_expression_is.mjs";
import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_parse } from "./js_parse.mjs";
export function app_code_lesson_quiz_token_select_variations(code) {
  "every accepted token ordering for the unscramble. A commutative operator (+ * === !== || &&) can keep or swap its two sides; a commutative call (Math.min / Math.max) can take its arguments in ANY order - all permutations. The accepted orderings are the cartesian product of every such node's orderings; enumerate them, restoring each node to its original after its own loop so the tree is left unchanged.";
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
    ("It only deals - it never judges - so everything it offers goes through the same reading and the same two spelling checks below as everything else.");
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
  let variations = list_map(said, app_code_quiz_tokens);
  ("An arrangement may not leave out a token the question wrote. Everything above widens the pool - a sign that reads both ways, a call whose arguments come in any order, another way of saying the same value - and one of those ways is to say it with fewer symbols. Re-printing a line from its tree drops a bracket the value does not depend on, so (3 === 5) === false came back as 3 === 5 === false as well, and a lesson whose whole subject is the brackets accepted an answer with no brackets in it. The learner is told they are right without having done the thing.");
  ("Measured across every line the course can hand out, this drops something in twenty-seven of seven hundred and sixty-one, and every one of them is a lesson losing an answer that omitted its own subject: the four bracket lessons, and the statement lesson, which was accepting console.log(5) without the semicolon it had just taught.");
  ("The other direction is left alone on purpose. An arrangement with MORE in it than the question is not this fault - it is either a real second way of saying the line, or unbuildable for want of a button, and the caller already drops the unbuildable ones.");
  ("This cannot empty the pool. The question's own wording is put in by hand above, and it holds its own tokens exactly.");
  let asked = app_code_quiz_tokens(code);
  function tokens_none_missing_is(variation) {
    let covers = list_tally_covers_is(variation, asked);
    return covers;
  }
  variations = list_filter(variations, tokens_none_missing_is);
  ("Brackets have to gather as much as the question's brackets gathered. Leaving them out is only the loud half of the same fault; the quiet half keeps every tile and moves the brackets somewhere they change nothing, so (3 === 5) === false was also accepting (3) === 5 === false and (3 === 5 === false). Those are the same line by value - which is exactly why every check that goes by value calls them right - and they are not the same answer to a lesson whose subject is which part the brackets are around.");
  ("This is asked of the whole pool rather than of the half it came from, because both halves can produce it: the free rearrangement of tiles is where these came from today, and a swap that re-prints from the tree is free to bracket a different side tomorrow.");
  ("How much each bracket gathered is asked, and not which tiles it gathered. Rearranging the tiles is the whole of what the learner is doing, so a bracket holding a different comparison is not a bracket that moved - (3 !== 2) !== (8 === 6) and (8 !== 6) === (2 !== 3) put a comparison inside each bracket either way. Whether the rearranged line still says what the question said is asked separately, by the reading above.");
  ("A genuine swap survives, because the amounts are compared as a set and not by where they fall - (4 < 5) === (5 < 4) swapped over still gathers three tiles on each side. A question with no brackets is unaffected: it has no bracket button, so nothing bracketed was ever buildable.");
  let asked_groups = js_tokens_parenthesis_group_sizes(asked);
  function brackets_alike_is(variation) {
    let groups = js_tokens_parenthesis_group_sizes(variation);
    let alike = lists_equal_pair(groups, asked_groups);
    return alike;
  }
  variations = list_filter(variations, brackets_alike_is);
  if (expression_is) {
    function trim_semicolon(item) {
      let expected_last = ";";
      let has_semicolon = list_last_is(item, expected_last);
      if (has_semicolon) {
        list_remove_last(item);
      }
    }
    each(variations, trim_semicolon);
  }
  return variations;
}
