import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { text_split_colon } from "./text_split_colon.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { text_trim } from "./text_trim.mjs";
import { multiply } from "./multiply.mjs";
export async function git_objects_store_love() {
  "What this repository's object store is carrying right now: how much sits in packs, how much is still loose, how many packs there are, and what git has given up on.";
  "The reading to open before anyone argues for rewriting the history. A rewrite is argued from what the past holds and it costs every commit id in the repository; this is the cheaper question standing in front of that one, because a store that has never been repacked is heavy for a reason no rewrite addresses and a repack undoes without touching a single name.";
  "The weights are what this hands back, because git's own automatic packing counts objects instead. It waits for six thousand seven hundred loose ones, and this repository stores bundles and large readings, so a few thousand loose objects weigh hundreds of megabytes while that count sits well under the line and nothing ever fires. Measured 2026-09-02: three thousand six hundred and seventy six loose objects held about a hundred and ninety nine megabytes across eleven packs that had never been folded into one.";
  "Both halves travel together on purpose. Loose weight is undone by packing and costs nothing to undo; packed weight is the repository itself and only a rewrite touches it. Told only one of the two, a reader reaches for the expensive answer to the cheap problem.";
  "What git calls garbage travels out too. It is the one thing here that is neither packed nor loose, and its being there at all says a run was interrupted rather than that anything is too big.";
  "Counted in bytes though git says these in kibibytes, so that nothing downstream has to remember which of the numbers were scaled and which were not.";
  arguments_assert(arguments, 0);
  let folder = await git_folder_love();
  let printed = await git_folder_run(folder, ["count-objects", "-v"]);
  let lines = text_lines_working(printed);
  let said = {};
  for (let line of lines) {
    let halves = text_split_colon(line);
    let word = list_first(halves);
    let rest = list_last(halves);
    let trimmed = text_trim(rest);
    said[word] = Number(trimmed);
  }
  let kibibyte = 1024;
  let report = {
    folder,
    loose: said["count"],
    loose_bytes: multiply(said["size"], kibibyte),
    packs: said["packs"],
    pack_bytes: multiply(said["size-pack"], kibibyte),
    garbage: said["garbage"],
    garbage_bytes: multiply(said["size-garbage"], kibibyte),
  };
  return report;
}
