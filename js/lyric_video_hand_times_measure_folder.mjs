import { object_property_names } from "./object_property_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_hand_times_read } from "./lyric_video_hand_times_read.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { lyric_video_document_times_measure } from "./lyric_video_document_times_measure.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
export async function lyric_video_hand_times_measure_folder(folder) {
  "$plain folder";
  "Times every song a person has timed by ear from a folder of recordings named after each song's document, and hands back the two machine readings beside the person's own times.";
  "★ THE RECORDINGS ARE HANDED IN AS A FOLDER RATHER THAN FOUND, BECAUSE THE QUESTION THIS ANSWERS IS WHETHER A DIFFERENT RECORDING TIMES BETTER. The same songs with the instruments taken out, or cut from a video, or from another download, are each just another folder of the same names, and each is scored against the same ear. A song with no recording in the folder is left out rather than failed, so a folder holding some of them still answers for those.";
  "Nothing is written. The readings come back to whoever asked, because which recording is better is decided by comparing these, not by any one of them.";
  arguments_assert(arguments, 1);
  let hand = await lyric_video_hand_times_read();
  let names = object_property_names(hand);
  async function measure_one(name) {
    let entry = hand[name];
    let path_audio = text_combine_multiple([folder, "/", name, ".wav"]);
    let there = await file_exists(path_audio);
    if (not(there)) {
      return null;
    }
    let measured = await lyric_video_document_times_measure(
      path_audio,
      entry.path,
    );
    if (equal(measured, null)) {
      let r = {
        name,
        path_audio,
        measured: false,
      };
      return r;
    }
    function start_of(line) {
      let start = line.start;
      return start;
    }
    let hand_starts = list_map(entry.lines, start_of);
    let read = {
      name,
      path_audio,
      measured: true,
      hand: hand_starts,
      starts: measured.starts,
      starts_heard: measured.starts_heard,
      match_rate: measured.match_rate,
    };
    return read;
  }
  let all = await list_map_async(names, measure_one);
  function present(read) {
    let b = equal(read, null);
    let p = not(b);
    return p;
  }
  let reads = list_filter(all, present);
  return reads;
}
