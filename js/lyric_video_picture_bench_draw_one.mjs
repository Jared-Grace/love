import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { http_buffer_file_overwrite } from "./http_buffer_file_overwrite.mjs";
export async function lyric_video_picture_bench_draw_one(
  path,
  prompt,
  width,
  height,
  draw,
) {
  "$plain path";
  "$plain prompt";
  "$plain width";
  "$plain height";
  "Draws one bench picture into one named file if that file is not already there, and says which of the three things happened.";
  "★ THE THREE OUTCOMES ARE NAMED RATHER THAN COUNTED, BECAUSE TWO OF THEM LEAVE THE FOLDER LOOKING THE SAME AND ONLY ONE OF THEM COST ANYTHING. A file already on disk and a house that would not paint the scene both end with nothing new written, so a run that judged itself by counting files afterwards could not tell a finished set from a set nobody will ever be allowed to draw. Naming what happened is what lets a caller pay again for the refusals alone.";
  "It is handed the wording and the size already worked out, so that a caller wanting one picture for each scene and a caller wanting several tries at each scene share this whole step and differ only in what they call the file and how many times they ask for it.";
  "Skipping what is already there is what makes any bench run safe to start again: a run that stopped half way costs only the pictures it had not reached, and every draw is paid for.";
  arguments_assert(arguments, 5);
  let there = await file_exists(path);
  if (there) {
    let already = {
      state: "there",
      path,
    };
    return already;
  }
  let sample = await draw(prompt, width, height);
  if (not(sample)) {
    let refused = {
      state: "refused",
      path,
    };
    return refused;
  }
  await http_buffer_file_overwrite(sample, path);
  let r = {
    state: "drawn",
    path,
  };
  return r;
}
