import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_bold_term } from "./app_code_lesson_bold_term.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { property_get } from "./property_get.mjs";
import { js_operators_comparison } from "./js_operators_comparison.mjs";
import { app_code_operators_word_list } from "./app_code_operators_word_list.mjs";
export function app_code_lesson_expression_comparing_a_comparison_recall(root) {
  arguments_assert(arguments, 1);
  ("what the word comparison names, said in full before the lesson leans on it. The word has been used since the arithmetic-comparison lesson, but only ever alongside its operators in passing, and every line of this lesson rests on it");
  ("One line, with the six operators inlined rather than spelled out as six whole comparisons. The symbol is the only thing that differs between them, so six worked-out lines would repeat two numbers six times to show one difference - and they would also read as six things to learn where there is one");
  ("The six come from the one list that holds them, so no other lesson can teach the word a different set. The bold falls on the word, which is what the repo already does for a term it is defining: the word is what the learner carries to the next lesson, and the symbols are already set apart as code tiles");
  ("Joined by and rather than by or, because this line shows all six at once. Or is right where a line says what a single comparison uses, since a comparison uses exactly one of them - the arithmetic-comparison lesson says it that way and keeps or. Here the six are being enumerated, not chosen between");
  let card = app_code_container_light_blue(root);
  let line = app_code_lesson_bold_term(
    card,
    "Here are some examples of ",
    "comparisons",
  );
  html_span_text(line, ": ");
  function operator_symbol(operator) {
    "the symbol shown in an operator's tile";
    let symbol = property_get(operator, "operator");
    return symbol;
  }
  let operators = js_operators_comparison();
  app_code_operators_word_list(line, operators, "and", operator_symbol);
}
