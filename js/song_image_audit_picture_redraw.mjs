import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_drawn_url } from "./song_image_drawn_url.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { equal } from "./equal.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { not } from "./not.mjs";
import { html_value_set } from "./html_value_set.mjs";
export function song_image_audit_picture_redraw(
  attempts,
  shown,
  key,
  picture,
  kept_now,
  attempt_line,
  number,
) {
  "puts the attempt now chosen on the screen: the drawing itself, the count beside it, and the number in the box that can be typed into";
  "THE BOX IS WRITTEN ONLY WHEN IT DISAGREES WITH THE ATTEMPT, and that guard is what lets it be typed in at all. Setting the value on every redraw would rewrite the box under the person using it: a first digit that happens to name a real drawing moves the picture, the redraw writes that digit back, the cursor goes to the end, and a number with a second digit in it can never be finished. Comparing first means a redraw that agrees with what was typed touches nothing.";
  arguments_assert(arguments, 7);
  let attempt = attempts[shown];
  let src = song_image_drawn_url(key, attempt);
  html_src_set(picture, src);
  let said = String(attempt);
  let of = "of " + String(attempts.length);
  let mark = equal(attempt, kept_now) ? " · kept" : "";
  html_text_set(attempt_line, of + mark);
  let typed = html_value_get(number);
  let b = equal(typed, said);
  let differs = not(b);
  if (differs) {
    html_value_set(number, said);
  }
}
