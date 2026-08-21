import { date_now_iso } from "./date_now_iso.mjs";
import { bible_folders_at_once } from "./bible_folders_at_once.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_index_flat_storage } from "./ebible_index_flat_storage.mjs";
import { bible_verse_holes_book } from "./bible_verse_holes_book.mjs";
import { ebible_index_flat_book_chapter_codes } from "./ebible_index_flat_book_chapter_codes.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { ebible_index_flat_chapter_verse_numbers } from "./ebible_index_flat_chapter_verse_numbers.mjs";
import { list_map } from "./list_map.mjs";
import { bible_folder_verse_holes } from "./bible_folder_verse_holes.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_verse_holes_measure() {
  "Reads one book of every bible this repo ships and counts, for each one, how many of the verses a page will ask it for it has nothing to answer with.";
  "Every bible rather than the ones somebody thought to check, and asked of the list of bibles rather than typed, for the same reason its neighbour does it: the list grows, and nothing about adding a bible asks whether it holds every verse.";
  "The right side of every comparison is the English index, because that is the list a page walks when it decides what to ask for. It is downloaded once and shared across all of them.";
  "Sorted by folder name so that a change in the record is a change in what was measured rather than a reshuffle.";
  "This reaches the network, so it is run by hand and its answer is kept in a file. What reads that file afterwards needs nothing but the file.";
  "A FEW BIBLES AT A TIME RATHER THAN ALL OF THEM, because the sweep is nested and the nesting is what does the damage. Every bible asks for all its chapters at once, so asking every bible at once multiplied the two together into six thousand asks arriving in the same moment, and most of them never came back. The ones that did not were written into the record as bibles missing chapters they hold. Nothing about the shape of that record said so, which is why the number in flight is now named and kept small.";
  "IT TAKES LONGER ON PURPOSE AND THAT COSTS NOTHING WORTH SAVING. This is a command somebody runs by hand when the shipped bibles change, and its whole worth is that the answer can be believed afterwards. A wrong answer arrived at quickly is not a cheaper version of a right one.";
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
  let at_once = bible_folders_at_once();
  let measured_each = await list_map_limited_async(
    bible_folders,
    lambda2,
    at_once,
  );
  ("WHEN IT WAS ASKED IS WRITTEN DOWN BESIDE WHAT WAS FOUND, because every finding here is a statement about what storage held at one moment and none of it says so on its own. A hole is closed by an upload, and a record written before that upload goes on naming the same verses afterwards - so a reader is looking at a repair that was already done and cannot tell. Its neighbour was read that way once and named seventy-seven bibles as holding nothing, all of them full.");
  ("It is stamped at the end rather than the start, so what it says is when the answer was complete and not when somebody set it going. This one reads a whole book of every shipped bible a few at a time and takes minutes, and a stamp from before it began would be the one part of the record that was never measured.");
  let measured_at = date_now_iso();
  let r = {
    book_code,
    chapters: list_size(chapters),
    measured_at,
    bibles: measured_each,
  };
  return r;
}
