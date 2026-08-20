import { bible_folder_storage_book_codes } from "./bible_folder_storage_book_codes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { bible_sentence_end_sample_chapter } from "./bible_sentence_end_sample_chapter.mjs";
import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
import { text_skip } from "./text_skip.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine } from "./text_combine.mjs";
export async function bible_folder_sentence_end_fallback_chapter(bible_folder) {
  "$plain bible_folder";
  "A chapter one bible is known to hold, to read for how it ends its sentences when the chapter every bible is asked for first is not there.";
  "ONE CHAPTER FOR EVERY BIBLE WAS THE MISTAKE THIS REPLACES. Luke one was read in all of them and seventy one answered with nothing - not because their languages write no marks but because they do not hold Luke. Forty of those seventy one hold other books and were being written down as unreadable while sitting there readable; a bible published as a gospel and four letters is an ordinary thing and there are hundreds of them here.";
  "ANY CHAPTER ANSWERS THE QUESTION, which is what makes a fallback allowable at all. What is being asked is how a language is written down and not what a passage says, so the first book the record names is taken and its opening chapter read.";
  "THE RECORD IS ASKED ONLY FOR A BOOK IT NAMES, never for the whole set, because the whole set is not what it holds. Its list is the first page of a storage listing and stops early - the English bible it was checked against names two books there and has sixty six. A book it names is one storage really holds, which is all a fallback needs; a book it does not name may be there all the same, which is why nothing here decides that Luke is missing.";
  "THE OPENING CHAPTER IS TAKEN OFF THE PREFERRED SAMPLE rather than spelled again here, so the two can never come apart. Reading Luke one in one bible and somebody else's book two in the next would be a difference nobody chose, arrived at by two lines being edited on separate days.";
  "A BIBLE THE RECORD NAMES NO BOOK FOR IS ANSWERED WITH NO CHAPTER AT ALL rather than with a guess that would be absent too. Thirty one of the seventy one have nothing in storage, and that is an upload that never ran rather than a fact about a language - it has a gate of its own that names them, and a chapter code invented here would only get it refused a second time in a place that cannot repair it.";
  let book_codes = await bible_folder_storage_book_codes(bible_folder);
  let none = list_empty_is(book_codes);
  if (none) {
    let nothing = "";
    return nothing;
  }
  let preferred = bible_sentence_end_sample_chapter();
  let count = ebible_book_code_size();
  let opening = text_skip(preferred, count);
  let first = list_first(book_codes);
  let chapter_code = text_combine(first, opening);
  return chapter_code;
}
