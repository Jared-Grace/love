import { app_code_definition_term } from "./app_code_definition_term.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_bold_term(parent, prose, term) {
  "a lesson line that defines a new term: plain prose then the term in BOLD, because the term is the word the lesson is teaching and should stand out on its first mention (e.g. 'the number you divide up is the **dividend**')";
  "The term is styled from the one place that says how a defined word is styled, so this line and the lines that write their term into the middle of a sentence cannot come out looking like two different kinds of word.";
  let line = html_div(parent);
  html_span_text(line, prose);
  app_code_definition_term(line, term);
  return line;
}
