import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null } from "./catch_null.mjs";
import { dev_error_log_path } from "./dev_error_log_path.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { json_from } from "./json_from.mjs";
import { list_add } from "./list_add.mjs";
import { list_take_last } from "./list_take_last.mjs";
import { not } from "./not.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export async function dev_error_log_recent(count) {
  arguments_assert(arguments, 1);
  ("The last few errors a page reported from a /dev/ path, newest last. This is the whole point of writing them down - somebody who was not there can ask what broke.");
  ("No file yet means nothing has broken, which is an answer rather than a fault, so it reads as no errors instead of throwing.");
  ("A line that will not parse is passed over. The page appends while this reads, so the last line can be half written; one torn line is not a reason to lose the rest.");
  let f_path = dev_error_log_path();
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
