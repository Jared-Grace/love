import path from "path";
import readline from "readline";
import fs from "fs";
import { not } from "./not.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { equal } from "./equal.mjs";
import { number_nan_is } from "./number_nan_is.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { permission_prompt_label } from "./permission_prompt_label.mjs";
export async function permission_prompt_events_file(file_path, wait_minimum) {
  "Every tool call in one transcript whose result took at least wait_minimum milliseconds to come back, paired with the label a permission rule would use.";
  "Read the gap as evidence, not proof. BELOW a second nothing human happened - nobody reads a dialog and clicks in 76 milliseconds - so a short gap PROVES the call was auto-approved. A long gap is ambiguous on its own: either the human was asked, or the tool itself was slow. Narrowing the long ones is a separate step.";
  "Streamed a line at a time because a single transcript can be tens of megabytes, and the cheap substring test comes before the parse because almost every line is neither half of a tool call.";
  let stream = fs.createReadStream(file_path);
  let lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });
  let calls = new Map();
  let events = [];
  let session = path.basename(file_path, ".jsonl");
  for await (let line of lines) {
    let interesting =
      line.includes('"tool_use"') || line.includes('"tool_result"');
    if (not(interesting)) {
      continue;
    }
    let entry = json_parse_try(line);
    if (equal(entry, null)) {
      continue;
    }
    let message = entry.message;
    if (not(message)) {
      continue;
    }
    let content = message.content;
    let b = Array.isArray(content);
    if (not(b)) {
      continue;
    }
    let at = Date.parse(entry.timestamp);
    ("a line with no time is passed over whole, before it can touch the open calls. Measured 2026-11-03: transcripts now hold api-request-blob lines, copies of a request carrying the same tool_use blocks with no timestamp, and one of those threw in toISOString and stopped every refresh of the ranking. A copy of a call is not a call, and a wait cannot be measured from a time that is not there.");
    if (number_nan_is(at)) {
      continue;
    }
    for (let part of content) {
      if (equal(part.type, "tool_use")) {
        calls.set(part.id, {
          name: part.name,
          input: part.input,
          at,
          sidechain: equal(entry.isSidechain, true),
        });
      }
      if (equal(part.type, "tool_result")) {
        let call = calls.get(part.tool_use_id);
        if (not(call)) {
          continue;
        }
        calls.delete(part.tool_use_id);
        let waited = subtract(at, call.at);
        if (less_than(waited, wait_minimum)) {
          continue;
        }
        let command = equal(typeof call.input.command, "string")
          ? call.input.command
          : "";
        ("the exact file is kept alongside the folder label because a grant can name either, and only the exact one says which sibling in a per-file folder is the one still missing");
        let file = equal(typeof call.input.file_path, "string")
          ? call.input.file_path
          : "";
        list_add(events, {
          label: permission_prompt_label(call.name, call.input),
          tool: call.name,
          command,
          path: file,
          waited,
          at: new Date(call.at).toISOString(),
          sidechain: call.sidechain,
          session,
        });
      }
    }
  }
  return events;
}
