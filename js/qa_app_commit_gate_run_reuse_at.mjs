import { arguments_assert } from "./arguments_assert.mjs";
import { qa_app_commit_shipped_names } from "./qa_app_commit_shipped_names.mjs";
import { qa_app_commit_gate_run_reuse_find } from "./qa_app_commit_gate_run_reuse_find.mjs";
import { qa_snapshot_owner } from "./qa_snapshot_owner.mjs";
import { lock_wait } from "./lock_wait.mjs";
import { fn_name } from "./fn_name.mjs";
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
  let found = await qa_app_commit_gate_run_reuse_find(search, head, reach);
  if (found) {
    return found;
  }
  ("★ ASKED AGAIN AT THE FRONT OF THE LINE. Judging waits its turn behind every other judging on the machine, and the one it waits behind has usually just judged a later commit - which very often answers this app too. Asked only before joining, that answer arrived and went unread, and a second quarter of an hour was spent judging what was already known: measured 2026-10-05, a deploy of one app sat thirty minutes behind a run and timed out still waiting. So the line is waited out first and the record read again at its front, the way the whole-repo run already does.");
  ("The lock is held only for the reading, which is a few seconds of git. Judging takes the same lock further down and the lock is not taken twice by one holder, so a miss gives it back and joins the line again; that costs a place only when the run ahead did not answer this app, which is when judging was needed anyway.");
  async function lambda() {
    let again = await qa_app_commit_gate_run_reuse_find(search, head, reach);
    return again;
  }
  let who = qa_snapshot_owner();
  let after = await lock_wait(fn_name("qa_gate_run_unlocked"), lambda, who);
  if (after) {
    return after;
  }
  let judged = await qa_app_commit_gate_run_at_reach(search, head, reach);
  object_merge(judged, {
    head,
    reused: false,
  });
  return judged;
}
