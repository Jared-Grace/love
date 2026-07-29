import { browser_is } from "./browser_is.mjs";
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
  ("A browser has no file to ask about, so it receives the same nothing as a file that cannot be reached - which is what this already promised to return in that case, rather than a new answer invented for the occasion. Without the branch the import below throws and blanks whichever screen reached it, and the walk that looks for such calls stops here precisely because someone asked which environment this is.");
  let browser = browser_is();
  if (browser) {
    return null;
  }
  async function stat_read() {
    let fs = await import("fs");
    let promises = property_get(fs, "promises");
    let read = await promises.stat(file_path);
    return read;
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
