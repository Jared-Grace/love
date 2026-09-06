import { html_element_width } from "./html_element_width.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_code_lesson_quiz_token_select_count_badge_inside_percent } from "./app_code_lesson_quiz_token_select_count_badge_inside_percent.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_quiz_token_select_count_badge_room_keep(
  badge,
  tile,
) {
  arguments_assert(arguments, 2);
  ("widen the gap after a piece by however far its badge hangs out, so the next piece starts beyond the badge instead of on top of it.");
  ("A BADGE STANDING OUTSIDE ITS PIECE IS OUTSIDE THE ROW'S RECKONING. The row lays the pieces out one after another and knows nothing of a badge, because a badge is placed rather than laid out - so the next piece is put where it would have gone had there been no badge, and it is drawn afterwards, which puts its black over the badge. The fix is not to draw the badge on top: it is to tell the row the piece is wider than it looks.");
  ("THE BADGE IS ASKED HOW WIDE IT IS rather than being guessed at. How wide two characters come out depends on the lettering, the size, and the reader's own settings, and every guess at it so far has been wrong in a way nobody could see until it was looked at on a phone. Asked after it is dressed and standing on the page, it answers in the dots it actually occupies.");
  ("IF IT ANSWERS NOTHING, A PLAIN MEASURE IS KEPT INSTEAD. A thing not yet on the page measures as no width at all, and taking that at its word would keep no room and quietly bring back the very fault this exists to fix. So a width of nothing is treated as no answer rather than as an answer of zero, and a generous fixed gap is kept until there is a real one.");
  let width = html_element_width(badge);
  let measured = greater_than(width, 0);
  let unmeasured = not(measured);
  if (unmeasured) {
    html_style_set(tile, "margin-right", "1.6em");
    return;
  }
  let inside = app_code_lesson_quiz_token_select_count_badge_inside_percent();
  let outside = subtract(100, inside);
  let top = multiply(width, outside);
  let out = divide(top, 100);
  let room = out + 3;
  let spelled = text_from_number(room);
  let value = text_combine_multiple([spelled, "px"]);
  html_style_set(tile, "margin-right", value);
}
