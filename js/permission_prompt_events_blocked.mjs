import path from "path";
import { list_filter } from "./list_filter.mjs";
import { claude_transcript_paths_recent } from "./claude_transcript_paths_recent.mjs";
import { permission_prompt_events_paths } from "./permission_prompt_events_paths.mjs";
import { notification_prompts_by_session } from "./notification_prompts_by_session.mjs";
export async function permission_prompt_events_blocked(days, seconds_minimum) {
  "The waits belonging to sessions that were actually recorded blocking on approval - and only those transcripts get opened.";
  "A proof by join can only ever match a session that appears in the block log, and blocking is rare, so reading the other transcripts is pure waste: hundreds of megabytes parsed to be discarded. Narrowing the file list first is not a sample or a cap, it loses nothing the join could have used.";
  let sessions = notification_prompts_by_session();
  let paths = claude_transcript_paths_recent(days);
  function blocked_is(file_path) {
    let session = path.basename(file_path, ".jsonl");
    let b = sessions.has(session);
    return b;
  }
  let blocked = list_filter(paths, blocked_is);
  let events = await permission_prompt_events_paths(
    blocked,
    days,
    seconds_minimum,
  );
  return events;
}
