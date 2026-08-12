import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_index_flat_storage } from "./ebible_index_flat_storage.mjs";
import { bible_verse_holes_book } from "./bible_verse_holes_book.mjs";
import { ebible_index_flat_book_chapter_codes } from "./ebible_index_flat_book_chapter_codes.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { ebible_index_flat_chapter_verse_numbers } from "./ebible_index_flat_chapter_verse_numbers.mjs";
import { list_map } from "./list_map.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_folder_verse_holes } from "./bible_folder_verse_holes.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_verse_holes_measure() {
  "Reads one book of every bible this repo ships and counts, for each one, how many of the verses a page will ask it for it has nothing to answer with.";
  "Every bible rather than the ones somebody thought to check, and asked of the list of bibles rather than typed, for the same reason its neighbour does it: the list grows, and nothing about adding a bible asks whether it holds every verse.";
  "The right side of every comparison is the English index, because that is the list a page walks when it decides what to ask for. It is downloaded once and shared across all of them.";
  "Sorted by folder name so that a change in the record is a change in what was measured rather than a reshuffle.";
  "This reaches the network, so it is run by hand and its answer is kept in a file. What reads that file afterwards needs nothing but the file.";
  let english = ebible_folder_english();
  let list = await ebible_index_flat_storage(english);
  let book_code = bible_verse_holes_book();
  let chapter_codes = ebible_index_flat_book_chapter_codes(list, book_code);
  list_sort_text(chapter_codes);
  function lambda(chapter_code) {
    let verse_numbers = ebible_index_flat_chapter_verse_numbers(
      list,
      chapter_code,
    );
    let chapter = {
      chapter_code,
      verse_numbers,
    };
    return chapter;
  }
  let chapters = list_map(chapter_codes, lambda);
  let bible_folders = ebible_bible_folders_sorted();
  async function lambda2(bible_folder) {
    let measured = await bible_folder_verse_holes(bible_folder, chapters);
    return measured;
  }
  let measured_each = await list_map_unordered_async(bible_folders, lambda2);
  let r = {
    book_code,
    chapters: list_size(chapters),
    bibles: measured_each,
  };
  return r;
}
