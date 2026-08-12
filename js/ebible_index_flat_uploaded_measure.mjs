import { ebible_languages } from "./ebible_languages.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { ebible_index_flat_uploaded_is } from "./ebible_index_flat_uploaded_is.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_difference } from "./list_difference.mjs";
export async function ebible_index_flat_uploaded_measure() {
  "Which of the bibles this repo ships have a flat index of their own in storage, and which do not.";
  "Asked of the list of bibles rather than of a list somebody typed, because the list grows and nothing about adding a bible asks whether it has one.";
  "A bible without an index is not broken and is not refused. A page unions the indexes of the bibles somebody chose and passes over the ones that are not there, so a bible without one is shown at the verse numbers the others name - which is what every bible was shown at before there was a union at all. What this is for is that somebody knows which ones those are.";
  "Sorted by folder name so a change in the record is a change in what is there rather than a reshuffle.";
  let bible_folders = ebible_bible_folders_sorted();
  async function lambda(bible_folder) {
    let is = await ebible_index_flat_uploaded_is(bible_folder);
    if (is) {
      return bible_folder;
    }
    return null;
  }
  let answers = await list_map_unordered_async(bible_folders, lambda);
  let uploaded = list_filter_null_not_is(answers);
  let absent = list_difference(bible_folders, uploaded);
  let r = {
    uploaded,
    absent,
  };
  return r;
}
