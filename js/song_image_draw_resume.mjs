import { song_image_couplet_attempt_write } from "./song_image_couplet_attempt_write.mjs";
import { bfl_draw_wait_write } from "./bfl_draw_wait_write.mjs";
export async function song_image_draw_resume(number_text, polling_url) {
  "collect a couplet's picture that Black Forest Labs was still drawing when the waiting ran out, from the address that drawing was started at";
  "the waiting runs out long before the drawing is abandoned, and a picture is paid for the moment it is asked for rather than the moment it arrives. So drawing again after a timeout buys the same picture twice and throws the first one away; this asks again at the same address instead, which costs nothing.";
  "the address is the one thing it cannot work out for itself, so it is the one thing passed in. It is written in the error that reported the timeout.";
  "the wording is handed to it and not used, because collecting a drawing already asked for cannot change what was asked for. It is filed beside the picture all the same, by the step that files it.";
  async function draw_to_path(prompt, path) {
    let tries = 120;
    await bfl_draw_wait_write(polling_url, tries, path);
  }
  let drawn = await song_image_couplet_attempt_write(
    number_text,
    "bfl",
    draw_to_path,
  );
  return drawn;
}
