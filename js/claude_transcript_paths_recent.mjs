import fs from "fs";
import { list_filter } from "./list_filter.mjs";
import { claude_transcript_paths } from "./claude_transcript_paths.mjs";
export function claude_transcript_paths_recent(days) {
  "The transcripts touched within the last days. The full archive is hundreds of megabytes of mostly ancient history, so anything that reads them line by line asks for a window instead.";
  let paths = claude_transcript_paths();
  let count = Number(days);
  let span = count * 24 * 60 * 60 * 1000;
  let cutoff = Date.now() - span;
  function recent_is(path) {
    let stat = fs.statSync(path);
    let b = stat.mtimeMs > cutoff;
    return b;
  }
  let recent = list_filter(paths, recent_is);
  return recent;
}
