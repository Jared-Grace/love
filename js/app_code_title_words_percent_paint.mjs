import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { text_split } from "./text_split.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_title_words_percent_paint(parent, text) {
  arguments_assert(arguments, 2);
  ("the words of a home title, with every percent sign in them painted as code");
  ("Asked for by the human: the Statements lesson on the remainder of two names showed Remainder (%) with a plain % while every other remainder title paints it as code. The words are written for a learner and kept as text, so the sign is found in them rather than handed in apart; a title with no percent sign comes out as one plain piece, the same as before.");
  let percent = js_operator_percent_symbol();
  let pieces = text_split(text, percent);
  function piece_paint(piece, index) {
    if (greater_than(index, 0)) {
      html_span_text_code_dark(parent, percent);
    }
    html_span_text(parent, piece);
  }
  each_index(pieces, piece_paint);
}
