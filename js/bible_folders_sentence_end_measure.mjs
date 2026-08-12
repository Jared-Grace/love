import { bible_folder_sentence_end_measure } from "./bible_folder_sentence_end_measure.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function bible_folders_sentence_end_measure() {
  "Reads the opening of every bible this repo ships and counts, for each one, how many verses finish on a mark a sentence is known to end on.";
  "Every bible rather than the ones somebody thought to check, because the list of bibles grows and nothing about adding one asks whether its sentences can be told apart. Asking the list itself is what keeps this true of the bibles that are here rather than of the bibles that were here when it was written.";
  "Sorted by the name of the folder rather than left in the order the list happens to be in, because that order is by how many people speak the language and would shuffle the whole record whenever one of those numbers is corrected.";
  "This reaches the network, so it is run by hand and its answer is kept in a file. What reads that file afterwards needs nothing but the file.";
  let bible_folders = ebible_bible_folders_sorted();
  let measured = await list_map_unordered_async(
    bible_folders,
    bible_folder_sentence_end_measure,
  );
  return measured;
}
