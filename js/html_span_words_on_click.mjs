import { text_words } from "./text_words.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_add } from "./list_add.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { not } from "./not.mjs";
export function html_span_words_on_click(parent, text, word_lambda) {
  "$plain text";
  "Some written text put into a parent one word at a time, each word its own span that calls the given lambda with that word when it is tapped, handing back a span-and-word pair for each so a caller can do something to them all at once.";
  "THE WORD COMES BACK BESIDE ITS SPAN, and it stays that way although the one caller no longer reads it. A caller doing anything at all to a span afterwards has to know which word it is, and the alternative is a second walk over the same sentence matched up by counting - two walks that have to stay in step, which is a bug waiting for somebody to add a token type. The pairing is already sitting here for free, so handing it over costs nothing and taking it away would only have to be built again.";
  "IT SPLITS FOR TAPPING AND NOT FOR LAYOUT. The spans are inline and the spaces between them are real spaces, so the sentence wraps exactly as one run of text would - a reader cannot tell it was cut up until they touch it. Laying the words out as boxes was the other way to do this and it reflows the line, which moves the text a player was already reading.";
  "THE WORD HANDED OVER IS NOT THE WORD SHOWN. What is drawn keeps its comma and its capital, because that is the sentence the person said; what the lambda is given is stripped to letters and lowered, by the same reader every word report uses. Two spellings of what counts as one word would let the game ask about a word the reports have never heard of.";
  "A TOKEN WITH NO LETTERS GETS NO HANDLER. A lone dash or a bare number is drawn and left alone, because there is nothing to ask about it and a tap that opens an empty answer teaches a reader that tapping is not worth doing.";
  let spans = [];
  let words = text_words(text);
  let first = true;
  for (let word of words) {
    let later = not(first);
    if (later) {
      html_span_space(parent);
    }
    first = false;
    let span = html_span_text(parent, word);
    let lowered = text_lower_to(word);
    let letters = text_letters_only(lowered);
    let record = {
      span,
      word: letters,
    };
    list_add(spans, record);
    let any = text_empty_not_is(letters);
    if (any) {
      function span_click() {
        word_lambda(letters);
      }
      html_on_click(span, span_click);
    }
  }
  return spans;
}
