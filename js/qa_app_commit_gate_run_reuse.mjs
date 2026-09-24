import { text_includes } from "./text_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { qa_app_commit_shipped_names } from "./qa_app_commit_shipped_names.mjs";
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
export async function qa_app_commit_gate_run_reuse(search) {
  "$plain search";
  "Whether one app is sound to send right now, answered from the newest commit already judged whenever nothing this app ships has changed since - and judged afresh at the commit we stand on only when something has.";
  "★ ASKING TO SEND SHOULD NOT MEAN WAITING A QUARTER OF AN HOUR. The human asked on 2026-09-24 for the time between asking for a deploy and the deploy to be short. Peers commit every few minutes, so the commit we stand on has almost never been judged yet, and judging it is the whole repo's gates - about fourteen minutes, queued behind every other judging on the machine. Measured the same day: one deploy of one app waited fifty two minutes and sent nothing, and a second waited seventy nine.";
  "WHY AN OLDER VERDICT IS STILL THE ANSWER. What an app ships is worked out by following imports from its own entry, file by file. If none of those files differ between the judged commit and ours, the same walk over the same files gives the same names, so the app is the same code at both commits - and every gate that was red there was sorted by whether it reaches those very names. The one thing an older verdict cannot know is a gate added since; that is accepted, because a new gate judges code the app already had.";
  "WHAT IS NOT COVERED is anything the bundle is made from that is not one of the shipped functions - the build settings and the page around the script. Those change rarely, and a change there is not a change in any gate's verdict about the app.";
  arguments_assert(arguments, 1);
  let head = await git_head_commit();
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
      object_merge(earlier, {
        head,
        reused: true,
      });
      return earlier;
    }
  }
  let judged = await qa_app_commit_gate_run_at_reach(search, head, reach);
  object_merge(judged, {
    head,
    reused: false,
  });
  return judged;
}
