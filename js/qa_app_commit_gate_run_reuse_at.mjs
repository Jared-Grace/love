import { arguments_assert } from "./arguments_assert.mjs";
import { qa_app_commit_shipped_names } from "./qa_app_commit_shipped_names.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { qa_commit_named_report } from "./qa_commit_named_report.mjs";
import { qa_commit_named_report_newest } from "./qa_commit_named_report_newest.mjs";
import { property_get } from "./property_get.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { qa_app_commit_gate_run_at_reach } from "./qa_app_commit_gate_run_at_reach.mjs";
import { object_merge } from "./object_merge.mjs";
export async function qa_app_commit_gate_run_reuse_at(search, head) {
  "$plain search";
  "Whether one app is sound to send at a commit the caller names, answered from the newest commit already judged whenever nothing this app ships has changed since - and judged afresh at that commit only when something has.";
  "The commit is handed in rather than looked up, so a caller sending several apps can ask about all of them at one commit. Looked up once per app, peers committing in between would move it, and every app would pay for a judging of its own.";
  "★ ASKING TO SEND SHOULD NOT MEAN WAITING A QUARTER OF AN HOUR. The human asked on 2026-09-24 for the time between asking for a deploy and the deploy to be short. Peers commit every few minutes, so the commit we stand on has almost never been judged yet, and judging it is the whole repo's gates - about fourteen minutes, queued behind every other judging on the machine. Measured the same day: one deploy of one app waited fifty two minutes and sent nothing, and a second waited seventy nine.";
  "WHY AN OLDER VERDICT IS STILL THE ANSWER. What an app ships is worked out by following imports from its own entry, file by file. If none of those files differ between the judged commit and ours, the same walk over the same files gives the same names, so the app is the same code at both commits - and every gate that was red there was sorted by whether it reaches those very names. The one thing an older verdict cannot know is a gate added since; that is accepted, because a new gate judges code the app already had.";
  "WHAT IS NOT COVERED is anything the bundle is made from that is not one of the shipped functions - the build settings and the page around the script. Those change rarely, and a change there is not a change in any gate's verdict about the app.";
  arguments_assert(arguments, 2);
  let reach = await qa_app_commit_shipped_names(search, head);
  ("The shipped list also holds the app's own name, its page and the Bible folders it can show. The page is made from the functions, so the functions answer for it; a name with no file of its own simply matches nothing in the comparison. A dotted name is left out because it cannot be a function's name.");
  function undotted_is(name) {
    let dotted = text_includes(name, ".");
    let b = not(dotted);
    return b;
  }
  let named = list_filter(reach, undotted_is);
  let paths = list_map(named, function_name_to_path_relative);
  let folder = folder_current_absolute();
  let report = await qa_commit_named_report();
  let newest = qa_commit_named_report_newest(report);
  let placed = property_get(newest, "placed");
  for (let one of placed) {
    let commit = property_get(one, "commit");
    let words = ["diff", "--name-only", commit, head, "--"].concat(paths);
    let out = await git_folder_run(folder, words);
    let changed = text_trim(out);
    let same = text_empty_is(changed);
    if (same) {
      let earlier = await qa_app_commit_gate_run_at_reach(
        search,
        commit,
        reach,
      );
      ("ONLY A YES IS REUSED. A no may be about something outside the shipped functions that has been mended since - measured 2026-09-24, a deploy was refused on an asset stamp that had been set right a few minutes earlier, because the older verdict still said no. So a no is asked again at the commit we stand on, and an older yes further back is not looked for either, since it may come from before whatever broke.");
      let passed = property_get(earlier, "deployable");
      if (passed) {
        object_merge(earlier, {
          head,
          reused: true,
        });
        return earlier;
      }
      break;
    }
  }
  let judged = await qa_app_commit_gate_run_at_reach(search, head, reach);
  object_merge(judged, {
    head,
    reused: false,
  });
  return judged;
}
