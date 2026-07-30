import { property_exists } from "./property_exists.mjs";
import { json_from } from "./json_from.mjs";
import { catch_null } from "./catch_null.mjs";
import { ai_log_path } from "./ai_log_path.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function ai_log_entries() {
  "Every command ever run through the seam, in the order it was run, read back as records.";
  "A line that will not parse is passed over rather than thrown on. Several conversations append to this file at once and one of them may be cut off mid-line by a machine going down, and a single torn line is not a reason to lose sixty thousand good ones.";
  "A line naming no function is passed over for the same reason and is the same kind of loss - it parses, but the one field that makes it the record of a command is gone, so it names no step and can be counted into nothing. That happened once, when the seam was handed no name at all and wrote the line before finding out; one such line among a hundred and seven thousand killed both readings of this file outright, which is exactly the outcome the sentence above exists to prevent. Passing it over here rather than in each reader is what keeps a reader written later from inheriting the same death.";
  let f_path = ai_log_path();
  let text = await file_read(f_path);
  let lines = text_split_newline(text);
  let entries = [];
  for (let line of lines) {
    function lambda_read() {
      let read = json_from(line);
      return read;
    }
    ("The name ending in try on the reader nearby means something else entirely - it");
    ("salvages a record out of surrounding prose, and still throws on a torn line.");
    ("This is the wrapper that actually hands back nothing instead of throwing.");
    let entry = catch_null(lambda_read);
    let torn = not(entry);
    if (torn) {
      continue;
    }
    let named = property_exists(entry, "f_name");
    if (not(named)) {
      continue;
    }
    list_add(entries, entry);
  }
  return entries;
}
