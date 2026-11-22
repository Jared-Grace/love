import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_expression_node_before_is } from "./app_learn_js_expression_node_before_is.mjs";
import { app_learn_js_operator_called_is } from "./app_learn_js_operator_called_is.mjs";
import { app_learn_js_expression_value_decoys_rounding } from "./app_learn_js_expression_value_decoys_rounding.mjs";
import { app_learn_js_operator_solve } from "./app_learn_js_operator_solve.mjs";
import { app_learn_js_operator_slice_symbol } from "./app_learn_js_operator_slice_symbol.mjs";
import { equal } from "./equal.mjs";
import { list_take } from "./list_take.mjs";
import { add } from "./add.mjs";
import { list_skip } from "./list_skip.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_operator_method_two_symbol } from "./app_learn_js_operator_method_two_symbol.mjs";
import { list_first } from "./list_first.mjs";
import { list_or_text_index_of_or_minus_one } from "./list_or_text_index_of_or_minus_one.mjs";
import { list_index_of_last_try } from "./list_index_of_last_try.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_replace_pair } from "./app_learn_js_replace_pair.mjs";
import { app_learn_js_replace_all_pair } from "./app_learn_js_replace_all_pair.mjs";
import { not } from "./not.mjs";
import { app_learn_js_operator_slice_range_symbol } from "./app_learn_js_operator_slice_range_symbol.mjs";
import { list_second } from "./list_second.mjs";
import { list_slice } from "./list_slice.mjs";
import { app_learn_js_operator_concat_symbol } from "./app_learn_js_operator_concat_symbol.mjs";
import { app_learn_js_operator_join_symbol } from "./app_learn_js_operator_join_symbol.mjs";
import { app_learn_js_operator_index_of_symbol } from "./app_learn_js_operator_index_of_symbol.mjs";
import { app_learn_js_operator_last_index_of_symbol } from "./app_learn_js_operator_last_index_of_symbol.mjs";
import { app_learn_js_operator_split_symbol } from "./app_learn_js_operator_split_symbol.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join } from "./list_join.mjs";
import { text_split } from "./text_split.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { ternary } from "./ternary.mjs";
import { app_learn_js_expression_value } from "./app_learn_js_expression_value.mjs";
import { text_is } from "./text_is.mjs";
import { app_learn_js_text_join_decoys } from "./app_learn_js_text_join_decoys.mjs";
import { number_nan_is } from "./number_nan_is.mjs";
export function app_learn_js_expression_value_decoys(current, node) {
  arguments_assert(arguments, 2);
  ("the wrong values to offer beside the right one when a learner is asked what the operator they just chose comes to: the value the OTHER operator would have given on the same two numbers, and the value the whole line comes to");
  ("Both are mistakes somebody actually makes, and neither is a near miss. The first is the slip of reading the symbol wrong - 2 * 3 answered as 5. The second is answering the line instead of the step, which is the very habit the step-at-a-time lesson before this one exists to break; a learner still thinking in whole lines reaches for it.");
  ("Nothing invented and nothing counted off. A wrong answer built by nudging the right one - one more, one less - would sit in the dead zone where the learner cannot tell whether they have miscounted or misread, and would be asking about arithmetic rather than about the step.");
  ("Either candidate is dropped when it equals the right answer, so the last step of a line offers only the one wrong value: by then the step IS the whole line, and the two are the same number.");
  let symbol = property_get(node, "operator");
  let called_before =
    app_learn_js_expression_node_before_is(node) &&
    app_learn_js_operator_called_is(symbol);
  if (called_before) {
    ("2026-11-12: a call round one number, as Math.floor(3.5) is, offers what the rounding lessons offer - the number left as it was, and it rounded the other ways. It has no left side to slip an operator on, and without this a program stepped to one threw, pressed alone or solved whole");
    let rounded_wrong = app_learn_js_expression_value_decoys_rounding(
      current,
      node,
    );
    return rounded_wrong;
  }
  let left = property_get(node, "left");
  let right = property_get(node, "right");
  let value = app_learn_js_operator_solve(left, symbol, right);
  ("2026-11-22, at the human's asking, seen on [4, 8, 7, 2].slice(2): slice was offered the whole line's value, which by the last step is the same array, so the two buttons both read [7, 2]. It is offered instead the items BEFORE the index, the mix-up of taking rather than skipping, and the slice one further on, the slip the Slice lesson's wrong programs teach against");
  let right2 = app_learn_js_operator_slice_symbol();
  if (equal(symbol, right2)) {
    let taken = list_take(left, right);
    let skip_count = add(right, 1);
    let further = list_skip(left, skip_count);
    let slices = [taken, further];
    function slice_wrong_is(slice) {
      let differs2 = json_equal_not(slice, value);
      return differs2;
    }
    let slices_wrong = list_filter(slices, slice_wrong_is);
    return slices_wrong;
  }
  let symbol_index_from = app_learn_js_operator_method_two_symbol("indexOf");
  if (equal(symbol, symbol_index_from)) {
    ('2026-11-22: a.indexOf("joy", from) is offered the slips Index of from an index\'s wrong programs teach against - the first joy anywhere, from left out, and the last joy');
    let searched_from = list_first(right);
    let index_anywhere = list_or_text_index_of_or_minus_one(
      left,
      searched_from,
    );
    let index_last = list_index_of_last_try(left, searched_from);
    let indexes = [index_anywhere, index_last];
    function index_wrong_is(index_other) {
      let differs4 = json_equal_not(index_other, value);
      return differs4;
    }
    let indexes_wrong = list_filter(indexes, index_wrong_is);
    let indexes_once = list_unique(indexes_wrong);
    return indexes_once;
  }
  let symbol_replace = app_learn_js_operator_method_two_symbol("replace");
  let symbol_replace_all =
    app_learn_js_operator_method_two_symbol("replaceAll");
  if (equal(symbol, symbol_replace) || equal(symbol, symbol_replace_all)) {
    ("2026-11-22: s.replace(a, b) and s.replaceAll(a, b) are each offered the other's answer - only the first changed, or every one - and s as it was, since neither changes s");
    let replaced_first = app_learn_js_replace_pair(left, right);
    let replaced_every = app_learn_js_replace_all_pair(left, right);
    let replacings = [replaced_first, replaced_every, left];
    function replacing_wrong_is(replacing) {
      let differs5 = json_equal_not(replacing, value);
      return differs5;
    }
    let replacings_wrong = list_filter(replacings, replacing_wrong_is);
    let replacings_once = list_unique(replacings_wrong);
    return replacings_once;
  }
  let symbol_starts = app_learn_js_operator_method_two_symbol("startsWith");
  if (equal(symbol, symbol_starts)) {
    ("2026-11-22: s.startsWith(sep, i) is true or false, so it is offered the other one; no other operator's value fits a question of yes or no");
    let opposite = not(value);
    let r3 = [opposite];
    return r3;
  }
  let symbol_range = app_learn_js_operator_slice_range_symbol();
  if (equal(symbol, symbol_range)) {
    ("2026-11-22: a.slice(1, 3) is offered the slips the Slice from and to lesson's wrong programs teach against - everything from the first number on, as if the second were not there, and one item past the second, as if it were included");
    let slice_from = list_first(right);
    let slice_to = list_second(right);
    ("left may be a string, as s is in s.slice(i, i + sep.length), so its end is read off its length rather than off a list's size");
    let end = left.length;
    let to_end = list_slice(left, slice_from, end);
    let index_b = add(slice_to, 1);
    let one_more = list_slice(left, slice_from, index_b);
    let ranges = [to_end, one_more];
    function range_wrong_is(range) {
      let differs3 = json_equal_not(range, value);
      return differs3;
    }
    let ranges_wrong = list_filter(ranges, range_wrong_is);
    return ranges_wrong;
  }
  ("2026-11-22, the same day: concat and join were offered only their own answer again, and so nothing once that was dropped. Concat is offered the two arrays the other way round, the mix-up of which comes first; join is offered the items joined with nothing between and with a comma and no space, the slips the Join lesson's wrong programs teach against");
  let right3 = app_learn_js_operator_concat_symbol();
  let concat_is = equal(symbol, right3);
  let right4 = app_learn_js_operator_join_symbol();
  let join_is = equal(symbol, right4);
  ("2026-11-22, later the same day, with Last index of and Split: .indexOf is offered what .lastIndexOf gives and the other way round, the mix-up of first and last; .split is offered the whole string as one item, the mix-up of a separator the string never holds, and every letter apart, the split with nothing between");
  let right5 = app_learn_js_operator_index_of_symbol();
  let index_first_is = equal(symbol, right5);
  let right6 = app_learn_js_operator_last_index_of_symbol();
  let index_last_is = equal(symbol, right6);
  let right7 = app_learn_js_operator_split_symbol();
  let split_is = equal(symbol, right7);
  if (concat_is || join_is || index_first_is || index_last_is || split_is) {
    let others = [];
    if (concat_is) {
      let concated = list_concat(right, left);
      others = [concated];
    }
    if (join_is) {
      let joined = list_join(left, "");
      let joined2 = list_join(left, ",");
      others = [joined, joined2];
    }
    if (index_first_is) {
      let v = list_index_of_last_try(left, right);
      others = [v];
    }
    if (index_last_is) {
      let r2 = list_or_text_index_of_or_minus_one(left, right);
      others = [r2];
    }
    if (split_is) {
      let letters = text_split(left, "");
      others = [[left], letters];
    }
    function other_wrong_is(other2) {
      let differs3 = json_equal_not(other2, value);
      return differs3;
    }
    let others_wrong = list_filter(others, other_wrong_is);
    return others_wrong;
  }
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let times_is = equal(symbol, times);
  let other = ternary(times_is, plus, times);
  ("2026-11-12: Math.max slips to Math.min and back, the mix-up the lesson on keeping a value inside its edges warns of, since max sounds like the top");
  if (equal(symbol, "Math.max")) {
    other = "Math.min";
  }
  if (equal(symbol, "Math.min")) {
    other = "Math.max";
  }
  let slipped = app_learn_js_operator_solve(left, other, right);
  let whole = app_learn_js_expression_value(current);
  let candidates = [slipped, whole];
  ("2026-10-15, seen on screen: two pieces of text joined have no other operator's value, since text times text is not a value, so on its own a join was asked with one button. It is offered the wrong joins the lesson on joining two names offers");
  if (text_is(left) && text_is(right)) {
    let joins_wrong = app_learn_js_text_join_decoys(left, right);
    candidates = list_concat(candidates, joins_wrong);
  }
  function wrong_is(candidate) {
    "A misread symbol on two strings is not a value at all: \"a\" * \"b\" is NaN, which would show up as an answer nobody could have meant.";
    "2026-11-22: compared by what is written out, not by being the same thing, so an array equal to the answer, as a whole line's [7, 2] is to its last step's, is dropped like an equal number";
    let differs = json_equal_not(candidate, value);
    let b = number_nan_is(candidate);
    let number = not(b);
    let r = differs && number;
    return r;
  }
  let wrong = list_filter(candidates, wrong_is);
  let decoys = list_unique(wrong);
  return decoys;
}
