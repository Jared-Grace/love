import { arguments_assert } from "./arguments_assert.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { folder_public } from "./folder_public.mjs";
import { text_combine } from "./text_combine.mjs";
export function folder_root_move_untouched() {
  "The places in this repo that renaming a folder must never write into, each said as the start of a path from the repo's own root.";
  "What is left out here is everything that is not a reference. A reference is somebody's spelling of where a thing lives now, and moving the thing makes that spelling wrong; the two kinds below are neither, and rewriting them does no repointing at all.";
  "A record of the past names paths that are gone. Saying one of them was somewhere it never was does not fix anything - it makes the record lie, and the check reading it then measures against a past that did not happen. Both files kept this way were rewritten once before this list existed.";
  "Built output is written out again from the code every time it is built, so a reference in it is a copy rather than a source, and repointing the copy fixes nothing. It is also squeezed down to one line of somebody else's shortened names, where a folder's name reads out of the middle of a word far more often than it means the folder.";
  arguments_assert(arguments, 0);
  let records = findings_folder();
  let built = folder_public();
  let combined = text_combine(records, "/");
  let combined2 = text_combine(built, "/");
  let untouched = [
    combined,
    combined2,
    "data/given/baselines/git_history_heavy_absent_baseline.json",
  ];
  return untouched;
}
