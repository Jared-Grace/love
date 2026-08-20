import { ebible_bible_folder_storage_chapter_codes_first_page } from "./ebible_bible_folder_storage_chapter_codes_first_page.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
export async function bible_folder_sentence_end_fallback_chapter(bible_folder) {
  "$plain bible_folder";
  "A chapter one bible is known to hold, to read for how it ends its sentences when the chapter every bible is asked for first is not there.";
  "ONE CHAPTER FOR EVERY BIBLE WAS THE MISTAKE THIS REPLACES. Luke one was read in all of them and seventy one answered with nothing - not because their languages write no marks but because they do not hold Luke. Forty of those seventy one hold other books and were being written down as unreadable while sitting there readable; a bible published as a gospel and four letters is an ordinary thing and there are hundreds of them here.";
  "ANY CHAPTER ANSWERS THE QUESTION, which is what makes a fallback allowable at all. What is being asked is how a language is written down and not what a passage says, so the first chapter storage names is taken and read.";
  "A CHAPTER IS ASKED FOR AND NEVER A BOOK, because a book named is not a promise that its opening chapter is there. Four bibles were sent to the opening chapter of a book they really hold and found nothing: one holds two files of Matthew and they are the twenty first chapter, another fifteen books in sixty five files and not one of them starts at one. Naming the book and appending an opening was a guess wearing the shape of an answer, and it read as a language without sentences.";
  "THE FOLDER IS LISTED RATHER THAN THE RECORD READ. The record keeps the first page of that same listing collapsed to books, so it cannot give a chapter back; and this only runs for a bible that already failed to answer for the chapter every bible is asked for, so it costs one request in the seventy that need it and none in the rest.";
  "A BIBLE STORAGE NAMES NO CHAPTER FOR IS ANSWERED WITH NO CHAPTER AT ALL rather than with a guess that would be absent too. Thirty one of the seventy one have nothing in storage, and that is an upload that never ran rather than a fact about a language - it has a gate of its own that names them, and a chapter code invented here would only get it refused a second time in a place that cannot repair it.";
  let listed =
    await ebible_bible_folder_storage_chapter_codes_first_page(bible_folder);
  let chapter_codes = property_get(listed, "chapter_codes");
  let none = list_empty_is(chapter_codes);
  if (none) {
    let nothing = "";
    return nothing;
  }
  let chapter_code = list_first(chapter_codes);
  return chapter_code;
}
