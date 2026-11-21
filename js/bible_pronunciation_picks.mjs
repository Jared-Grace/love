import { arguments_assert } from "./arguments_assert.mjs";
import { bible_pronunciation_picks_path } from "./bible_pronunciation_picks_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function bible_pronunciation_picks() {
  "Every name's pick so far, keyed by the name, each \"A\" or \"B\". Nothing picked yet is an empty record rather than a missing file.";
  arguments_assert(arguments, 0);
  let path = bible_pronunciation_picks_path();
  let exists = await file_exists(path);
  if (not(exists)) {
    let r = {};
    return r;
  }
  let picks = await file_read_json(path);
  return picks;
}
