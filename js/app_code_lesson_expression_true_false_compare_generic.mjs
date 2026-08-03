import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_true_false_compare_generic(
  operator,
  rights,
) {
  arguments_assert(arguments, 2);
  ("One comparison operator applied to plain true and false - the prerequisite the swapping lessons were already leaning on, because every === the learner has met so far had numbers or strings on both sides and nothing had ever compared two true/false values.");
  ("One operator a lesson rather than both together, which is what makes the examples complete rather than a sample: two true/false values can sit either side of an operator in exactly four ways, the screen holds four examples, so every screen is the whole truth of this operator and nothing is left for the learner to wonder whether they have seen.");
  ("The order is fixed rather than shuffled, and it is grouped by the answer: the two lines this operator calls true come first, then the two it calls false. A shuffled screen hides that grouping and has nothing to offer in exchange, because there are only four possibilities and every screen already carries all of them, so a fresh order is not fresh content.");
  ("Grouping by the answer rather than by the shape of the pair is what makes the order carry the rule. For === the two true lines are the two matching pairs and for !== they are the two differing pairs, so each lesson opens with its own operator's yes and the learner meets what the operator is for before meeting what it rules out. The order is asked of the operator rather than written down, so neither lesson can be given the other's.");
  ("A comparison standing where a plain true or false stood is a second idea and gets its own lesson (comparing a comparison), which in turn is what the swapping lesson's (a === b) === (b === a) needs. Answer is the code's own true/false value, correct by construction.");
  let symbol = property_get(operator, "operator");
  let fn = property_get(operator, "fn");
  let name_id = title_name_id();
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
  function title_name_id() {
    "the home title: comparing true and false with this operator, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        let t = js_keyword_true();
        let f = js_keyword_false();
        html_cycle_code(parent, [
          "comparing ",
          t,
          " and ",
          f,
          " with ",
          symbol,
        ]);
      }
      return render;
    }
    let left = app_code_category_expressions();
    let built = app_code_lesson_name_id_generic(rights, left, title_get);
    return built;
  }
  function keyword(value) {
    "the code word for a true or false value";
    let on_true = js_keyword_true();
    let on_false = js_keyword_false();
    let word = ternary(value, on_true, on_false);
    return word;
  }
  function combinations() {
    "the four ways two true/false values can sit either side of the operator, enumerated rather than ordered for showing: the left word true for the first two and false for the last two, the right word changing every line, so no possibility can be missing without leaving a visible gap. What order they are shown in is decided by combinations_ordered";
    let list = [
      {
        left: true,
        right: true,
      },
      {
        left: true,
        right: false,
      },
      {
        left: false,
        right: true,
      },
      {
        left: false,
        right: false,
      },
    ];
    return list;
  }
  function line(combination) {
    "one combination written out with this lesson's operator between the two words";
    let left = property_get(combination, "left");
    let right = property_get(combination, "right");
    let left_code = keyword(left);
    let right_code = keyword(right);
    let code = text_combine_multiple([left_code, " ", symbol, " ", right_code]);
    return code;
  }
  function combinations_answered(want_true) {
    "the combinations this lesson's operator answers want_true for, keeping the enumeration order";
    function keep(combination) {
      let left = property_get(combination, "left");
      let right = property_get(combination, "right");
      let value = fn(left, right);
      let wanted = equal(value, want_true);
      return wanted;
    }
    let all = combinations();
    let kept = list_filter(all, keep);
    return kept;
  }
  function combinations_ordered() {
    "the four combinations in the order they are shown: the two this operator calls true, then the two it calls false";
    let trues = combinations_answered(true);
    let falses = combinations_answered(false);
    let ordered = list_concat(trues, falses);
    return ordered;
  }
  function refill() {
    "every one of the four possibilities, every screen, always in the same order. A refill therefore shows the same table again, which is the honest answer to asking for more examples when four is all there are";
    function mapper(combination) {
      let code = line(combination);
      return code;
    }
    let all = combinations_ordered();
    let codes = list_map(all, mapper);
    return codes;
  }
  function above(root) {
    "the recall line first, then the idea. The word also is only meaningful once what came before is named, and both operators have already been taught on numbers and again on strings, so the recall line names both of those and the second line adds true and false to them. The examples below are all four possibilities, so they carry the demonstration and no worked line here would add anything";
    let plain = app_code_container_light_blue(root);
    let t = js_keyword_true();
    let f = js_keyword_false();
    html_div_cycle_code(plain, [
      "",
      symbol,
      " already compares numbers and strings",
    ]);
    html_div_cycle_code(plain, ["", symbol, " also works on ", t, " and ", f]);
  }
}
