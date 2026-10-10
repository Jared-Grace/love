import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_code_code_dark_lines_braces_paired } from "./app_code_code_dark_lines_braces_paired.mjs";
import { app_code_lesson_quiz_pieces_select } from "./app_code_lesson_quiz_pieces_select.mjs";
export function app_code_lesson_quiz_braces_order(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "A quiz where the student writes out the braces of a program in the order they stand, by tapping a { piece and a } piece, and what has been written so far is drawn with every pair in a colour of its own.";
  "How taps are judged, and how the row of pieces is kept, is shared with every quiz that is put together from pieces. What is this quiz's own is that there are only two pieces and that what they add up to is drawn in pair colours.";
  "THE PIECES THEMSELVES ARE NOT COLOURED. The order of the braces alone decides which } closes which {, so the colours add nothing to what is being asked; they are drawn on what has been written, where each } takes the colour of the { it closes the moment it is tapped. A row of coloured pieces would also have to keep its colours through the shared row, which draws every piece in the one code colour again after each tap.";
  "There is one right order, so it is the only order kept, and it is the answer shown if the student asks for one.";
  let answer_div = html_div(parent);
  let note_div = html_div_text(parent, "");
  let answer_property = property_get(info, "answer_property");
  let sequence = property_get(qa, answer_property);
  let tokens = text_split_space(sequence);
  let tokens_unique = list_unique(tokens);
  let variations = [tokens];
  let chosen = [];
  let buttons = [];
  let pieces = {
    chosen,
    tokens_unique,
    variations,
    buttons,
  };
  function show(variations_standing, chosen_now) {
    correction_code_set(sequence);
    let text = list_join_space(chosen_now);
    let e = list_empty_is(chosen_now);
    if (e) {
      text = text_space_nb();
    }
    html_clear(answer_div);
    app_code_code_dark_lines_braces_paired(answer_div, text);
  }
  show(variations, chosen);
  app_code_lesson_quiz_pieces_select(
    parent,
    note_div,
    pieces,
    show,
    on_success,
    on_wrong,
  );
}
