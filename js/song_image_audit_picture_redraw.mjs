import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_drawn_url } from "./song_image_drawn_url.mjs";
import { html_src_set } from "./html_src_set.mjs";
import { equal } from "./equal.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function song_image_audit_picture_redraw(
  attempts,
  shown,
  key,
  picture,
  kept_now,
  attempt_line,
) {
  arguments_assert(arguments, 6);
  let attempt = attempts[shown];
  let src = song_image_drawn_url(key, attempt);
  html_src_set(picture, src);
  let of = String(attempt) + " of " + String(attempts.length);
  let mark = equal(attempt, kept_now) ? " · kept" : "";
  html_text_set(attempt_line, of + mark);
}
