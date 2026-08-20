import { number_from_text } from "./number_from_text.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_prompt } from "./song_image_prompt.mjs";
import { song_image_drawn_path } from "./song_image_drawn_path.mjs";
import { song_image_draw_finish } from "./song_image_draw_finish.mjs";
import { bfl_draw_wait_write } from "./bfl_draw_wait_write.mjs";
export async function song_image_draw_resume(number_text, polling_url) {
  "collect a couplet's picture that Black Forest Labs was still drawing when the waiting ran out, from the address that drawing was started at";
  "the waiting runs out long before the drawing is abandoned, and a picture is paid for the moment it is asked for rather than the moment it arrives. So drawing again after a timeout buys the same picture twice and throws the first one away; this asks again at the same address instead, which costs nothing.";
  "the address is the one thing it cannot work out for itself, so it is the one thing passed in. It is written in the error that reported the timeout.";
  let number = number_from_text(number_text);
  let couplet = song_image_couplet_get(number);
  let prompt = song_image_prompt(couplet);
  let attempt = await song_image_draw_attempt_next(number);
  let path = song_image_drawn_path(number, attempt);
  let tries = 120;
  await bfl_draw_wait_write(polling_url, tries, path);
  let drawn = await song_image_draw_finish(
    number,
    couplet.symbol,
    prompt,
    attempt,
  );
  return drawn;
}
