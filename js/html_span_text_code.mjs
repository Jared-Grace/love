import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
export function html_span_text_code(parent, text) {
  "$plain text";
  "the text is the code to show. It is code to look at and nothing that runs.";
  arguments_assert(arguments, 2);
  ("A run of code shown in the middle of anything else, wearing the code lettering and nothing more.");
  ("IT IS THE LEAST A PIECE OF CODE MAY BE GIVEN. Code set in the same lettering as the sentence around it stops looking like code, and a reader who has been taught to know it by its shape is being shown a shape that is not there. The lettering carries that knowing, so it is the part that is never dropped; the colouring and the box behind it are decoration on top, and the callers that want them add them.");
  ("The text is set exactly as written and never as markup, because code is the one thing most likely to hold an angle bracket, and a sentence that quietly loses its second half still reads.");
  let span = html_span_text_content(parent, text);
  html_font_jetbrains_mono(span);
  return span;
}
