import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_chapter_text } from "./ebible_chapter_text.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_searchable } from "./text_words_searchable.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
export async function ebible_version_words_searchable(bible_folder) {
  "$plain bible_folder";
  "Every word of one whole translation, from the first chapter of Genesis to the last of Revelation, laid out as one piece of writing a run of words can be looked for in.";
  "It is here so that one translation can be asked what it says about a judgment made about another. A judgment about how a word is spelled is a judgment about the language rather than about the file it was made in, so a second translation by an unrelated publisher is evidence that can contradict the person who made it.";
  "The whole translation is handed back as one piece rather than a chapter at a time, because the question asked of it is always how many times something stands anywhere in it, and a caller adding a chapter at a time would have to know that the pieces already end and begin with a space of their own for the joining not to weld two words together.";
  "A chapter whose page cannot be read is stepped over rather than stopping the reading. This is a corpus being counted, not a text being published: a chapter missing from it lowers a count slightly, while a chapter stopping it leaves every count unmade.";
  "The verse numbers printed on the page fall out on their own. Only letters are taken, and a number is not a letter, so nothing here has to know where the marks of the verses are.";
  arguments_assert(arguments, 1);
  let books = await ebible_version_books(bible_folder);
  let chapter_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  let pieces = [];
  for (let chapter_code of chapter_codes) {
    async function lambda() {
      let read = await ebible_chapter_text(bible_folder, chapter_code);
      return read;
    }
    let chapter = await catch_null_async(lambda);
    let unread = null_is(chapter);
    if (unread) {
      continue;
    }
    let text = property_get(chapter, "text");
    let searchable = text_words_searchable(text);
    list_add(pieces, searchable);
  }
  let r = list_join(pieces, "");
  return r;
}
