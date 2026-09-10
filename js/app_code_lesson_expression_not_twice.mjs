import { app_code_lesson_expression_not_twice_title_name_id } from "./app_code_lesson_expression_not_twice_title_name_id.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_code_not } from "./js_code_not.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_lesson_symbol_set } from "./app_code_lesson_symbol_set.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_lesson_expression_choose_order_not_twice_rewritten_plain } from "./app_code_lesson_expression_choose_order_not_twice_rewritten_plain.mjs";
export function app_code_lesson_expression_not_twice() {
  "the step from ! on a plain true or false to ! on another !: the one new idea is that the thing a ! takes can itself be a !, so the operator nests inside itself. Same operator both times, so there is no question of which one goes first - the inner ! is simply the nearer one. Nothing is parenthesised, because nothing needs to be.";
  "It comes before the lesson putting a comparison under a !, and it is what makes that lesson a single step. On its own, ! around a comparison carries two new things at once - that the thing under a ! can be something which works out to true or false, and that it has to be parenthesised. This lesson takes the first of those, on the smallest possible instance, leaving the parenthesis lesson with only the parenthesis.";
  "Chosen over the alternatives by size: four nodes for ! around a comparison against three here, and this is the only one of the two the learner meets with a single symbol in play.";
  "The glyph beside the title is the pair, not the single symbol. This lesson is not about what one ! does - the lesson called Not is, far back where a plain true was first turned over - so a title wearing a single ! would name that lesson rather than this one.";
  "It used to say the two sat side by side on the home list, which they did until the press-at-a-time lesson for !! was put in between them. Corrected 2026-09-10.";
  let symbol = js_operator_bang_symbol();
  function not_twice_of(keyword) {
    let once = js_code_not(keyword);
    let twice = js_code_not(once);
    return twice;
  }
  function refill() {
    "both keywords a screen, so the return-to-the-start is seen from each end, and each keyword under ONE symbol beside itself under two, because a screen holding only the doubled form can be answered by copying the keyword out of the question without ever counting the symbols in front of it - which is the one thing this lesson is asking to be read.";
    "These four are every line this lesson has, so they are all shown up front as its examples and the offer of another one is taken away with them.";
    let t = js_keyword_true();
    let once_true = js_code_not(t);
    let v = not_twice_of(t);
    let f = js_keyword_false();
    let once_false = js_code_not(f);
    let v2 = not_twice_of(f);
    let list = [once_true, v, once_false, v2];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_not_twice_title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 4,
    forwards_answer_count_override: 2,
  });
  property_set(lesson, "examples_complete", true);
  let symbol_twice = text_combine(symbol, symbol);
  let lesson_symbol = app_code_lesson_symbol_set(lesson, symbol_twice);
  return lesson_symbol;
  function above(root) {
    "the rule, then the nearer ! worked out first, then the outer one, then what the pair adds up to. Worked from true, because that is the keyword the earlier ! lesson opened on.";
    "THE PARENTHESISED SPELLING IS RECALLED BEFORE ANY SOLVING STARTS. The lesson before this one showed the same line written with parentheses, and it is that spelling which says which of two identical marks is the nearer one. Without it the very next line asks the learner to solve the inner ! first with nothing on the screen saying which of the two is inner, so they take it on trust; with it they can see it. It opens with Remember because they have met it.";
    "RECALLED IN PLAIN BLACK AND WHITE, NOT IN THE COLOURS IT WAS TAUGHT IN. The colours were marks put on the line to let sentences point at one of two identical symbols, and there are no such sentences on this card. Brought back here they would be the one thing on the screen a learner could not account for, and accounting for them would cost more than the line is being brought back for.";
    let true_word = js_keyword_true();
    let false_word = js_keyword_false();
    let not_true = js_code_not(true_word);
    let not_false = js_code_not(false_word);
    let twice_true = not_twice_of(true_word);
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "A ",
      symbol,
      " can go in front of another ",
      symbol,
    ]);
    html_div_cycle_code(c, ["For example we can write ", twice_true]);
    let line_remember = html_div(c);
    html_span_text(line_remember, "Remember: we can write ");
    html_span_text_code_dark(line_remember, twice_true);
    html_span_text(line_remember, " as ");
    app_code_lesson_expression_choose_order_not_twice_rewritten_plain(
      line_remember,
    );
    html_div_cycle_code(c, [
      "For ",
      twice_true,
      ", we solve ",
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
