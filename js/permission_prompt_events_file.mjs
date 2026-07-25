import fs from "fs";
import readline from "readline";
import path from "path";
import { list_add } from "./list_add.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
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
    if (!interesting) {
      continue;
    }
    let entry = json_parse_try(line);
    if (entry === null) {
      continue;
    }
    let message = entry.message;
    if (!message) {
      continue;
    }
    let content = message.content;
    if (!Array.isArray(content)) {
      continue;
    }
    let at = Date.parse(entry.timestamp);
    for (let part of content) {
      if (part.type === "tool_use") {
        calls.set(part.id, {
          name: part.name,
          input: part.input,
          at,
          sidechain: entry.isSidechain === true,
        });
      }
      if (part.type === "tool_result") {
        let call = calls.get(part.tool_use_id);
        if (!call) {
          continue;
        }
        calls.delete(part.tool_use_id);
        let waited = at - call.at;
        if (waited < wait_minimum) {
          continue;
        }
        let command =
          typeof call.input.command === "string" ? call.input.command : "";
        list_add(events, {
          label: permission_prompt_label(call.name, call.input),
          tool: call.name,
          command,
          waited,
          sidechain: call.sidechain,
          session,
        });
      }
    }
  }
  return events;
}
