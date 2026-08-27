import { song_image_drawn_path } from "./song_image_drawn_path.mjs";
import { song_image_draw_attempt_next } from "./song_image_draw_attempt_next.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ffmpeg_black_box_write } from "./ffmpeg_black_box_write.mjs";
export async function song_image_attempt_black_below(
  number,
  attempt,
  fraction,
) {
  "take one attempt at a couplet's picture, black out everything below a given share of its height, and save that as the couplet's next attempt";
  "a drawing that is right everywhere except that one shape stands too high in it cannot be argued down by words - the wording that lowered the sun in couplet twenty-three lost the sun altogether, three drafts running. Raising the black ground over the foot of the shape does in one certain step what the drawing would not do in any number of uncertain ones.";
  "IT WRITES A NEW ATTEMPT RATHER THAN CHANGING THE ONE IT READ, so the picture it was made from is still there to go back to and to compare against. An edit that overwrote its own source would make the choice between them unrecoverable, and the whole point of numbered attempts is that no choice here is ever final.";
  "the height is a share and not a count of pixels because the pictures do not all come back the same size, so a number of pixels means a different place in each one and a share means the same place in all of them";
  let path_from = song_image_drawn_path(number, attempt);
  let next = await song_image_draw_attempt_next(number);
  let path_to = song_image_drawn_path(number, next);
  let v = String(fraction);
  let box = text_combine_multiple(["x=0:y=ih*", v, ":w=iw:h=ih"]);
  await ffmpeg_black_box_write(path_from, box, path_to);
  let made = {
    number,
    attempt,
    fraction,
    made: next,
    path: path_to,
  };
  return made;
}
