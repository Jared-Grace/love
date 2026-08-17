import { app_code_expression_chosen_code_nowrap } from "./app_code_expression_chosen_code_nowrap.mjs";
import { app_code_expression_replace_word_say } from "./app_code_expression_replace_word_say.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_expression_replace_swap_say(
  parent,
  lead,
  word,
  solved_code,
  value_text,
) {
  arguments_assert(arguments, 5);
  ("one swap on a line said in words - replace the 3 * 7 with 21 - with the word for the swap and both pieces of it wearing the colour the swap wears, and the two pieces handed back because the swap is shown travelling between them");
  ("The lead words are the caller's, and the tense of the word with them: the tutorial says this of the press about to be made, and the lesson after it says the same thing of the press already made. Everything from the word onwards is the same sentence in both, which is why it is written once here.");
  ("Blue on the word and on the two pieces, and nowhere else. The first piece is the block standing blue on the line at this very moment, and the second is what that block is about to say instead - so the sentence points at the line rather than merely describing it, and a learner recognises the swap they were shown when they are told about it again.");
  let chosen_pieces = [];
  function chosen(text) {
    "a piece of the line, styled as the piece being swapped and remembered in the one pass that makes it";
    let span = html_span_text(parent, text);
    app_code_expression_chosen_code_nowrap(span);
    list_add(chosen_pieces, span);
  }
  html_span_text(parent, lead);
  app_code_expression_replace_word_say(parent, word);
  html_span_text(parent, " the ");
  chosen(solved_code);
  html_span_text(parent, " with ");
  chosen(value_text);
  return chosen_pieces;
}
