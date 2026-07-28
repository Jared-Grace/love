import { ai_log_path } from "./ai_log_path.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { json_from_try } from "./json_from_try.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function ai_log_entries() {
  "Every command ever run through the seam, in the order it was run, read back as records.";
  "A line that will not parse is passed over rather than thrown on. Several conversations append to this file at once and one of them may be cut off mid-line by a machine going down, and a single torn line is not a reason to lose sixty thousand good ones.";
  let f_path = ai_log_path();
  let text = await file_read(f_path);
  let lines = text_split_newline(text);
  let entries = [];
  for (let line of lines) {
    let entry = json_from_try(line);
    let torn = not(entry);
    if (torn) {
      continue;
    }
    list_add(entries, entry);
  }
  return entries;
}
