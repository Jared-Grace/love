import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { not } from "./not.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { json_from } from "./json_from.mjs";
import { catch_null } from "./catch_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_take_last } from "./list_take_last.mjs";
export async function dev_log_recent(f_path, count) {
  arguments_assert(arguments, 2);
  ("The last few things written down in one of these files, newest last. This is the whole point of writing them down - somebody who was not there can ask what happened.");
  ("No file yet means nothing has been written, which is an answer rather than a fault, so it reads as none instead of throwing.");
  ("A line that will not parse is passed over. The page appends while this reads, so the last line can be half written; one torn line is not a reason to lose the rest.");
  let text = await file_read_try(f_path);
  let missing = not(text);
  if (missing) {
    let r = [];
    return r;
  }
  let lines = text_split_newline(text);
  let entries = [];
  for (let line of lines) {
    function lambda_read() {
      let read = json_from(line);
      return read;
    }
    let entry = catch_null(lambda_read);
    let torn = not(entry);
    if (torn) {
      continue;
    }
    list_add(entries, entry);
  }
  let recent = list_take_last(entries, count);
  return recent;
}
