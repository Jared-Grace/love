import { arguments_assert } from "./arguments_assert.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function lyric_video_transcripts_path() {
  arguments_assert(arguments, 0);
  ("Where the words a listener shown no text thought each song said, and the second each of those words begins, are kept.");
  ("★ IT IS A SECOND FILE AND NOT A FIELD IN THE FIRST ONE, BECAUSE THE TWO ARE READ BY DIFFERENT READERS FOR DIFFERENT REASONS. The record of hearings is a page of numbers a person skims and a gate reads whole every run to compare one number per song; a transcript is a few hundred words per song that nobody reads until one line is in question. Folding the second into the first would multiply what that gate loads by several times to reach the same twenty six numbers, and would bury them in the middle of a wall of words.");
  ("It sits with the findings for the same reason the hearings do: nothing running depends on it, it is what a check heard on a day, and the given half is swept by passes that rewrite names and values.");
  let folder = findings_folder();
  let path = path_join([folder, "lyric_video_transcripts.json"]);
  return path;
}
