import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_operator_code_before } from "./app_code_operator_code_before.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_lesson_expression_choose_order_not_twice_rewritten_chip } from "./app_code_lesson_expression_choose_order_not_twice_rewritten_chip.mjs";
import { app_code_span_text_highlight_color } from "./app_code_span_text_highlight_color.mjs";
import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
export function app_code_lesson_expression_choose_order_not_twice_inside_first(
  parent,
) {
  "the middle card of this lesson: the rule that the unary operator on the inside goes first, shown by writing the same line out a second way with parentheses around each part";
  "THE PARENTHESES SHOW THE ORDER, THEY ARE NOT PART OF THE LINE. The line the learner presses has none. This card writes it a second way, says in a line of its own that the two ways come to the same thing, and only then reads the order off the marks - which is the one reading a learner can check by looking rather than by being told.";
  "Both symbols here are the same symbol, so nothing about which operator is stronger could tell them apart. Nearness is the whole of it, and a pair of parentheses is what makes nearness something on the screen instead of something to remember.";
  "THE COLOURS ARE WHAT SAY WHICH ! EACH SENTENCE MEANS. The word first, the word second, and the two ! in the rewritten line all wear a tile, blue for the outer one and amber for the inner one - so the word and the character it names are joined by matching, and a learner never has to count characters to find out which is being talked about. The two sentences below are the only place on the screen that says which ! goes when, and each of them turns on a single character standing among four parentheses; the colouring is what makes that character findable.";
  "The ! in the sentence naming them is coloured too, not only the word. The word alone would leave the sentence pointing at a colour that appears elsewhere on the card and nowhere in the sentence itself, so the two halves of the pointing are put side by side and the reader is given the whole statement in one place.";
  "The rest of the ! on these cards stay ordinary code, because a symbol coloured everywhere is emphasis rather than pointing.";
  arguments_assert(arguments, 1);
  let bang = js_operator_bang_symbol();
  let word_true = js_keyword_true();
  let color_first = app_code_highlight_color();
  let color_second = app_code_highlight_color_second();
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
  html_span_text(line_first, "The ");
  app_code_span_text_highlight_color(line_first, "first", color_first);
  html_span_text(line_first, " ");
  html_span_text_code_background(line_first, bang, color_first);
  html_span_text(
    line_first,
    " is solved last because it's on the outside of all the parentheses",
  );
  let line_second = html_div(parent);
  html_span_text(line_second, "The ");
  app_code_span_text_highlight_color(line_second, "second", color_second);
  html_span_text(line_second, " ");
  html_span_text_code_background(line_second, bang, color_second);
  html_span_text(
    line_second,
    " is solved first because it's on the inside of the outer parentheses",
  );
}
