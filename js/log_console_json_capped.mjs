import { json_format_to } from "./json_format_to.mjs";
import { log_console_json } from "./log_console_json.mjs";
import { process_result_lines_wanted } from "./process_result_lines_wanted.mjs";
import { text_lines_ends_kept } from "./text_lines_ends_kept.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function log_console_json_capped(value) {
  "Prints a result the way the caller wants to receive it: whole for the human at the keyboard, and for Claude both ends of it with the middle counted, filed whole under a name so nothing is lost.";
  "The whole answer is written down before anything is left out of the printing, which is what makes this different from cutting the printing by hand. A hand cut destroys what it hides; here the hidden part is a file away, so a shortening never costs a second run of the work.";
  "Nothing about this reaches a function. A function still answers what it answers and every caller still receives all of it - this is the last step, after all the work is done, where the answer becomes something somebody reads.";
  "It falls back to printing whole on any trouble at all. This runs after the work has already succeeded, so a fault in the shortening must never be the thing that loses a result.";
  arguments_assert(arguments, 1);
  let count = process_result_lines_wanted();
  let whole = equal(count, null);
  if (whole) {
    log_console_json(value);
    return;
  }
  try {
    let json = json_format_to(value);
    let kept = text_lines_ends_kept(json, count);
    let untouched = equal(kept, json);
    if (untouched) {
      console.log(json);
      return;
    }
    let v = String(process.pid);
    let name = text_combine_multiple(["ai_result_", v, ".json"]);
    let path = folder_gitignore_join(name);
    await file_overwrite(path, json);
    console.log(kept);
    let where = text_combine_multiple(["The whole answer is in ", path]);
    console.log(where);
  } catch (e) {
    ("unrepresentable as JSON, or nowhere to file it - print whole rather than lose it");
    log_console_json(value);
  }
}
