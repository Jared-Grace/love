import { json_to } from "./json_to.mjs";
import { file_append } from "./file_append.mjs";
export async function viewport_readout_record(lines) {
  "keeps one reading of the dev readout a phone posted to the dev server - the page is asked for with ?viewport and sends each reading that differs from the last one, so the numbers arrive here without anyone taking a picture of them, at the human's request, 2026-09-28";
  "one line per reading, stamped with the time it arrived, in a file git never sees, because the readings are measurements of one person's phone rather than anything to keep";
  let reading = {
    at: new Date().toISOString(),
    lines,
  };
  let line = json_to(reading) + "\n";
  await file_append("gitignore/viewport_readout.jsonl", line);
}
