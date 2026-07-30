import { app_code_string_operators_shape } from "./app_code_string_operators_shape.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_verse_words_clean } from "./app_code_verse_words_clean.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
export function app_code_lesson_expression_string_order() {
  "comparing two strings for order with < and > - the same less-than and greater-than the learner already knows on numbers, now on strings, where the ordering is alphabetical (dictionary order). Only the all-lowercase verse words are used, because JavaScript orders strings by character code, where every capital letter sorts before every small one, so mixing cases would make God sort before and - true to the machine but the opposite of the alphabetical order being taught, and lowercasing a reverent word to dodge that is worse. Four questions cover both operators and both answers. Intended home: just after the numeric less-than / greater-than lessons and the string-equality lesson; parked at the END for now while one student is mid-stream, written as if it sat at that earlier home.";
  let less_operator = "<";
  let greater_operator = ">";
  let combos = [
    {
      operator: less_operator,
      left_first: true,
    },
    {
      operator: greater_operator,
      left_first: true,
    },
    {
      operator: less_operator,
      left_first: false,
    },
    {
      operator: greater_operator,
      left_first: false,
    },
  ];
  function words_source() {
    "the verse words that are already all lower case, made distinct - the only ones whose character-code order matches alphabetical order, so a capital never sorts ahead of a small letter in front of the learner";
    let cleaned = app_code_verse_words_clean();
    let distinct = list_unique(cleaned);
    function lower_case_is(word) {
      "whether a word is already all lower case (unchanged by lower-casing it)";
      let lowered = text_lower_to(word);
      let same = equal(word, lowered);
      return same;
    }
    let lower_only = list_filter(distinct, lower_case_is);
    return lower_only;
  }
  function question_code(combo, earlier, later) {
    "one comparison as a code string: the shared earlier/later pair in quotes with the operator between them, arranged so the alphabetically-earlier word sits on the left when left_first is set and on the right when it is not - which fixes whether the comparison is true or false without computing it here";
    let operator = property_get(combo, "operator");
    let left_first = property_get(combo, "left_first");
    let left = ternary(left_first, earlier, later);
    let right = ternary(left_first, later, earlier);
    let code_left = app_code_string_code(left);
    let code_right = app_code_string_code(right);
    let joined = text_combine_multiple([
      code_left,
      " ",
      operator,
      " ",
      code_right,
    ]);
    return joined;
  }
  function refill() {
    "four comparisons over ONE shared pair of words, so only the operator and the left/right order change from one example to the next and the learner reads the rule off the contrast: less-than and greater-than, each shown true and false, a balanced two true and two false";
    let words = words_source();
    let two = list_shuffle_take(words, 2);
    let ordered = list_sort_text(two);
    let earlier = list_get(ordered, 0);
    let later = list_get(ordered, 1);
    function one(combo) {
      "one example built from the combo and the shared pair";
      let code = question_code(combo, earlier, later);
      return code;
    }
    let list = list_map(combos, one);
    return list;
  }
  function decoys(question, answer) {
    "a comparison has only one other possible value - the opposite of true and false";
    let true_text = js_keyword_true();
    let is_true = equal(answer, true_text);
    let on_true = js_keyword_false();
    let on_false = js_keyword_true();
    let opposite = ternary(is_true, on_true, on_false);
    let r = [opposite];
    return r;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 4,
    decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: "value: ",
    backwards_question_label: "value: ",
    backwards_answer_label: "What code gives this value? ",
    unscramble_label: "Build the code that gives this value: ",
    forwards_answer_count_override: 2,
  });
  return lesson;
  function title_name_id() {
    "the home title: alphabetical order";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "Alphabetical order ");
        app_code_string_operators_shape(parent, "<", ">");
      }
      return render;
    }
    let rights = ["string", "order"];
    let built = app_code_lesson_name_id_generic(
      rights,
      "expressions",
      title_get,
    );
    return built;
  }
  function above(root) {
    "first a recall box anchoring on the < and > the learner already knows on numbers, revealing they also order strings alphabetically (dictionary order); then two rule boxes, each its own light-blue container - < and > - and within each box the true case and the false case are stated on their own line, condition first (When ... then ... is true/false), the first letter of each paragraph capitalised. No worked examples here: the four refreshable examples below demonstrate all four cases.";
    let true_text = js_keyword_true();
    let false_text = js_keyword_false();
    let recall = app_code_container_light_blue(root);
    let numbers_line = html_div(recall);
    html_span_text(numbers_line, "You've used ");
    html_span_text_code_dark(numbers_line, "<");
    html_span_text(numbers_line, " and ");
    html_span_text_code_dark(numbers_line, ">");
    html_span_text(numbers_line, " to compare two numbers");
    let strings_line = html_div(recall);
    html_span_text_code_dark(strings_line, "<");
    html_span_text(strings_line, " and ");
    html_span_text_code_dark(strings_line, ">");
    html_span_text(strings_line, " can also compare two strings");
    let dictionary_line = html_div(recall);
    html_span_text(
      dictionary_line,
      "Strings are compared in alphabetical order, the way words are listed in a dictionary",
    );
    function code_prose_line(box, parts) {
      "one line in a box, built from parts - each part is a two-item [kind, text] pair where kind 'code' renders a dark code token (a symbol or a sequence of symbols) and anything else renders plain prose";
      let div = html_div(box);
      function part_render(part) {
        "render one part into the line: a code token or plain prose";
        let kind = list_get(part, 0);
        let text = list_get(part, 1);
        let is_code = equal(kind, "code");
        let renderer = ternary(
          is_code,
          html_span_text_code_dark,
          html_span_text,
        );
        renderer(div, text);
        return null;
      }
      list_map(parts, part_render);
      return div;
    }
    let stage_one = app_code_container_light_blue(root);
    code_prose_line(stage_one, [
      ["code", '"g"'],
      ["text", " comes before "],
      ["code", '"h"'],
    ]);
    code_prose_line(stage_one, [
      ["code", "g"],
      ["text", " comes earlier in the alphabet than "],
      ["code", "h"],
      ["text", ", so "],
      ["code", '"g"'],
      ["text", " is before "],
      ["code", '"h"'],
    ]);
    let stage_two = app_code_container_light_blue(root);
    code_prose_line(stage_two, [
      ["code", '"ag"'],
      ["text", " comes before "],
      ["code", '"ah"'],
    ]);
    code_prose_line(stage_two, [
      ["code", '"ag"'],
      ["text", " and "],
      ["code", '"ah"'],
      ["text", " have the same first symbol ("],
      ["code", "a"],
      ["text", ")"],
    ]);
    code_prose_line(stage_two, [
      ["text", "So the second symbols are compared ("],
      ["code", "g"],
      ["text", ", "],
      ["code", "h"],
      ["text", ")"],
    ]);
    code_prose_line(stage_two, [
      ["code", "g"],
      ["text", " comes earlier in the alphabet than "],
      ["code", "h"],
      ["text", ", so "],
      ["code", '"ag"'],
      ["text", " is before "],
      ["code", '"ah"'],
    ]);
    let stage_three = app_code_container_light_blue(root);
    code_prose_line(stage_three, [
      ["code", '"abg"'],
      ["text", " and "],
      ["code", '"abh"'],
      ["text", " have the same first 2 symbols ("],
      ["code", "ab"],
      ["text", ")"],
    ]);
    code_prose_line(stage_three, [
      ["text", "So the third symbols are compared ("],
      ["code", "g"],
      ["text", ", "],
      ["code", "h"],
      ["text", ")"],
    ]);
    code_prose_line(stage_three, [
      ["code", "g"],
      ["text", " comes earlier in the alphabet than "],
      ["code", "h"],
      ["text", ", so "],
      ["code", '"abg"'],
      ["text", " is before "],
      ["code", '"abh"'],
    ]);
    let pattern = app_code_container_light_blue(root);
    code_prose_line(pattern, [["text", "This pattern continues:"]]);
    code_prose_line(pattern, [
      [
        "text",
        "If the first symbols are the same, then the first symbols that are different are compared",
      ],
    ]);
    let less_box = app_code_container_light_blue(root);
    let less_true = html_div(less_box);
    html_span_text(
      less_true,
      "When the left string comes before the right string then ",
    );
    html_span_text_code_dark(less_true, "<");
    html_span_text(less_true, " is ");
    html_span_text_code_dark(less_true, true_text);
    let less_false = html_div(less_box);
    html_span_text(
      less_false,
      "When the left string comes after the right string then ",
    );
    html_span_text_code_dark(less_false, "<");
    html_span_text(less_false, " is ");
    html_span_text_code_dark(less_false, false_text);
    let greater_box = app_code_container_light_blue(root);
    let opposite_line = html_div(greater_box);
    html_span_text_code_dark(opposite_line, ">");
    html_span_text(opposite_line, " is the opposite");
    let greater_true = html_div(greater_box);
    html_span_text(
      greater_true,
      "When the left string comes after the right string then ",
    );
    html_span_text_code_dark(greater_true, ">");
    html_span_text(greater_true, " is ");
    html_span_text_code_dark(greater_true, true_text);
    let greater_false = html_div(greater_box);
    html_span_text(
      greater_false,
      "When the left string comes before the right string then ",
    );
    html_span_text_code_dark(greater_false, ">");
    html_span_text(greater_false, " is ");
    html_span_text_code_dark(greater_false, false_text);
  }
}
