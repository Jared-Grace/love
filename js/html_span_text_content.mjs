import { html_span } from "./html_span.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
export function html_span_text_content(parent, text) {
  "$plain text";
  "the text is the words to show. It is text to draw and nothing that runs.";
  "A span holding text that is shown exactly as it is written, with no character in it treated as markup.";
  "It is the twin of the span that sets text as markup, and the two are worth telling apart at the call rather than at the point the difference shows: the markup one is right when a caller is building the markup, and this one is right whenever the text came from somewhere else. Text from somewhere else with an angle bracket in it disappears into the page silently, which is the failure that is hardest to notice, because the sentence around it still reads.";
  let span = html_span(parent);
  html_text_content_set(span, text);
  return span;
}
