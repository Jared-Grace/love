import { add } from "./add.mjs";
import { song_image_drawn_attempt_last } from "./song_image_drawn_attempt_last.mjs";
export async function song_image_draw_attempt_next(number) {
  "the number the next attempt at a couplet's picture should be saved under";
  "it is one more than the newest already there, so a couplet nobody has drawn starts at one and nothing already drawn is ever written over";
  let last = await song_image_drawn_attempt_last(number);
  let next = add(last, 1);
  return next;
}
