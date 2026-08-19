import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { gloss_words_capitalised_always } from "./gloss_words_capitalised_always.mjs";
import { list_first } from "./list_first.mjs";
export async function app_ceb_bible_gloss_chapter_known_capitalised(
  chapter_code,
) {
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  "The two readings an author of one Cebuano chapter needs before any of its words can be looked at: what the dictionary was asked about, and which words the book this chapter comes from never once writes in small letters.";
  "Both are read for a whole book rather than for a chapter, so which bible the capitalisation is counted over is a choice rather than a given - it is the first of the folders the generating runs over, and the two readings that ask for this have to make the same choice or they answer differently about the same chapter.";
  "Neither says anything on its own. The dictionary answers about the letters it is given rather than about the word meant by them, and the capitalisation answers about a habit of printing rather than about a name; put beside each other they are evidence an author settles, and apart they are each a claim that is wrong about as often as it is right.";
  arguments_assert(arguments, 1);
  let known = await binisaya_words_known();
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let bible_folder = list_first(bible_folders);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let capitalised = await gloss_words_capitalised_always(
    bible_folder,
    book_code,
  );
  let r = {
    known,
    capitalised,
  };
  return r;
}
