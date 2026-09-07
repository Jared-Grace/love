import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { app_code_operator_code_before } from "./app_code_operator_code_before.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_lesson_expression_choose_order_not_twice_rewritten_chip } from "./app_code_lesson_expression_choose_order_not_twice_rewritten_chip.mjs";
import { app_code_span_text_code_highlight } from "./app_code_span_text_code_highlight.mjs";
export function app_code_lesson_expression_choose_order_not_twice_inside_first(
  parent,
) {
  "the middle card of this lesson: the rule that the unary operator on the inside goes first, shown by writing the same line out a second way with parentheses around each part";
  "THE PARENTHESES SHOW THE ORDER, THEY ARE NOT PART OF THE LINE. The line the learner presses has none. This card writes it a second way, says in a line of its own that the two ways come to the same thing, and only then reads the order off the marks - which is the one reading a learner can check by looking rather than by being told.";
  "Both symbols here are the same symbol, so nothing about which operator is stronger could tell them apart. Nearness is the whole of it, and a pair of parentheses is what makes nearness something on the screen instead of something to remember.";
  "THE FIRST AND THE SECOND ! WEAR THE POINTING COLOUR, in the rewritten line and again in the two sentences that name them. Those two sentences are the only place on the screen that says which ! goes when, and each of them turns on a single character standing among four parentheses. The rest of the ! on these cards stay ordinary code, because a symbol coloured everywhere is emphasis rather than pointing.";
  arguments_assert(arguments, 1);
  let bang = js_operator_bang_symbol();
  let word_true = js_keyword_true();
  let not_true = app_code_operator_code_before(bang, word_true);
  let bang_bang_true = app_code_operator_code_before(bang, not_true);
  html_div_cycle_code(parent, ["Suppose we want to solve ", bang_bang_true]);
  html_div_cycle_code(parent, [
    "If there are multiple unary operators, the operator on the inside is solved first",
  ]);
  let line_rewrite = html_div(parent);
  html_span_text(line_rewrite, "For example, we could rewrite ");
  html_span_text_code_dark(line_rewrite, bang_bang_true);
  html_span_text(line_rewrite, " as ");
  app_code_lesson_expression_choose_order_not_twice_rewritten_chip(
    line_rewrite,
  );
  let line_same = html_div(parent);
  app_code_lesson_expression_choose_order_not_twice_rewritten_chip(line_same);
  html_span_text(line_same, " solves the same as ");
  html_span_text_code_dark(line_same, bang_bang_true);
  let line_show = html_div(parent);
  html_span_text(line_show, "The parentheses in ");
  app_code_lesson_expression_choose_order_not_twice_rewritten_chip(line_show);
  html_span_text(line_show, " show us the order to solve each ");
  html_span_text_code_dark(line_show, bang);
  let line_first = html_div(parent);
  html_span_text(line_first, "The first ");
  app_code_span_text_code_highlight(line_first, bang);
  html_span_text(
    line_first,
    " is solved last because it's on the outside of all the parentheses",
  );
  let line_second = html_div(parent);
  html_span_text(line_second, "The second ");
  app_code_span_text_code_highlight(line_second, bang);
  html_span_text(
    line_second,
    " is solved first because it's on the inside of the outer parentheses",
  );
}
