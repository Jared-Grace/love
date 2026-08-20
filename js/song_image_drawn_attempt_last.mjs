import { equal } from "./equal.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { song_image_drawn_attempts } from "./song_image_drawn_attempts.mjs";
export async function song_image_drawn_attempt_last(number) {
  "the newest attempt drawn for one couplet, or zero when none has been drawn yet";
  "zero rather than nothing, because every caller of this either shows the newest picture or works out the next number to write, and both of those want a number they can go on using. Zero is the answer that makes the next one one.";
  let attempts = await song_image_drawn_attempts(number);
  let last = list_max_or_null(attempts);
  if (equal(last, null)) {
    let r = 0;
    return r;
  }
  return last;
}
