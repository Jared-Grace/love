import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { bible_folders_at_once } from "./bible_folders_at_once.mjs";
import { ebible_bible_folder_storage_books_first_page } from "./ebible_bible_folder_storage_books_first_page.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_storage_books_measure() {
  "Asks storage what it holds for every bible this repo ships, a few bibles at a time.";
  "Every bible rather than the ones somebody thought to check, and asked of the list of bibles rather than typed, because the list grows and nothing about adding a bible asks whether anything was ever uploaded for it.";
  "IT READS NAMES AND DOWNLOADS NOTHING, so the whole sweep is one request per bible. That is what makes it worth asking about every bible instead of only the ones already suspected.";
  "IT ANSWERS THE QUESTION THE MISSING-VERSE RECORD CANNOT. That record reads one book, so a bible with none of that book looks the same whether it is a real translation lacking that book or a folder nothing was ever put in. Those two want opposite work, and this is what tells them apart.";
  "Sorted by folder name so that a change in the record is a change in what was measured rather than a reshuffle.";
  "This reaches the network, so it is run by hand and its answer is kept in a file. What reads that file afterwards needs nothing but the file.";
  let bible_folders = ebible_bible_folders_sorted();
  async function lambda(bible_folder) {
    let listed = await ebible_bible_folder_storage_books_first_page(
      bible_folder,
    );
    return listed;
  }
  let at_once = bible_folders_at_once();
  let measured_each = await list_map_limited_async(
    bible_folders,
    lambda,
    at_once,
  );
  let r = {
    asked: list_size(bible_folders),
    bibles: measured_each,
  };
  return r;
}
