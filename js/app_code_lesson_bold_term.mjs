import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_lesson_bold_term(parent, prose, term) {
  "a lesson line that defines a new term: plain prose then the term in BOLD, because the term is the word the lesson is teaching and should stand out on its first mention (e.g. 'the number you divide up is the **dividend**')";
  let line = html_div(parent);
  html_span_text(line, prose);
  let word = html_span_text(line, term);
  html_style_set(word, "font-weight", "bold");
  return line;
}
