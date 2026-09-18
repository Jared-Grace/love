import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { text_list_to } from "./text_list_to.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_includes } from "./text_includes.mjs";
import { equal } from "./equal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
export function app_code_code_dark_note_write(component, note) {
  arguments_assert(arguments, 2);
  ("one note out of a program, written into a chip that is already dressed as code, in the note colour, with the round brackets around a name drawn fainter than the words standing between them");
  ("A NAME INSIDE A NOTE IS PUT IN ROUND BRACKETS, AND THE BRACKETS ARE DRAWN FAINTER THAN THE NOTE. The letter a is the first name this course gives out and is also an English word, so a sentence ending on it reads as a sentence that stopped early. The brackets say the letter is a name; drawn faint, they say it without becoming a third thing on the line to read.");
  ("Fainter is the same grey with less of it rather than a grey of its own, so the palette gains no fifth grey, and a note whose colour is ever changed keeps its brackets a step behind it without anything being changed twice.");
  ("The text is split on the bracket characters alone, never on where a name is known to be, because this is handed a finished program and not the parts it was built from. So a bracket a lesson author typed for any other reason is drawn the same way, which is the honest reading: the mark means the same thing wherever it appears.");
  ("A run of characters is gathered before it is written rather than each character being written on its own, so that a note is a handful of spans and not one per letter.");
  let dim = app_shared_color_gray();
  let faded = "0.55";
  let left = js_code_parenthesis_left();
  let right = js_code_parenthesis_right();
  let brackets = list_join_empty([left, right]);
  let characters = text_list_to(note);
  let runs = [];
  let saying = text_empty();
  let bracket_run = false;
  for (let character of characters) {
    let is_bracket = text_includes(brackets, character);
    if (equal(is_bracket, bracket_run)) {
      saying = list_join_empty([saying, character]);
      continue;
    }
    runs.push([saying, bracket_run]);
    saying = character;
    bracket_run = is_bracket;
  }
  runs.push([saying, bracket_run]);
  for (let run of runs) {
    let run_saying = run[0];
    let run_bracket = run[1];
    let span = html_span_text(component, run_saying);
    html_font_color_set(span, dim);
    if (run_bracket) {
      html_style_opacity(span, faded);
    }
  }
}
