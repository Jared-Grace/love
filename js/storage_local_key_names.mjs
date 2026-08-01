import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_names_path } from "./storage_local_key_names_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function storage_local_key_names() {
  "The function names already written into keys on somebody else's disk, as recorded - so none of them may be renamed without the saved data going with it.";
  "The record is what makes the question askable at all. Reading the names off the source answers what is published today, and today is the only thing source can ever say; the name that matters is the one that WAS there, because that is the one people's browsers are still looking under. So the two are asked separately and the gate is the difference between them.";
  arguments_assert(arguments, 0);
  let path = storage_local_key_names_path();
  let names = await file_read_json(path);
  return names;
}
