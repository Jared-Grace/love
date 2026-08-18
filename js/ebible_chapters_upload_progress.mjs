import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { ebible_version_chapters } from "./ebible_version_chapters.mjs";
import { file_exists } from "./file_exists.mjs";
import { invoke_cache_file_key_get } from "./invoke_cache_file_key_get.mjs";
import { list_last_or_null } from "./list_last_or_null.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_chapters_upload_progress() {
  "How far a run of the whole chapter upload has got - the translation it is on, how many are behind it, and how many are left.";
  "Asked of the same list the upload walks, in the same order, so the answer is a place in that walk rather than a count of something else. The last translation with a remembered answer on disk is the one being uploaded now, because the answer is written before the upload of it begins and the walk never goes back.";
  "Worth having because a run of this takes hours and says nothing at all while it works. Without it the only way to learn whether a run is alive is to go looking at what the machine is doing - which files it has open, which addresses it is talking to - and that answers a different question badly.";
  "A translation further along the list with a remembered answer from an older run is deliberately not counted. The walk is in order, so what matters is how far the unbroken run of remembered answers reaches from the start; anything past the first gap belongs to a different run.";
  let bible_folders = ebible_languages_without_original_bible_folders();
  let total = list_size(bible_folders);
  let reached = [];
  for (let bible_folder of bible_folders) {
    let key_get = invoke_cache_file_key_get(ebible_version_chapters, [
      bible_folder,
    ]);
    let f_path = await key_get();
    let remembered = await file_exists(f_path);
    if (not(remembered)) {
      break;
    }
    reached.push(bible_folder);
  }
  let done = list_size(reached);
  let reached_last = list_last_or_null(reached);
  let left = subtract(total, done);
  let v = {
    reached_last,
    done,
    left,
    total,
  };
  return v;
}
