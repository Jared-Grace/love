import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
export function app_shared_bible_verses_question_text(book_name, chapter_name) {
  arguments_assert(arguments, 2);
  ("$plain book_name");
  ("$plain chapter_name");
  ("the book name is a book's name as this app's bible spells it, and the chapter name is the chapter's number written out; both are only shown.");
  ("What the verse picker asks above the verses of one chapter, in the language the reader of this app reads.");
  ("THE BOOK IS THE ONE THING DROPPED IN; THE CHAPTER IS WRITTEN INTO EACH LANGUAGE'S OWN HALF. English names the chapter before the book and Urdu names the book before the chapter, so a sentence with two gaps in a fixed order would come out backwards in one of them.");
  let parts = {
    en: {
      before: text_combine_multiple([
        "Which verse from chapter ",
        chapter_name,
        " of the book of ",
      ]),
      after: " do you want to choose?",
    },
    ur: {
      before: "آپ ",
      after: text_combine_multiple([
        " کی کتاب کے باب ",
        chapter_name,
        " سے کون سی آیت چننا چاہتے ہیں؟",
      ]),
    },
    translated_from: {
      ur: {
        before: text_combine_multiple([
          "Which verse from chapter ",
          chapter_name,
          " of the book of ",
        ]),
        after: " do you want to choose?",
      },
    },
  };
  let text = app_shared_text_reader_language_around(parts, book_name);
  return text;
}
