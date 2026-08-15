import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_history_paths_absent_at_head_report } from "./git_history_paths_absent_at_head_report.mjs";
export async function git_history_paths_absent_at_head_report_love() {
  "The same reading of what this repo's history carries and its present does not, asked about this repo and nowhere else.";
  "It exists so the reading can be approved once and then stop asking. A standing approval covers every argument the function is ever handed, so one that takes a folder can never hold one - approving it for this repo would approve it for any folder named later. This one names its own, so there is nothing left for an argument to change.";
  "It asks for the folder rather than being told, so the two answers cannot drift apart, and the asking refuses out loud if the history is not where it is written down as being.";
  arguments_assert(arguments, 0);
  let folder = await git_folder_love();
  let report = await git_history_paths_absent_at_head_report(folder);
  return report;
}
