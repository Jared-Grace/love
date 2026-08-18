import { list_slice } from "./list_slice.mjs";
import { claude_transcript_paths_recent } from "./claude_transcript_paths_recent.mjs";
import { permission_prompt_events_paths } from "./permission_prompt_events_paths.mjs";
import { permission_replay_events_keyed } from "./permission_replay_events_keyed.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { permission_prompt_rows_verdicts } from "./permission_prompt_rows_verdicts.mjs";
import { permission_replay_summary } from "./permission_replay_summary.mjs";
import { dispatcher_run_name } from "./dispatcher_run_name.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
export async function permission_replay_rows(days, count) {
  "every shape of command the transcripts show being run, ranked by how often, with what the rules as they stand today would decide about each — the shapes still answering ask or silent are the ones a grant could still take off the human";
  "replaying old commands under today's rules is what tells a solved prompt from a standing one. a shape somebody granted last week answers allow now and falls out by itself, so what is left is never work already done, and no list of past grants has to be read to work that out.";
  "the record of what actually interrupted the human is wiped whenever the machine restarts, and the transcripts are not. so this counts every run of a shape rather than every proved wait: a shape that would stop the human costs a prompt every time it is run, which makes the run count the honest estimate of what a rule would save.";
  "only the commonest count shapes are put to the guard, because each verdict starts a process. the rest are counted and handed back as unchecked rather than quietly left out, so a short answer can never read as a whole one.";
  let paths = claude_transcript_paths_recent(days);
  let events = await permission_prompt_events_paths(paths, days, 0);
  let keyed = permission_replay_events_keyed(events);
  let rows = permission_prompt_events_grouped_by(keyed, "replay_key");
  let count2 = Number(count);
  let checking = list_slice_count(rows, 0, count2);
  await permission_prompt_rows_verdicts(checking);
  let unchecked = list_slice(rows, checking.length, rows.length);
  ("each checked shape is told which dispatcher function it runs, by the one reader the proved ranking uses, so a candidate named here and a candidate named there mean the same thing");
  permission_rows_run_named(checking);
  let already_allowed = [];
  let denied = [];
  let candidates = [];
  for (let row of checking) {
    let verdict = property_get(row, "verdict");
    let allowed = equal(verdict, "allow");
    if (allowed) {
      list_add(already_allowed, row);
      continue;
    }
    let refused = equal(verdict, "deny");
    if (refused) {
      list_add(denied, row);
      continue;
    }
    list_add(candidates, row);
  }
  let r = {
    days: Number(days),
    transcripts: paths.length,
    calls: events.length,
    shell_calls: keyed.length,
    shapes: rows.length,
    checked: checking.length,
    already_allowed: permission_replay_summary(already_allowed),
    denied: permission_replay_summary(denied),
    unchecked: permission_replay_summary(unchecked),
    candidates,
  };
  return r;
}
