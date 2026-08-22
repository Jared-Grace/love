import { folder_attempt_next } from "./folder_attempt_next.mjs";
import { song_image_drawn_folder } from "./song_image_drawn_folder.mjs";
export async function song_image_draw_attempt_next(number) {
  "the number the next attempt at a couplet's picture should be saved under";
  "it is one more than the newest already there, so a couplet nobody has drawn starts at one and nothing already drawn is ever written over";
  let folder = song_image_drawn_folder(number);
  let next = await folder_attempt_next(folder, ".png");
  return next;
}
