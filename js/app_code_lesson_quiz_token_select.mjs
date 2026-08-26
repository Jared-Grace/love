import { html_div_code_dark } from "./html_div_code_dark.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_lesson_quiz_token_select_pieces } from "./app_code_lesson_quiz_token_select_pieces.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { list_concat_single_right } from "./list_concat_single_right.mjs";
import { list_starts_with_curried_right } from "./list_starts_with_curried_right.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_code_lesson_quiz_token_select_wrong_show } from "./app_code_lesson_quiz_token_select_wrong_show.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { each } from "./each.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_lesson_quiz_token_select_marks_set } from "./app_code_lesson_quiz_token_select_marks_set.mjs";
import { app_code_lesson_quiz_token_select_code_show } from "./app_code_lesson_quiz_token_select_code_show.mjs";
import { app_code_lesson_quiz_token_select_done_is } from "./app_code_lesson_quiz_token_select_done_is.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { log } from "./log.mjs";
import { app_code_lesson_quiz_token_select_needed_not_is } from "./app_code_lesson_quiz_token_select_needed_not_is.mjs";
import { list_map } from "./list_map.mjs";
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
  "More than one order can be right, so what is kept is the whole set of orders still possible rather than one expected answer. A tap that no surviving order begins with is wrong and the button says so; a tap that some order begins with keeps those orders and drops the rest. The question is answered when one of the survivors has been spelled out exactly.";
  "That set is also what the row of buttons is trimmed from. After each tap, a piece that no surviving order still needs is taken away - so the buttons left standing are always the pieces that could come next, and the student is never left staring at a piece there is no longer any way to use.";
  "What is shown back is the code itself rather than the pieces tapped. The first surviving order is written out as a line and cut off where the student has got to, so the spacing and the punctuation are the ones the finished line will have, and what appears is a line of code growing rather than a list of words.";
  "A wrong tap that put two pieces side by side which real code writes as a third piece is answered in words as well as in red, under the line being built. That mistake is a reading of the language rather than a slip, so the red button alone would leave the reader to guess at something the row of pieces can never show them.";
  "THE ORDER BEING AIMED AT IS SAID OUT LOUD after every tap that is accepted, because it is the answer this quiz would have to show if the student asked to see one. The line can be built several ways, and which of them is still reachable is known here and nowhere else. A student who has correctly built 2 * and asks for the answer must be shown 2 * 3 + 2 and not 2 + 2 * 3, or the screen tells them their own first two pieces were a mistake when they were not.";
  "EVERY TAP GOES GREEN FOR THE SAME LENGTH OF TIME, the last one included. The green is cleared before the question is answered rather than after, because answering it hands control away - to a success message, to a wait, to the next question - and none of that comes back to let the colour go. Done the other way round the final piece sat lit up for as long as everything downstream took, which reads as the last tap having been more right than the ones before it.";
  "THE PIECE THAT FINISHES THE LINE GOES INVISIBLE when its green is done, rather than back to the colour of a piece waiting to be tapped. There is nothing left for it to be tapped for, so dressing it as available again invites a tap the quiz has stopped listening for. It keeps its place in the row while it is invisible, so nothing beside it moves.";
  let answer_div = html_div_code_dark(parent);
  let note_div = html_div_text(parent, "");
  let pieces = app_code_lesson_quiz_token_select_pieces(info, qa, answer_div);
  let chosen = property_get(pieces, "chosen");
  let tokens_unique = property_get(pieces, "tokens_unique");
  let variations = property_get(pieces, "variations");
  let buttons = property_get(pieces, "buttons");
  function lambda(token) {
    let b = app_shared_button(parent, token, on_click);
    html_style_code_dark(b);
    async function on_click() {
      let concated = list_concat_single_right(chosen, token);
      let lambda2 = list_starts_with_curried_right(concated);
      let variations_new = list_filter(variations, lambda2);
      let e = list_empty_is(variations_new);
      if (e) {
        app_code_lesson_quiz_token_select_wrong_show(
          b,
          note_div,
          chosen,
          token,
          tokens_unique,
          on_wrong,
        );
        return;
      }
      html_text_content_set(note_div, "");
      each(buttons, html_style_code_dark);
      app_shared_button_screen_green_style_assign(b);
      list_add(chosen, token);
      variations = variations_new;
      app_code_lesson_quiz_token_select_marks_set(
        tokens_unique,
        chosen,
        variations,
        buttons,
      );
      app_code_lesson_quiz_token_select_code_show(
        variations,
        chosen,
        answer_div,
        correction_code_set,
      );
      let any = app_code_lesson_quiz_token_select_done_is(variations, chosen);
      await sleep_seconds(0.1);
      if (any) {
        html_visibility_hidden(b);
        log(app_code_lesson_quiz_token_select.name, {
          variations,
          chosen,
        });
        await on_success();
        return;
      }
      html_style_code_dark(b);
      let n = app_code_lesson_quiz_token_select_needed_not_is(
        variations,
        chosen,
        token,
      );
      if (n) {
        html_visibility_hidden(b);
      }
    }
    return b;
  }
  buttons = list_map(tokens_unique, lambda);
  app_code_lesson_quiz_token_select_marks_set(
    tokens_unique,
    chosen,
    variations,
    buttons,
  );
  log(app_code_lesson_quiz_token_select.name, {
    variations,
  });
}
