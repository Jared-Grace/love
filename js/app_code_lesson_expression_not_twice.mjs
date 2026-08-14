import { app_code_category_operators } from "./app_code_category_operators.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { js_code_prefix } from "./js_code_prefix.mjs";
import { js_operator_bang } from "./js_operator_bang.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_symbol_set } from "./app_code_lesson_symbol_set.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_expression_not_twice() {
  "the step from ! on a plain true or false to ! on another !: the one new idea is that the thing a ! takes can itself be a !, so the operator nests inside itself. Same operator both times, so there is no question of which one goes first - the inner ! is simply the nearer one. Nothing is bracketed, because nothing needs to be.";
  "It comes before the lesson putting a comparison under a !, and it is what makes that lesson a single step. On its own, ! around a comparison carries two new things at once - that the thing under a ! can be something which works out to true or false, and that it has to be bracketed. This lesson takes the first of those, on the smallest possible instance, leaving the bracket lesson with only the bracket.";
  "Chosen over the alternatives by size: four nodes for ! around a comparison against three here, and this is the only one of the two the learner meets with a single symbol in play.";
  "The glyph beside the title is the pair, not the single symbol. The lesson is not about what one ! does - the lesson before it is - so a title wearing one ! names its neighbour rather than itself, and the two sit side by side on the home list, which is exactly where that difference has to read.";
  let operator = js_operator_bang();
  let symbol = property_get(operator, "operator");
  function not_of(code) {
    let prefixed = js_code_prefix(symbol, code);
    return prefixed;
  }
  function not_twice_of(keyword) {
    let once = not_of(keyword);
    let twice = not_of(once);
    return twice;
  }
  function refill() {
    "both keywords a screen, so the return-to-the-start is seen from each end";
    let t = js_keyword_true();
    let v = not_twice_of(t);
    let f = js_keyword_false();
    let v2 = not_twice_of(f);
    let list = [v, v2];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id_rights: ["not twice"],
    category: app_code_category_operators(),
    next_arg,
    example_count: 2,
    forwards_answer_count_override: 2,
  });
  let symbol_twice = text_combine(symbol, symbol);
  let lesson_symbol = app_code_lesson_symbol_set(lesson, symbol_twice);
  return lesson_symbol;
  function above(root) {
    "the rule, then the nearer ! worked out first, then the outer one, then what the pair adds up to. Worked from true, because that is the keyword the earlier ! lesson opened on.";
    let true_word = js_keyword_true();
    let false_word = js_keyword_false();
    let not_true = not_of(true_word);
    let not_false = not_of(false_word);
    let twice_true = not_twice_of(true_word);
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "A ",
      symbol,
      " can go in front of another ",
      symbol,
    ]);
    html_div_cycle_code(c, ["For example we can write ", twice_true]);
    html_div_cycle_code(c, [
      "For ",
      twice_true,
      ", we do ",
      not_true,
      " first",
    ]);
    html_div_cycle_code(c, [
      "",
      not_true,
      " is ",
      false_word,
      ", so ",
      twice_true,
      " is ",
      not_false,
    ]);
    html_div_cycle_code(c, [
      "",
      not_false,
      " is ",
      true_word,
      ", so ",
      twice_true,
      " is ",
      true_word,
    ]);
    html_div_cycle_code(c, [
      "Two ",
      symbol,
      " symbols give back the value we started with",
    ]);
  }
}
