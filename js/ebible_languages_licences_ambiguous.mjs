import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { ebible_version_copyright_path } from "./ebible_version_copyright_path.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_text_licences } from "./ebible_text_licences.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { not } from "./not.mjs";
export async function ebible_languages_licences_ambiguous() {
  "Every translation this app ships whose licence page names more than one set of terms, carrying all of them and the one that was taken.";
  "Only the shipped list rather than every translation on disk, because the question this answers is what has already gone out to readers.";
  "A page naming one is settled and needs no reader. A page naming two was settled by the strictest-first ordering, which is safe by construction and is still a machine choosing between two things a person wrote - so those are the ones worth a person's eyes.";
  "An empty answer is the good one: it says the ordering never had to choose, and so nothing shipped rests on it.";
  let bible_folders = await ebible_languages_without_original_bible_folders();
  async function ambiguous_or_null(bible_folder) {
    let f_path = ebible_version_copyright_path(bible_folder);
    let contents = await file_read_try(f_path);
    let missing = null_is(contents);
    if (missing) {
      return null;
    }
    let licences = ebible_text_licences(contents);
    let several = list_multiple_is(licences);
    if (not(several)) {
      return null;
    }
    let taken = list_first(licences);
    let ambiguous = {
      bible_folder,
      licences,
      taken,
    };
    return ambiguous;
  }
  let read = await list_map_async(bible_folders, ambiguous_or_null);
  let found = list_filter_null_not_is(read);
  return found;
}
