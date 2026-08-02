import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { readdir, stat } from "fs/promises";
import { path_join } from "./path_join.mjs";
import { claude_sessions_folder } from "./claude_sessions_folder.mjs";
("The sessions that were open when the machine went down, newest first.");
("");
("No bookkeeping file: a session that was open was being written to, so recency");
("of the transcript IS the open-set. That also survives an unplanned reboot or a");
('crash, which a "save before you shut down" snapshot would not.');
let MINUTE_MS = multiply(60, 1000);
let ENDING = ".jsonl";
export async function claude_sessions_recent(minutes) {
  let folder = claude_sessions_folder();
  let names = await readdir(folder);
  let left = date_now_milliseconds();
  let left2 = Number(minutes);
  let right = multiply(left2, MINUTE_MS);
  let cutoff = subtract(left, right);
  let recent = [];
  for (let name of names) {
    let b2 = name.endsWith(ENDING);
    if (not(b2)) {
      continue;
    }
    let path = path_join([folder, name]);
    let info = await stat(path);
    if (less_than(info.mtimeMs, cutoff)) {
      continue;
    }
    recent.push({
      id: name.slice(0, -ENDING.length),
      path,
      modified_ms: info.mtimeMs,
    });
  }
  function lambda(a, b) {
    let newest_first = subtract(b.modified_ms, a.modified_ms);
    return newest_first;
  }
  recent.sort(lambda);
  return recent;
}
