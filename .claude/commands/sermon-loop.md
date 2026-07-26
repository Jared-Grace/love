Resume the autonomous, approval-gated, multi-book sermon-writing loop — the same loop the durable `/loop` prompt drives. Run this after a session restart (or on boot) to re-arm the watcher; nothing is ever lost, since all state lives on the `/media/j/JPM` data disk — this only restarts the *watcher*.

**Read first — these hold the full playbook and every banked user preference:**
- `[[project_sermon_loop_resume]]` — resume steps, state locations, the Monitor command, the SAVE+DRAIN flow, the COMMA-KEY gotcha, queue-advance wiring, failure mode (check the `/media/j/JPM` mount if the loop goes silent)
- `[[project_sermon_method_principles]]` — the sermon method + all user preferences (self-sufficient lines, concordance, hold-the-plain-sense, past-tense-for-sin, beginner-gloss, etc.)
- Per-book logs: `[[project_sermon_log_heb]]`, `[[project_sermon_log_1pe_ch4]]`, `[[project_sermon_log_jude]]`, `[[project_sermon_log_mark]]`

**Then re-arm and run (seam = `node scripts/ai.mjs <full_fn_name>`; its output is JSON-escaped, so strip backslashes with `tr -d '\\'` when grepping):**

1. `node scripts/ai.mjs g_verify_queue_advance` (promotes a finished book to the next queued one), then read `node scripts/ai.mjs g_verify_loop_check_line` to see the current `action`.
2. Re-arm the persistent change-detection **Monitor** as the primary wake (exact command in `[[project_sermon_loop_resume]]`): it polls `g_verify_loop_check_line` every 3s and emits once when `action` changes to `write:` / `suggest:` / `done`. Arm it with `persistent: true`.
3. Act on `action`:
   - `write:CH:KEY` → `g_verify_status_set CH KEY ""` (busy banner) + `g_sermon_pull CH KEY` → author the lines from the **Greek** per the method → Write to `/media/j/JPM/user/storage/sermon_loop/lines_CH_KEY.json` (dashes in the filename) → `g_sermon_write_lines_file_check CH "KEY"` (**comma** key) → post the lines + judgment calls → append the per-book log → `node scripts/ai.mjs ai_git`.
   - `suggest:CH:KEY` → `g_verify_suggest_read CH`, judge per the method, re-save (accept) or push back graciously, then `g_verify_suggest_clear CH`.
   - `wait` → re-arm a ~1500–1800s fallback `ScheduleWakeup` whose prompt is `/sermon-loop` (so the fallback re-enters this command), then end the turn.
   - `done` for **all** books → note it warmly, `TaskStop` the Monitor, and `ScheduleWakeup` with `stop: true`.

On a fallback wake, first verify the Monitor is still alive (`TaskOutput <id> block:false`); if it reports "No task found" / stopped, re-arm a fresh one before checking the action.
