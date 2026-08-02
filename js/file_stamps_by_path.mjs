import { browser_is } from "./browser_is.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function file_stamps_by_path(f_paths) {
  "How every one of these files stood, keyed by its own path - the same short mark of when it was last written and how long it is, asked about a whole list at once.";
  "Asked in one straight pass rather than a question per file waiting on its own answer. The disk is not what costs here: seven thousand questions are a fraction of a second of real asking, and the machinery of promising each answer separately measured several times that. The whole facts index is checked this way on every single command, so it was the largest cost left in the seam once the writing was fixed.";
  "A file that cannot be asked about is simply absent from the answer, which a caller reads exactly as it read nothing before - do not trust anything remembered about that one.";
  "A browser has no files to ask about and receives an empty answer, so every path reads as unknown rather than as unchanged.";
  let stamps = {};
  let browser = browser_is();
  if (browser) {
    return stamps;
  }
  let fs = await import("fs");
  let stat_of = property_get(fs, "statSync");
  for (let f_path of f_paths) {
    function lambda_stat() {
      let read = promises(f_path);
      return read;
    }
    let stat = catch_null(lambda_stat);
    if (null_is(stat)) {
      continue;
    }
    let written = property_get(stat, "mtimeMs");
    let size = property_get(stat, "size");
    let stamp = {
      written,
      size,
    };
    property_set(stamps, f_path, stamp);
  }
  return stamps;
}
