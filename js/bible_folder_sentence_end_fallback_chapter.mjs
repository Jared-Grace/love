import { bible_folder_storage_book_codes } from "./bible_folder_storage_book_codes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { bible_sentence_end_sample_chapter } from "./bible_sentence_end_sample_chapter.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_includes } from "./list_includes.mjs";
import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
import { text_skip } from "./text_skip.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine } from "./text_combine.mjs";
export async function bible_folder_sentence_end_fallback_chapter(bible_folder) {
  "$plain bible_folder";
  "The chapter to read in one bible when asking whether that bible marks where its sentences end - chosen from the chapters that bible actually holds.";
  "ONE CHAPTER FOR EVERY BIBLE WAS THE MISTAKE THIS REPLACES. Luke one was read in all of them, and seventy one answered with nothing - not because their languages write no marks but because they do not hold Luke. Forty of those seventy one hold other books and were being written down as unreadable while sitting there readable; a bible published as Mark and four letters is an ordinary thing and there are hundreds of them here.";
  "Luke one still comes first wherever a bible holds Luke, and the reason is unchanged: it opens with a dedication running across several verses, so a bible that ends a sentence only at the end of a verse and a bible that ends one mid-chapter are told apart there rather than looking alike. That reason is worth keeping wherever it can be had, and worth nothing in a bible that has no Luke.";
  "WHERE IT CANNOT BE HAD, ANY CHAPTER ANSWERS. The question is how a language is written down, not what a passage says, so the first book storage names is taken and its opening chapter read. That is the first alphabetically rather than the first in the Bible, because it is the order the record happens to be in and nothing here depends on which chapter it lands on.";
  "THE OPENING CHAPTER IS TAKEN OFF THE PREFERRED SAMPLE rather than spelled again here, so the two can never come apart. Reading Luke one and then reading somebody else's book two would be a difference nobody chose, arrived at by two lines being edited on separate days.";
  "A BIBLE STORAGE HOLDS NOTHING FOR IS ANSWERED WITH NO CHAPTER AT ALL, rather than with a guess that would be absent too. Thirty one of the seventy one are empty in storage, and that is a fault about an upload that never ran rather than a fact about a language - it has a gate of its own that names them, and a chapter code invented here would only get it refused a second time in a place that cannot repair it.";
  let book_codes = await bible_folder_storage_book_codes(bible_folder);
  let none = list_empty_is(book_codes);
  if (none) {
    let nothing = "";
    return nothing;
  }
  let preferred = bible_sentence_end_sample_chapter();
  let book_preferred = ebible_chapter_code_to_book(preferred);
  let held = list_includes(book_codes, book_preferred);
  if (held) {
    return preferred;
  }
  let count = ebible_book_code_size();
  let opening = text_skip(preferred, count);
  let first = list_first(book_codes);
  let chapter_code = text_combine(first, opening);
  return chapter_code;
}
