import { arguments_assert } from "./arguments_assert.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { qa_app_commit_gate_run_reuse_at } from "./qa_app_commit_gate_run_reuse_at.mjs";
export async function qa_app_commit_gate_run_reuse(search) {
  "$plain search";
  "Whether one app is sound to send right now, answered from the newest commit already judged whenever nothing this app ships has changed since - and judged afresh at the commit we stand on only when something has.";
  arguments_assert(arguments, 1);
  let head = await git_head_commit();
  let judged = await qa_app_commit_gate_run_reuse_at(search, head);
  return judged;
}
