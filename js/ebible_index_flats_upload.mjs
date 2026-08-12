import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_index_flat_upload } from "./ebible_index_flat_upload.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_index_flats_upload() {
  arguments_assert(arguments, 0);
  ("Builds and uploads a flat index for every bible this repo ships.");
  ("One command rather than the same one run forty times, and it finds its own set from the list of bibles - so a bible added later is covered by running this again rather than by somebody remembering to name it.");
  ("A page walks the union of the indexes of the bibles a reader chose. Until a bible has one it is passed over and shown at the verse numbers the other bibles name, which is what every bible was shown at before there was a union - so this makes the page truer for the readers of each bible it reaches and breaks nothing on the way.");
  ("The index is built by walking the bible on this machine's disk, so this only runs where those files are. A bible whose folder is not there is answered rather than thrown, and named back, because one missing folder must not stop the thirty-nine that are.");
  let bible_folders = ebible_bible_folders_sorted();
  async function lambda(bible_folder) {
    async function lambda2() {
      await ebible_index_flat_upload(bible_folder);
      return bible_folder;
    }
    let done = await catch_null_async(lambda2);
    return done;
  }
  let answers = await list_map_unordered_async(bible_folders, lambda);
  let uploaded = list_filter_null_not_is(answers);
  let failed = list_difference(bible_folders, uploaded);
  let r = {
    asked: list_size(bible_folders),
    uploaded,
    failed,
  };
  return r;
}
