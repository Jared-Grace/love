import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_path } from "./literals_frozen_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { greater_than } from "./greater_than.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function function_rename_literals_frozen_record(
  f_name_before,
  f_name_after,
) {
  arguments_assert(arguments, 2);
  ("The record of frozen values is keyed by the function that holds each value, and the value beside it is a word that has already left this repo. So a rename moves a key and never a value. Swept by the letters, the record was rewritten on both sides alike, and on 2026-11-05 a gloss folder's frozen word followed the uploader of the same name: the code still handed back the old word, the record claimed the new one, and the gate blocked a build.");
  ("The keys keep their places, because the record is written in the order the frozen list names them, and a rename keeps that list's order too.");
  let path = literals_frozen_path();
  let record = await file_read_json(path);
  let sites = 0;
  let renamed = {};
  for (let key of object_property_names(record)) {
    let key_after = key;
    if (equal(key, f_name_before)) {
      key_after = f_name_after;
      sites = sites + 1;
    }
    let value = property_get(record, key);
    property_set_exists_not(renamed, key_after, value);
  }
  if (greater_than(sites, 0)) {
    await file_overwrite_json(path, renamed);
  }
  let change = {
    f_path: path,
    sites,
  };
  return change;
}
