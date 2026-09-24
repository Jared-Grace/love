import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_code_dark } from "./html_span_code_dark.mjs";
import { app_code_note_name_spans } from "./app_code_note_name_spans.mjs";
import { list_first } from "./list_first.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { text_slice } from "./text_slice.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { text_size } from "./text_size.mjs";
export function app_code_span_code_dark_names(parent, code, names) {
  arguments_assert(arguments, 3);
  ("one dark code chip set inside a sentence, with every cup name in it written in the colour that cup wears in the program above, so the name the sentence talks about and the name in the code can be seen to be the same cup");
  ("The colour is asked of the same place the program's own chip asks it, with the same list of names in the same order, so a name cannot come out one colour in the code and another in the sentence underneath it. The pairing is the whole point, and two answers would make it a lie.");
  ("The code is parsed, never searched, for the reason the program's chip gives: the letter a is inside the word grapes. So a letter inside quote marks is left white here - it is a letter, not a cup.");
  let chip = html_span_code_dark(parent);
  let spans = app_code_note_name_spans(code, names);
  function lambda_start(span) {
    let start = list_first(span);
    return start;
  }
  list_sort_number_mapper(spans, lambda_start);
  let at = 0;
  for (let span of spans) {
    let before = text_slice(code, at, span[0]);
    html_span_text(chip, before);
    let name = text_slice(code, span[0], span[1]);
    let piece = html_span_text(chip, name);
    html_font_color_set(piece, span[2]);
    at = span[1];
  }
  let size = text_size(code);
  let rest = text_slice(code, at, size);
  html_span_text(chip, rest);
  return chip;
}
