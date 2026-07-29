import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function file_stamp(file_path) {
  arguments_assert(arguments, 1);
  ("A short mark of how a file stood, cheap enough to ask about every file in the");
  ("repo and specific enough to tell that one has been rewritten.");
  ("When it was last written and how long it is, together. Either alone is too");
  ("weak: two edits within the same millisecond keep the time, and swapping one");
  ("word for another of the same length keeps the length, and no real edit keeps");
  ("both. Reading the file would settle it beyond doubt, but reading every file is");
  ("the very cost this exists to avoid.");
  ("Nothing when the file cannot be asked about at all, which a caller should read");
  ("as - do not trust anything remembered about this one.");
  async function stat_read() {
    let fs = await import("fs");
    let promises = property_get(fs, "promises");
    let stat = await promises.stat(file_path);
    return stat;
  }
  let stat = await catch_null_async(stat_read);
  if (equal(stat, null)) {
    return null;
  }
  let written = property_get(stat, "mtimeMs");
  let size = property_get(stat, "size");
  let stamp = {
    written,
    size,
  };
  return stamp;
}
