import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_not_twice_rewritten_texts } from "./app_code_lesson_expression_choose_order_not_twice_rewritten_texts.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_expression_choose_order_not_twice_rewritten_plain(
  line,
) {
  "the rewritten line !(!(true)) written into a line already being built, as an ordinary code chip with no colour on it";
  "THE LINE HAS TO BE MET WITHOUT COLOUR FIRST. The card is teaching two separate things - that the same line may be written with parentheses, and that the parentheses say which ! goes first - and shown together the colours arrive on a line the learner has not yet read. So this one is the line itself, and the colours are introduced afterwards as marks put onto a line already understood.";
  "It is also what makes the colours legible as marks rather than as part of the code. Seen only in colour, a learner has no way to know the colour is not something JavaScript cares about; seen plain and then coloured, the difference between the two showings is exactly the part that is not code.";
  arguments_assert(arguments, 1);
  let texts =
    app_code_lesson_expression_choose_order_not_twice_rewritten_texts();
  let text = list_join_empty(texts);
  let chip = html_span_text_code_dark(line, text);
  return chip;
}
