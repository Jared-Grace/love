import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { reply_rules_source_attempts } from "./reply_rules_source_attempts.mjs";
export async function reply_rules_source_attempts_file(path) {
  arguments_assert(arguments, 1);
  ("What the reply rules would answer to some messages if one of their functions were the source handed in, with the function's name, its source and the messages all read from one file.");
  ("★ IT READS A FILE SO THAT IT NEED NOT LOAD THE LIST OF CHANGES. That list builds its worked answers by calling reply functions, so loading it loads them, and a change to one of those could then never be tried: the process already holds the old file. The process that wrote this file is the one that loaded the list.");
  let trial = await file_read_json(path);
  let f_name = property_get(trial, "f_name");
  let source = property_get(trial, "source");
  let cases = property_get(trial, "cases");
  let results = await reply_rules_source_attempts(f_name, source, cases);
  return results;
}
