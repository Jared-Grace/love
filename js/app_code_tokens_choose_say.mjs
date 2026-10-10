import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_expression_replace_word_say } from "./app_code_expression_replace_word_say.mjs";
import { not } from "./not.mjs";
import { app_code_expression_chosen_style_assign } from "./app_code_expression_chosen_style_assign.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
export function app_code_tokens_choose_say(parent, lead, word, guided) {
  arguments_assert(arguments, 4);
  ("the asking over code whose tokens are chosen in order: the word choose in the blue and weight lesson 41 gives the word for its swap, and, when the next token is shown, the word blue drawn as that very token is drawn, so the learner reads what to look for in the colour they will see it in, as the human asked 2026-10-10");
  let line = html_div(parent);
  html_span_text(line, lead);
  app_code_expression_replace_word_say(line, word);
  html_span_text(line, " each token in order");
  if (not(guided)) {
    html_span_text(line, ":");
    return line;
  }
  html_span_text(line, " - the right choice is ");
  let blue = html_span_text(line, "blue");
  app_code_expression_chosen_style_assign(blue);
  html_box_shadow_set(blue, "none");
  html_span_text(line, ":");
  return line;
}
