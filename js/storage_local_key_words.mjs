import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_words_path } from "./storage_local_key_words_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function storage_local_key_words() {
  "The words already written after an owner into keys on somebody else's disk, as recorded - so none of them may be reworded without the saved setting going with it.";
  "Its sibling holds the other half of the same key and is watched for a different danger. A name moves because a command moves it, so the report arrives at the rename. A word moves because a person retyped it, and there is no moment to hook - only this record, read back later, can say the word used to be something else.";
  arguments_assert(arguments, 0);
  let path = storage_local_key_words_path();
  let words = await file_read_json(path);
  return words;
}
