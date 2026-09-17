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
import { app_code_lesson_quiz_token_select_row_set } from "./app_code_lesson_quiz_token_select_row_set.mjs";
import { app_code_lesson_quiz_token_select_done_is } from "./app_code_lesson_quiz_token_select_done_is.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { log } from "./log.mjs";
import { app_code_lesson_quiz_token_select_needed_not_is } from "./app_code_lesson_quiz_token_select_needed_not_is.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_quiz_pieces_select(
  parent,
  note_div,
  pieces,
  show,
  on_success,
  on_wrong,
) {
  "A quiz where the student puts something together by tapping its pieces in order, out of a row of buttons holding every piece it needs and no others. A piece may be a token of one line, or a whole line of a program - the rules below do not care which.";
  "What the pieces add up to is drawn by the show it is handed, called with the orders still standing and the pieces tapped so far after every tap that is accepted. That drawing is the one thing that differs between building a line and ordering lines, so it is the one thing passed in.";
  "More than one order can be right, so what is kept is the whole set of orders still possible rather than one expected answer. A tap that no surviving order begins with is wrong and the button says so; a tap that some order begins with keeps those orders and drops the rest. The question is answered when one of the survivors has been spelled out exactly.";
  "That set is also what the row of buttons is trimmed from. After each tap, a piece that no surviving order still needs anywhere ahead is taken away, so the student is never left staring at a piece there is no longer any way to use. A piece still standing is not thereby a piece that may come next, and most of a row can be tapped and refused: trimming the row down to what may come next would answer the question by lighting the one right piece. What the row does say instead is how many of each piece are still to come, written as a small raised number beside it, so a piece needed twice cannot be read as a piece needed once.";
  "A wrong tap that put two pieces side by side which real code writes as a third piece is answered in words as well as in red, under what is being built. That mistake is a reading of the language rather than a slip, so the red button alone would leave the reader to guess at something the row of pieces can never show them.";
  "EVERY TAP GOES GREEN FOR THE SAME LENGTH OF TIME, the last one included. The green is cleared before the question is answered rather than after, because answering it hands control away - to a success message, to a wait, to the next question - and none of that comes back to let the colour go. Done the other way round the final piece sat lit up for as long as everything downstream took, which reads as the last tap having been more right than the ones before it.";
  "THE PIECE THAT FINISHES GOES INVISIBLE when its green is done, rather than back to the colour of a piece waiting to be tapped. There is nothing left for it to be tapped for, so dressing it as available again invites a tap the quiz has stopped listening for. It keeps its place in the row while it is invisible, so nothing beside it moves.";
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
      app_code_lesson_quiz_token_select_row_set(
        tokens_unique,
        chosen,
        variations,
        buttons,
      );
      show(variations, chosen);
      let any = app_code_lesson_quiz_token_select_done_is(variations, chosen);
      await sleep_seconds(0.1);
      if (any) {
        html_visibility_hidden(b);
        log(app_code_lesson_quiz_pieces_select.name, {
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
  app_code_lesson_quiz_token_select_row_set(
    tokens_unique,
    chosen,
    variations,
    buttons,
  );
  log(app_code_lesson_quiz_pieces_select.name, {
    variations,
  });
}
