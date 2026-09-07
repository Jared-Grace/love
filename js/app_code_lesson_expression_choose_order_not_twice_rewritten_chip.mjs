import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
export function app_code_lesson_expression_choose_order_not_twice_rewritten_chip(
  line,
) {
  "the rewritten line !(!(true)) written into a line already being built, as one code chip carrying the three things the sentences below name: the first !, the second !, and the outer pair of brackets";
  "A COLOUR EACH, NOT ONE COLOUR ACROSS THEM. The sentences below call these the first ! , the second ! , and the outer brackets, and one colour over all of them would say only these are the parts being talked about - which leaves a learner back at the start, working out from the shape of the line which of two identical characters, and which of two identical pairs, each sentence means. A colour apiece answers that by matching, and the words in those sentences wear the matching colours, so the sentence and the thing it names are joined by looking rather than by counting.";
  "THE OUTER PAIR IS THE FAR LEFT BRACKET AND THE FAR RIGHT ONE, which is the whole difficulty. On a line reading ! ( ! ( true ) ) the two pairs are nested, so the outer pair is not two brackets standing together anywhere - it is the first and the last, with the entire inner part between them. Nothing about where they sit says they belong to each other; the colour is what says it, and it is the only thing on the screen that does.";
  "The inner pair stays plain, because no sentence names it. A learner who can see which pair is outer knows the other one by what is left, and a second pair of coloured brackets would be a fourth colour on the line saying nothing that is not already said.";
  "Left ! blue, right ! amber, brackets magenta, and left is first. The sentences are read in that order and the two ! are met in that order, so the pairing is the order they are already being read in.";
  "Written into a line handed in rather than onto a line of its own, because all three sentences that use it have words on at least one side of it.";
  arguments_assert(arguments, 1);
  let bang = js_operator_bang_symbol();
  let word_true = js_keyword_true();
  let left = js_code_parenthesis_left();
  let right = js_code_parenthesis_right();
  let color_first = app_code_highlight_color();
  let color_second = app_code_highlight_color_second();
  let color_third = app_code_highlight_color_third();
  let plain = app_shared_color_code_background();
  let texts = [bang, left, bang, left, word_true, right, right];
  let colors = [
    color_first,
    color_third,
    color_second,
    plain,
    plain,
    plain,
    color_third,
  ];
  let chip = html_span_code_dark_colored(line, texts, colors);
  return chip;
}
