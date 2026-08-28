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
  "THE BLACK STOPS SHORT OF THE BORDER ON THREE SIDES, and that is the whole difference between this being usable and being bypassed by hand. The box was written to run from one edge to the other and all the way to the foot, which painted out the white band the window is drawn inside - so the picture came back a black slab with no frame, and couplet twenty-three's ground was cut by hand instead on the round that needed it. The inset is held here rather than asked of the caller because it is a fact about how these windows are drawn and not a choice about one picture: every one of them is a white border with the glass inside it, so every cut wants the same margin and a caller passing its own would only ever get it wrong.";
  let path_from = song_image_drawn_path(number, attempt);
  let next = await song_image_draw_attempt_next(number);
  let path_to = song_image_drawn_path(number, next);
  let v = String(fraction);
  let height = 0.93 - fraction;
  let h = String(height);
  let box = text_combine_multiple([
    "x=iw*0.06:y=ih*",
    v,
    ":w=iw*0.88:h=ih*",
    h,
  ]);
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
