import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span } from "./html_span.mjs";
import { app_shared_gloss_bible_word_span } from "./app_shared_gloss_bible_word_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_shared_gloss_bible_explain_span(parent, explain) {
  arguments_assert(arguments, 2);
  ("Draw one explanation, with every Greek or Hebrew word inside it drawn the way a word row draws the word itself: mildly bold and red.");
  ("★ ASKED FOR BY THE HUMAN: an explanation that names a word's roots, like 'made from beside (παρά) and to stand (ἵστημι)', shows those roots in the same look as the word on the left of the row, so a reader sees at once that they are original-language words and not English.");
  ("The explanation is still plain text in the store; only the drawing splits it. A run of Greek or Hebrew letters, with their accents and marks, becomes one red piece, and everything between stays in the explanation's own colour, set by the caller on the span this returns.");
  ("An explanation with no Greek or Hebrew in it comes out as a single piece, so the Cebuano and Urdu pages look exactly as before.");
  let span = html_span(parent);
  let pieces = explain.split(/([Ͱ-Ͽἀ-῿֐-׿̀-ͯ]+)/u);
  for (let i = 0; less_than(i, pieces.length); i++) {
    let piece = pieces[i];
    if (equal(piece, "")) {
      continue;
    }
    let left = modulo(i, 2);
    if (equal(left, 1)) {
      app_shared_gloss_bible_word_span(span, piece);
    } else {
      html_span_text(span, piece);
    }
  }
  return span;
}
