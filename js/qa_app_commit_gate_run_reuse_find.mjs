import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { qa_commit_named_report } from "./qa_commit_named_report.mjs";
import { qa_commit_named_report_newest } from "./qa_commit_named_report_newest.mjs";
import { property_get } from "./property_get.mjs";
import { git_commit_exists_is } from "./git_commit_exists_is.mjs";
import { not } from "./not.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { qa_app_commit_gate_run_at_reach } from "./qa_app_commit_gate_run_at_reach.mjs";
import { object_merge } from "./object_merge.mjs";
export async function qa_app_commit_gate_run_reuse_find(search, head, reach) {
  "$plain search";
  "A verdict already written down that says this app may be sent at the commit named, because nothing the app ships differs between the judged commit and that one - or null when the record holds no such yes. Reads the record and git; judges nothing.";
  arguments_assert(arguments, 3);
  ("The shipped list also holds the app's own name, its page and the Bible folders it can show. The page is made from the functions, so the functions answer for it; a name with no file of its own simply matches nothing in the comparison. A dotted name is left out because it cannot be a function's name.");
  function undotted_is(name) {
    let b = text_includes_not(name, ".");
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
    let present = await git_commit_exists_is(commit);
    if (not(present)) {
      ("A judged commit whose name no longer names anything is passed over rather than compared. History here has been rewritten, and every commit named in the record before that is gone - asked to compare against one, git refuses and the whole sending stops, where the honest answer is only that this verdict cannot be reused.");
      continue;
    }
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
  return null;
}
