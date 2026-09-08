import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_expression_choose_order_not_twice_rewritten_plain } from "./app_code_lesson_expression_choose_order_not_twice_rewritten_plain.mjs";
import { app_code_lesson_expression_choose_order_not_twice_rewritten_chip } from "./app_code_lesson_expression_choose_order_not_twice_rewritten_chip.mjs";
export function app_code_lesson_expression_choose_order_not_twice_rewritten_colors_line(
  parent,
  lead,
) {
  arguments_assert(arguments, 2);
  ("the one line that puts the colours on: the rewritten line shown plain, the words with colors like this, and the same line shown again with its colours. The caller passes only its own lead-in - the lesson that introduces the colours says we can write, and the lesson after it opens with Remember.");
  ("HELD IN ONE PLACE BECAUSE TWO LESSONS IN A ROW SHOW IT. The second is reminding the learner of the first, and a reminder is recognised in the second it takes only if it is the same line. Two spellings of it would put a learner into comparing two sentences that mean the same thing, on a card whose whole job was to save them that.");
  ("The line shows the same code twice, uncoloured then coloured, and that is what makes the colours readable as marks rather than as code. The difference between the two showings is exactly the part JavaScript does not care about, so the learner can see it instead of being told it.");
  let line = html_div(parent);
  html_span_text(line, lead);
  app_code_lesson_expression_choose_order_not_twice_rewritten_plain(line);
  html_span_text(line, " with colors like this: ");
  app_code_lesson_expression_choose_order_not_twice_rewritten_chip(line);
  return line;
}
