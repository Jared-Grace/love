import { ffmpeg_crop_box } from "./ffmpeg_crop_box.mjs";
import { ffmpeg_crop_write } from "./ffmpeg_crop_write.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { file_move } from "./file_move.mjs";
import { text_combine } from "./text_combine.mjs";
export async function image_black_trim(path) {
  "cut the black border off a picture, in place, so that what is left is the drawing and nothing else";
  "this exists because how much of the frame the drawing fills was being left to the drawing. The picture is asked to reach almost to all four edges, and sometimes it does and sometimes it sits in a wide black margin, and nothing downstream can tell the two apart - a margin of black on a black frame is invisible, so the only sign of it is that the shape came out small. Trimming settles it here instead of asking for it there: whatever was drawn, what is saved is the drawing.";
  "it is worth more than it looks. The picture is shown fitted inside half a frame, so every row of black margin is a row the fitting spends before it gets to the drawing. On the first picture measured this way the black came to a quarter of the height and a fifth of the width, and cutting it made the shape a quarter wider on the wide cut and a ninth wider on the tall one - more than the square shape costs in the first place.";
  "black is what marks the edge rather than transparency, because the frame this is shown on is black too. There is nothing for a transparent picture to reveal, so the cheaper thing that needs no alpha channel and no keying is exactly as good.";
  "a picture with no black around it is trimmed to itself, which costs one rewrite and changes nothing, so this is safe to run twice and safe to run on a picture that never needed it";
  "when nothing can be found it says so and leaves the picture alone. A picture entirely black or entirely not has no border to cut, and neither does one ffmpeg could not read; in all three the right answer is the picture as it stands.";
  let box = await ffmpeg_crop_box(path);
  if (box === null) {
    let untrimmed = { path, box: null, trimmed: false };
    return untrimmed;
  }
  let path_trimmed = text_combine(path, ".trimmed.png");
  await ffmpeg_crop_write(path, box, path_trimmed);
  await file_delete_if_exists(path);
  await file_move(path_trimmed, path);
  let trimmed = { path, box, trimmed: true };
  return trimmed;
}
