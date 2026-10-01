import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_folder_paths_commit_days_named } from "./git_folder_paths_commit_days_named.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function git_history_heavy_absent_added_hint(paths) {
  "What to say about the large absent files a ratchet has just started failing on: the standing instruction, and then each path with the day it was last in the repo.";
  "★ ADDED DOES NOT MEAN NEWLY COMMITTED, AND WITHOUT A DAY BESIDE THE NAME IT READS AS IF IT DID. THE GATE SAYS TO TAKE THE FILE OUT WHILE THAT IS STILL ONE SMALL CHANGE, WHICH IS AN INSTRUCTION ABOUT A FILE ONE COMMIT OLD - SO A NAME ARRIVING ON ITS OWN INVITES THE READER TO BELIEVE SOMEBODY HAS JUST COMMITTED IT. WHAT ACTUALLY ARRIVED ON 2026-10-01 WAS A FILE A YEAR OLD, SURFACED BECAUSE THE THRESHOLD RESTS ON A WEIGHT AND A REPACK MOVED THE WEIGHT. HALF AN HOUR WENT ON ESTABLISHING BY HAND THAT IT WAS A YEAR OLD, AND THE SAME READING IS ONE GIT QUESTION.";
  "The day of the newest commit touching the path, which for a file the present no longer has is the day it left - the one date that says whether this is today's mistake or a thing the history has been carrying all along.";
  "It is worked out rather than written down because this is a maker and not a sentence: a ratchet that passes asks nothing, so a git question per failing name is paid for only by a gate that is already red.";
  "★ A PATH WITH NO DAY IS SAID TO HAVE NO DAY, RATHER THAN BEING GIVEN THE WORD NULL WHERE A DATE BELONGS. EVERY NAME THIS IS HANDED CAME OUT OF THE HISTORY, SO A NAME GIT CANNOT DATE MEANS THE TWO READINGS DISAGREE ABOUT WHAT THE HISTORY HOLDS - WHICH IS A LARGER THING THAN THE FILE, AND HAS TO READ AS A FAULT AND NOT AS A DATE.";
  arguments_assert(arguments, 1);
  let folder = await git_folder_love();
  let days = await git_folder_paths_commit_days_named(folder, paths);
  let lines = [];
  for (let path of paths) {
    let day = property_get_or_null(days, path);
    let undated = null_is(day);
    let said = undated
      ? " - no commit in this history names it, so the two readings of the history disagree"
      : text_combine_multiple([" - last in the repo on ", day]);
    let line = text_combine_multiple([path, said]);
    list_add(lines, line);
  }
  let dated = list_join_newline(lines);
  let r = text_combine_multiple([
    "each of these is a large file this repo's history is carrying that the present no longer has, so it travels in every copy and nothing shows it - take it out of the history while that is still one small change, and read the day beside each name before believing it is today's",
    "\n",
    dated,
  ]);
  return r;
}
