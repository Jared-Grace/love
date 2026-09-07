import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
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
  "THREE COLOURS, AND EACH ONE SAYS WHICH PART OF THE LINE A PHRASE MEANS. The word first and the outer ! are blue, the word second and the inner ! are amber, and the phrase outer parentheses and the far left and far right brackets are magenta. Every one of those phrases turns on picking one character out of a line of identical-looking characters, and the colour is what makes the picking possible without counting.";
  "THE PHRASE OUTER PARENTHESES NEEDED IT MOST. The other two name a single character; this one names two characters that are not next to each other and have the whole rest of the line between them, so there is nothing about their position that says they are a pair. Told only in words, a learner has to build the nesting in their head before the sentence means anything - which is the very thing the sentence was supposed to teach them.";
  "The brackets are shown as characters after the phrase, as two chips with a space between and never as one chip reading them together. There is no such thing in code as an open and a close written side by side; they are two marks that stand at the two ends of something, and one chip round both would say they are a single mark - the exact misreading this card exists to undo.";
  "The ! in each sentence is coloured as well as the word. The word alone would leave the sentence pointing at a colour that is on the line above and nowhere in the sentence itself, so both halves of the pointing are put side by side and the reader is handed the whole statement in one place.";
  "The line saying it is on the outside of all the parentheses leaves them uncoloured, because that one means every bracket on the line and so needs nothing picked out. Colour is for choosing between things, and there is no choice being made there.";
  arguments_assert(arguments, 1);
  let bang = js_operator_bang_symbol();
  let word_true = js_keyword_true();
  let left = js_code_parenthesis_left();
  let right = js_code_parenthesis_right();
  let color_first = app_code_highlight_color();
  let color_second = app_code_highlight_color_second();
  let color_third = app_code_highlight_color_third();
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
    " is solved first because it's on the inside of the ",
  );
  app_code_span_text_highlight_color(
    line_second,
    "outer parentheses",
    color_third,
  );
  html_span_text(line_second, " ");
  html_span_text_code_background(line_second, left, color_third);
  html_span_text(line_second, " ");
  html_span_text_code_background(line_second, right, color_third);
}
