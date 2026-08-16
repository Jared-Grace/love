import { app_ceb_bible_gloss_passage_verses_read } from "./app_ceb_bible_gloss_passage_verses_read.mjs";
import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { gloss_words_capitalised_always } from "./gloss_words_capitalised_always.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_passages } from "./app_ceb_bible_gloss_passages.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { list_first } from "./list_first.mjs";
export async function app_ceb_bible_gloss_write_passage(
  chapter_code,
  verse_key,
) {
  "Everything needed to author one named Cebuano passage: its Cebuano wording, its English wording, and each of its verses cut into words with what a dictionary says each word is built from.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses one passage of it covers. Neither names anything that runs.";
  "The root and the affixes are handed over rather than worked out, for the same reason the Greek parsing is: a root is a claim about a language, and a word's shape is exactly the evidence that misleads. Cebuano builds a word by putting sounds inside it as well as around it, and a prefix that changes the sound it lands on leaves a root nobody can see - so a root read off the letters is a guess dressed as a fact, and it reads the same as a true one.";
  "A word the dictionary was never asked about is said to be so, rather than arriving looking like a word it had nothing to say about. The two are opposite instructions to an author: one is a gap in the gathering and is somebody's to fill, and the other is the dictionary's own silence and is to be respected.";
  "A word the book never once writes in small letters is said to be so, beside whatever the dictionary answered rather than instead of it. The dictionary answers about the letters it is given rather than about the word meant by them, so a place name spelled like a built Cebuano word comes back taken apart: Galilea was handed over as a root lili wearing a prefix and a suffix. Nothing about that answer looks wrong, which is the whole of the problem - an author who does not already know the place would pass it on, and a made-up origin is the sentence a reader is likeliest to keep.";
  "The two are handed over together because either one alone is a claim this cannot make good. Withholding the root said this word is a name, and in poetry that is wrong far more often than it is right: measured over the Psalms, four hundred and six words are never once written in small letters, and most of them are ordinary commands that only ever open a line - barog, tan-awa, pamatia. Told they were names, an author would withhold the origins of words that have them, which is the same mistake pointing the other way and at a hundred times the volume. Both readings are evidence and neither is a verdict, so the author is given both and settles it.";
  "It also answers with the file to write the explanations into, because that name is a convention and a convention nobody can see is a convention nobody can follow.";
  "The passage is named rather than found, which is what lets a passage that already carries explanations be authored again. That matters here more than on the Greek side, because every Cebuano chapter now in the store was generated rather than authored, so re-authoring is not the exception but the whole of the work.";
  let passages = await app_ceb_bible_gloss_passages(chapter_code);
  let passage = gloss_passages_verses_key_find(passages, verse_key);
  let known = await binisaya_words_known();
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let bible_folder = list_first(bible_folders);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let capitalised = await gloss_words_capitalised_always(
    bible_folder,
    book_code,
  );
  let verses = app_ceb_bible_gloss_passage_verses_read(
    passage,
    known,
    capitalised,
  );
  let file = gloss_write_file_path(
    chapter_code,
    verse_key,
    app_ceb_bible_gloss_generate,
  );
  let r = {
    chapter_code,
    verse_key,
    file,
    verses,
  };
  return r;
}
