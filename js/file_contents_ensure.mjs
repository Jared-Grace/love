import { equal } from "./equal.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function file_contents_ensure(file_path, contents) {
  "Puts exactly these contents in this file, and says whether that changed anything. Setup is run again every time a step is added to it, so a step needs to be able to report that it found its work already done.";
  "A file already holding the wanted text is left untouched rather than rewritten with the same bytes, because a rewrite moves the modified time and anything watching the file reacts to a change that did not happen.";
  let existing = await file_read_try(file_path);
  let same = equal(existing, contents);
  if (same) {
    let r = {
      file_path,
      changed: false,
    };
    return r;
  }
  await file_parent_exists_ensure(file_path);
  await file_overwrite_uncached(file_path, contents);
  let r2 = {
    file_path,
    changed: true,
  };
  return r2;
}
