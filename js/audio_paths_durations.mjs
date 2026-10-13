import { arguments_assert } from "./arguments_assert.mjs";
import { audio_file_duration } from "./audio_file_duration.mjs";
import { list_add } from "./list_add.mjs";
export async function audio_paths_durations(paths_audio) {
  arguments_assert(arguments, 1);
  ("$plain paths_audio");
  ("How many seconds long each of a list of sound files is, one row each, carrying the path back alongside the number.");
  ("★ THE PATH TRAVELS WITH THE NUMBER, which is the whole reason this is not a plain list of numbers. A caller joining two sets of recordings by length has to say which file each length belonged to, and a bare list makes that the caller's job to keep in step by position. Two lists kept in step by position come apart the first time one of them is filtered or sorted, and nothing says so.");
  ("The lengths are asked for one after another rather than all at once. Asking in parallel would be faster, and it would also start one prober process per file: over a folder of five hundred recordings that is five hundred at once, which the machine answers by refusing some of them, and a refusal here reads as a file with no sound in it.");
  ("Nothing is skipped and nothing is caught. A path that cannot be read is a question about the list that was handed in, and swallowing it here would hand back a shorter list than was asked about with no sign of which row went missing.");
  let rows = [];
  for (let path_audio of paths_audio) {
    let seconds = await audio_file_duration(path_audio);
    list_add(rows, {
      path_audio,
      seconds,
    });
  }
  return rows;
}
