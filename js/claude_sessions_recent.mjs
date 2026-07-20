import { readdir, stat } from "fs/promises";
import { path_join } from "./path_join.mjs";
import { claude_sessions_folder } from "./claude_sessions_folder.mjs";
// The sessions that were open when the machine went down, newest first.
//
// No bookkeeping file: a session that was open was being written to, so recency
// of the transcript IS the open-set. That also survives an unplanned reboot or a
// crash, which a "save before you shut down" snapshot would not.
const MINUTE_MS = 60 * 1000;
const ENDING = ".jsonl";
export async function claude_sessions_recent(minutes) {
  let folder = claude_sessions_folder();
  let names = await readdir(folder);
  let cutoff = Date.now() - Number(minutes) * MINUTE_MS;
  let recent = [];
  for (let name of names) {
    if (!name.endsWith(ENDING)) continue;
    let path = path_join([folder, name]);
    let info = await stat(path);
    if (info.mtimeMs < cutoff) continue;
    recent.push({
      id: name.slice(0, -ENDING.length),
      path,
      modified_ms: info.mtimeMs,
    });
  }
  recent.sort(function lambda(a, b) {
    let newest_first = b.modified_ms - a.modified_ms;
    return newest_first;
  });
  return recent;
}
