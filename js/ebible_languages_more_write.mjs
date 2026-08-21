import { ebible_languages_more_rows_write } from "./ebible_languages_more_rows_write.mjs";
import { property_in_list_not } from "./property_in_list_not.mjs";
import { ebible_languages_commercial_single } from "./ebible_languages_commercial_single.mjs";
import { ebible_languages_curated_codes } from "./ebible_languages_curated_codes.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_filter } from "./list_filter.mjs";
export async function ebible_languages_more_write() {
  "Writes out the generated half of the languages list - every language eBible gives away on terms this repo may ship, less the ones the hand-written half already carries.";
  "Derived and thrown away rather than added to, so that a licence changing on eBible's side or a choice changing on ours shows up as this file being written differently rather than as a list nobody remembers to correct.";
  "It finds its own set rather than being handed one, so it cannot drift from what is actually on disk, and running it twice over an unchanged disk leaves the same file.";
  "It needs the eBible corpus on the disk to say anything at all, which is why the file it writes is not rendered from here alone: the twin next door renders the same file out of what it already reads back as, and that one needs nothing on the disk.";
  let singles = await ebible_languages_commercial_single();
  let covered = await ebible_languages_curated_codes();
  let code_key = language_code_key();
  function uncovered_is(language) {
    let unknown = property_in_list_not(language, code_key, covered);
    return unknown;
  }
  let more = list_filter(singles, uncovered_is);
  let written = await ebible_languages_more_rows_write(more);
  return written;
}
