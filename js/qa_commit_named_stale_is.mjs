import { property_path_get_2 } from "./property_path_get_2.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { fn_name } from "./fn_name.mjs";
import { qa_commit_named_report } from "./qa_commit_named_report.mjs";
import { qa_commit_named_report_newest } from "./qa_commit_named_report_newest.mjs";
import { qa_commit_named_behind_ceiling } from "./qa_commit_named_behind_ceiling.mjs";
export async function qa_commit_named_stale_is() {
  "Whether the newest judged commit has fallen far enough behind the folder that a deploy asking now would find nothing recent enough to ship.";
  "Asked as a distance in commits rather than as the age of the record's file, because the file's age is not a fact about this daemon at all. It is rewritten by whoever judges anything, and somebody running the gates by hand is the single most ordinary state this repo is ever in - so a hand run at any commit at all made the file look fresh, which said not stale, which held the escape shut on a machine that is permanently full. Measured 2026-08-20: shards were running, the file had been written inside the hour, and the newest judged commit was sixty-two commits back.";
  "That is the same starvation the escape was written to end, wearing the shape of the thing that was supposed to end it. The old measure could only ever say that SOMETHING was judged recently, and what a deploy needs to know is whether something RECENT was judged - which the file's age cannot distinguish and a distance says outright.";
  "The value the hour was chosen for said so itself: an hour was picked because it is some tens of commits back on a repo this busy. So the commits were always what the reasoning ran on, and asking git for them removes the guess rather than adding a measure beside it.";
  ("Nothing judged at all counts as stale, which is the same refusal to read an absent answer as a fresh one that the file reading made. ",
    fn_name("qa_commit_named"),
    " has already dropped every judging that no longer stands, so a record full of entries nobody would believe answers here exactly as an empty one does.");
  ("Only commits the folder still holds are counted, which is the reading one name along. A judging of a commit that has been rewritten away is not a recent answer, and reading it as one would be the same mistake in a different place.");
  let report = await qa_commit_named_report();
  let opened = qa_commit_named_report_newest(report);
  let nothing = property_get(opened, "nothing");
  if (nothing) {
    return true;
  }
  let behind = property_path_get_2(opened, "newest", "behind");
  let ceiling = qa_commit_named_behind_ceiling();
  let stale = greater_than(behind, ceiling);
  return stale;
}
