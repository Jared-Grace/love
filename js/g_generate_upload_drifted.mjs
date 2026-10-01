import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { each_async } from "./each_async.mjs";
import { path_name } from "./path_name.mjs";
import { g_generate_upload_hash_path } from "./g_generate_upload_hash_path.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { null_is } from "./null_is.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { text_hash } from "./text_hash.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_size } from "./list_size.mjs";
export async function g_generate_upload_drifted(fn) {
  "Which of one store's files have been changed since they were last sent up, and which were never accounted for at all - answered by reading the store and its own records, and reaching nothing over the network.";
  "★ THIS IS WHAT MAKES SENDING AGAIN A DECISION RATHER THAN A HOPE. The alternative is to send the whole store every time something anywhere was mended, which took most of an hour for one of these stores and said nothing afterwards about whether any of it had been needed. Here the answer costs a walk of two folders.";
  "A file with no record is reported apart from one that differs, because the two mean different things. Differing means it was sent and has since been changed. Missing means nothing here knows whether it was ever sent - which is what every file says before the recording existed, and is also what a file says when its send failed. Neither is a fault of this; both are reasons to send that file.";
  "A record that cannot be read as writing at all is counted as missing rather than thrown for, because the one thing to do about it is send the file again, which writes the record afresh.";
  "The counts come before the names in the answer so that a reading which only shows the beginning still shows how much was looked at.";
  arguments_assert(arguments, 1);
  let path = folder_user_storage_function_path(fn);
  let files = await folder_read_paths_async(path);
  let drifted = [];
  let unrecorded = [];
  await each_async(files, file_each);
  async function file_each(file) {
    let name = path_name(file);
    let record_path = g_generate_upload_hash_path(fn, name);
    let recorded = await file_read_try(record_path);
    let parsed = null_is(recorded) ? null : json_parse_try(recorded);
    if (null_is(parsed)) {
      list_add(unrecorded, name);
      return;
    }
    let before = property_get(parsed, "hash");
    let text = await file_read(file);
    let now = text_hash(text);
    if (not_equal(before, now)) {
      list_add(drifted, name);
    }
  }
  let r = {
    files: list_size(files),
    drifted_size: list_size(drifted),
    unrecorded_size: list_size(unrecorded),
    drifted,
    unrecorded,
  };
  return r;
}
