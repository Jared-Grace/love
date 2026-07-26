import { file_read } from "./file_read.mjs";
import { text_identifier_replace } from "./text_identifier_replace.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { equal } from "./equal.mjs";
export async function file_identifier_replace(f_path, name_before, name_after) {
  "Rewrites a whole word in one file, and writes only when the word was really there. A sweep over a folder then leaves the untouched files untouched, so the commit that follows names only what actually moved.";
  let contents = await file_read(f_path);
  let replaced = text_identifier_replace(contents, name_before, name_after);
  let same_is = equal(contents, replaced);
  if (same_is) {
    return false;
  }
  await file_overwrite(f_path, replaced);
  return true;
}
