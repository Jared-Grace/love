import { date_days_milliseconds } from "./date_days_milliseconds.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { greater_than } from "./greater_than.mjs";
import fs from "fs";
import { list_filter } from "./list_filter.mjs";
import { claude_transcript_paths } from "./claude_transcript_paths.mjs";
export function claude_transcript_paths_recent(days) {
  "The transcripts touched within the last days. The full archive is hundreds of megabytes of mostly ancient history, so anything that reads them line by line asks for a window instead.";
  let paths = claude_transcript_paths();
  let span = date_days_milliseconds(days);
  let cutoff = date_milliseconds_since(span);
  function recent_is(path) {
    let stat = fs.statSync(path);
    let b = greater_than(stat.mtimeMs, cutoff);
    return b;
  }
  let recent = list_filter(paths, recent_is);
  return recent;
}
