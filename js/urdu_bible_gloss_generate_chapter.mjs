import { text_empty } from "./text_empty.mjs";
import { urdu_bible_gloss_bible_folders } from "./urdu_bible_gloss_bible_folders.mjs";
import { urdu_bible_gloss_generate } from "./urdu_bible_gloss_generate.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { app_shared_gloss_bible_generate_generic } from "./app_shared_gloss_bible_generate_generic.mjs";
export async function urdu_bible_gloss_generate_chapter(
  chapter_code_specified,
) {
  "$plain chapter_code_specified";
  "Write out one chapter of the English Bible with every word glossed and explained in Urdu, for a reader whose own language is Urdu and who is learning English.";
  "This is the reverse of the two gloss apps written before it, which explain a foreign passage to an English reader. Here English is the language being learned, so English is the passage and Urdu is the explaining.";
  "The Urdu text rides along as a reference rather than as the glossed text, so the assistant can see what the verse already says in the reader's own language before it explains an English word.";
  let book_code = ebible_chapter_code_to_book(chapter_code_specified);
  let language = "English";
  let language_reader = "Urdu";
  let fn = urdu_bible_gloss_generate;
  let bible_folders = urdu_bible_gloss_bible_folders();
  let last = "Urdu and the original language are";
  await app_shared_gloss_bible_generate_generic(
    language,
    last,
    bible_folders,
    book_code,
    fn,
    chapter_code_specified,
    text_empty,
    language_reader,
  );
}
