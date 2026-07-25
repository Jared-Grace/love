import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import fs from "fs";
import { list_add } from "./list_add.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { notification_log_path } from "./notification_log_path.mjs";
export function notification_events() {
  "Every recorded moment a session blocked: when, which session, and whether it was blocked on approving something or merely idle and waiting for a prompt. Absent log means nothing has blocked since the last reboot, which is an empty list rather than an error.";
  let path = notification_log_path();
  let b = fs.existsSync(path);
  if (not(b)) {
    let r = [];
    return r;
  }
  let contents = fs.readFileSync(path, "utf8");
  let lines = contents.split("\n");
  let events = [];
  for (let line of lines) {
    if (equal(line, "")) {
      continue;
    }
    let parsed = json_parse_try(line);
    if (equal(parsed, null)) {
      continue;
    }
    list_add(events, parsed);
  }
  return events;
}
