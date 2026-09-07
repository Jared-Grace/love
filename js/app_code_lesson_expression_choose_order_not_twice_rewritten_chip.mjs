import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_lesson_expression_choose_order_not_twice_rewritten_chip(
  line,
) {
  "the rewritten line !(!(true)) written into a line already being built, as one code chip whose two ! wear a pointing colour each";
  "A COLOUR EACH, NOT ONE COLOUR BETWEEN THEM. Two sentences below call these the first and the second ! , and one colour over both would say only these two are the ones being talked about - which leaves the learner back where they started, having to work out from the parentheses which of two identical characters each sentence means. Two colours say which is which, and the word first and the word second wear the matching colours in those sentences, so the sentence and the character are joined by looking rather than by counting.";
  "Left one blue, right one amber, and left is first. The two sentences are read in that order and the two ! are met in that order, so the pairing is the order they are already being read in.";
  "ONE CHIP with the colours laid over two pieces of it, not five chips side by side. Separate chips each carry their own rounding and their own room at the edges, so they read as pieces of code with gaps between them - and this is one line, written as one thing.";
  "Written into a line handed in rather than onto a line of its own, because all three sentences that use it have words on at least one side of it.";
  arguments_assert(arguments, 1);
  let bang = js_operator_bang_symbol();
  let word_true = js_keyword_true();
  let left = js_code_parenthesis_left();
  let right = js_code_parenthesis_right();
  let color_first = app_code_highlight_color();
  let color_second = app_code_highlight_color_second();
  let chip = html_span(line);
  html_style_code_dark(chip);
  let bang_outer = html_span_text(chip, bang);
  html_style_background_color_set(bang_outer, color_first);
  html_span_text(chip, left);
  let bang_inner = html_span_text(chip, bang);
  html_style_background_color_set(bang_inner, color_second);
  html_span_text(chip, left);
  html_span_text(chip, word_true);
  html_span_text(chip, right);
  html_span_text(chip, right);
  return chip;
}
