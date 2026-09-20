import { list_add_multiple } from "./list_add_multiple.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_song_swaps_read } from "./lyric_video_song_swaps_read.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { path_basename } from "./path_basename.mjs";
import { path_join } from "./path_join.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { list_add } from "./list_add.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function lyric_video_song_swaps_chosen_write(song, folder) {
  "$plain song";
  "$plain folder";
  "Settles every picture a song has choices recorded for, writing one settled picture per place into the given folder, named after the picture it stands in for.";
  "ONE CHOSEN IS COPIED AND TWO OR MORE ARE MIXED IN EQUAL PARTS, because choosing two is not indecision - it says the wanted picture lies between them, and the even mix is the one picture that claim names.";
  "THE MIX IS IN EQUAL PARTS BECAUSE NOTHING RECORDS A LEANING. A choice is kept as a plain list with no weight beside it, so any other proportion would be invented here rather than read, and an invented number is one nobody can correct because nobody was asked for it.";
  "A PLACE WITH NOTHING CHOSEN IS LEFT OUT RATHER THAN FILLED IN WITH WHAT IS THERE NOW, so the folder holds decisions and only decisions, and a place still waiting on one is visible by its absence instead of hiding behind a copy.";
  "THE SETTLED PICTURE IS NAMED AFTER THE PICTURE BEING REPLACED and not after whichever candidate won, so whatever reads this folder next needs to know only which place it is filling.";
  arguments_assert(arguments, 2);
  let swaps = await lyric_video_song_swaps_read(song);
  let listed = property_get(swaps, "swaps");
  let written = [];
  for (let swap of listed) {
    let before = property_get(swap, "before");
    let chosen = property_get_or(swap, "chosen", []);
    let count = chosen.length;
    let none = equal(count, 0);
    if (none) {
      continue;
    }
    let file_name = await path_basename(before);
    let path_out = path_join([folder, file_name]);
    await file_parent_exists_ensure(path_out);
    let one = equal(count, 1);
    if (one) {
      await file_copy_overwrite(chosen[0], path_out);
      list_add(written, {
        path_out,
        mixed: count,
      });
      continue;
    }
    let command_words = [
      "-hide_banner",
      "-nostats",
      "-loglevel",
      "error",
      "-y",
    ];
    for (let path of chosen) {
      list_add_multiple(command_words, ["-i", path]);
    }
    let filter_text = "mix=inputs=" + count;
    list_add_multiple(command_words, [
      "-filter_complex",
      filter_text,
      path_out,
    ]);
    await ffmpeg_words_run(command_words);
    list_add(written, {
      path_out,
      mixed: count,
    });
  }
  let r = {
    written,
  };
  return r;
}
