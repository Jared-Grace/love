import { fn_name } from "./fn_name.mjs";
export function daemons_recycled() {
  "The daemons systemd stops and starts fresh on a schedule";
  ("A loop daemon runs the code it loaded at start, forever. ",
    fn_name("qa_gate_timings_write_when_quiet_auto"),
    " ran three days past a change that kept 14G of ignored files out of the in-memory QA copy, so every round copied them back into RAM, filled swap, and froze the machine. Recycling under the one day ",
    fn_name("daemon_stale_seconds_allowed"),
    " grants means no loop daemon falls that far behind");
  ("The server is left out: a restart would cut off a phone test halfway");
  let v = [
    fn_name("webpack_watch"),
    fn_name("git_push_auto"),
    fn_name("g_content_backup_auto"),
    fn_name("qa_commit_named_auto"),
    fn_name("qa_gate_timings_write_when_quiet_auto"),
    fn_name("permission_replay_write_auto"),
  ];
  return v;
}
