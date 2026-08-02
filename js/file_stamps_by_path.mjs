import { browser_is } from "./browser_is.mjs";
import { round } from "./round.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function file_stamps_by_path(f_paths) {
  "How every one of these files stood, keyed by its own path - the same short mark of when it was last written and how long it is, asked about a whole list at once.";
  "Asked in one straight pass rather than a question per file waiting on its own answer. The disk is not what costs here: seven thousand questions are a fraction of a second of real asking, and the machinery of promising each answer separately measured several times that. The whole facts index is checked this way on every single command, so it was the largest cost left in the seam once the writing was fixed.";
  "A file that cannot be asked about is simply absent from the answer, which a caller reads exactly as it read nothing before - do not trust anything remembered about that one.";
  "A browser has no files to ask about and receives an empty answer, so every path reads as unknown rather than as unchanged.";
  "When a file was written is answered to the nearest whole millisecond rather than to the fraction the disk keeps. Copying a folder somewhere and keeping the moments carries them across only that far - the fraction below a millisecond is lost, so a copied file says it was written a hair away from when the original says it was. Measured across the whole repo: of seven thousand one hundred and fifty six files taken across, exactly one still matched to the fraction, and to the whole millisecond all but the nine genuinely written since matched. Asked to the fraction, every file in a frozen copy reads as changed and every question put to that copy reads and parses the entire repo again - which is what the whole gate does, several runs at once, every time it is asked.";
  "Nothing is given up by this that the answer did not already give up. Two writings of one file inside the same millisecond, ending at the same length, were already one answer here.";
  let stamps = {};
  let browser = browser_is();
  if (browser) {
    return stamps;
  }
  let fs = await import("fs");
  let stat_of = property_get(fs, "statSync");
  for (let f_path of f_paths) {
    function lambda_stat() {
      let read = stat_of(f_path);
      return read;
    }
    let stat = catch_null(lambda_stat);
    if (null_is(stat)) {
      continue;
    }
    let exact = property_get(stat, "mtimeMs");
    let written = round(exact);
    let size = property_get(stat, "size");
    let stamp = {
      written,
      size,
    };
    property_set(stamps, f_path, stamp);
  }
  return stamps;
}
