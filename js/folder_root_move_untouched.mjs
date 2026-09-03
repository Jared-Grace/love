import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { folder_public } from "./folder_public.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function folder_root_move_untouched() {
  "The places in this repo that renaming a folder must never write into, each said as the start of a path from the repo's own root.";
  "What is left out here is everything that is not a reference. A reference is somebody's spelling of where a thing lives now, and moving the thing makes that spelling wrong; the three kinds below are neither, and rewriting them does no repointing at all.";
  "A record of the past names paths that are gone. Saying one of them was somewhere it never was does not fix anything - it makes the record lie, and the check reading it then measures against a past that did not happen. Both files kept this way were rewritten once before this list existed.";
  ("A LOG IS THE SAME KIND OF THING AND WAS MISSING FROM HERE. Moving the served folder on 2026-09-03 rewrote six thousand eight hundred lines of a retired watcher's log, every one of them a note of where a file had been at the time; nothing went red, because a log is read by nobody and lies quietly. It was put back with ",
    fn_name("file_path_start_repoint"),
    ", which exists because the repo refuses to throw uncommitted work away and so the only undo left was to write the text back.");
  ("Built output is written out again from the code every time it is built, so a reference in it is a copy rather than a source, and repointing the copy fixes nothing. It is also squeezed down to one line of somebody else's shortened names, where a folder's name reads out of the middle of a word far more often than it means the folder.");
  ("The built output is named by asking rather than by spelling, which is what keeps this right on the day that folder itself moves. It did move, under web/, and had this held the word instead of the question every bundle would have been handed to the sweep in the same breath.");
  ("WHAT IS STILL NOT COVERED IS PROSE, and it cannot be, because a note holds both kinds in one file - a live pointer at where something lives and a sentence about where it used to. Only a reading tells them apart. So a rename still ends with reading the diff over every document it touched; the same move rewrote a migration table into a history that did not happen.");
  arguments_assert(arguments, 0);
  let records = findings_folder();
  let built = folder_public();
  let combined = text_combine(records, "/");
  let combined2 = text_combine(built, "/");
  let v = data_given_baselines_folder();
  let r = path_join([v, "git_history_heavy_absent_baseline.json"]);
  let untouched = [combined, combined2, r, ".watch.log"];
  return untouched;
}
