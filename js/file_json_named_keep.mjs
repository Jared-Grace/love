import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function file_json_named_keep(f_path, name, value) {
  arguments_assert(arguments, 3);
  ("$plain f_path");
  ("$plain name");
  ("$plain value");
  ("Puts one named thing into a file that holds a collection of named things, making the file if it is not there yet, and hands back the whole collection as it stands afterwards.");
  ("★ AN ABSENT FILE IS THE FIRST WRITE AND NOT A FAULT, WHICH IS THE ONLY REASON THIS IS NOT THE TRANSFORM THAT ALREADY EXISTS. A read that throws on a missing file is right where the file is the subject and wrong where the file is a growing pile: the first thing ever kept would fail, and every caller would answer that by writing an empty file first, which is the same three lines copied to each of them.");
  ("It hands the whole collection back rather than nothing, because a caller that wants to know what it just added to is otherwise made to read the file again immediately after writing it.");
  let there = await file_exists(f_path);
  let empty = {};
  let record = not(there) ? empty : await file_read_json(f_path);
  record[name] = value;
  await file_overwrite_json(f_path, record);
  return record;
}
