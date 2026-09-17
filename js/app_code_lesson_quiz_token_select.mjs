import { html_div_code_dark } from "./html_div_code_dark.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_lesson_quiz_token_select_pieces } from "./app_code_lesson_quiz_token_select_pieces.mjs";
import { app_code_lesson_quiz_token_select_code_show } from "./app_code_lesson_quiz_token_select_code_show.mjs";
import { app_code_lesson_quiz_pieces_select } from "./app_code_lesson_quiz_pieces_select.mjs";
export function app_code_lesson_quiz_token_select(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "A quiz where the student builds one line of code by tapping its pieces in order, out of a row of buttons holding every piece the line needs and no others.";
  "How taps are judged, and how the row of pieces is kept, is shared with every quiz that is put together from pieces, so it lives there. What is this quiz's own is what the pieces are and how what they add up to is drawn.";
  "What is shown back is the code itself rather than the pieces tapped. The first surviving order is written out as a line and cut off where the student has got to, so the spacing and the punctuation are the ones the finished line will have, and what appears is a line of code growing rather than a list of words.";
  "THE ORDER BEING AIMED AT IS SAID OUT LOUD after every tap that is accepted, because it is the answer this quiz would have to show if the student asked to see one. The line can be built several ways, and which of them is still reachable is known here and nowhere else. A student who has correctly built 2 * and asks for the answer must be shown 2 * 3 + 2 and not 2 + 2 * 3, or the screen tells them their own first two pieces were a mistake when they were not.";
  let answer_div = html_div_code_dark(parent);
  let note_div = html_div_text(parent, "");
  let pieces = app_code_lesson_quiz_token_select_pieces(info, qa, answer_div);
  function show(variations, chosen) {
    app_code_lesson_quiz_token_select_code_show(
      variations,
      chosen,
      answer_div,
      correction_code_set,
    );
  }
  app_code_lesson_quiz_pieces_select(
    parent,
    note_div,
    pieces,
    show,
    on_success,
    on_wrong,
  );
}
