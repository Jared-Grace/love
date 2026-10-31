import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
export function app_shared_bible_chapters_question_text(book_name) {
  arguments_assert(arguments, 1);
  ("$plain book_name");
  ("the book name is a book's name as this app's bible spells it; it is only shown.");
  ("What the chapter picker asks above the chapters of one book, in the language the reader of this app reads.");
  ("IT NAMES THE BOOK INSIDE THE QUESTION, so the reader is told both what is being asked and which book they are in, in one line rather than a bare name over the numbers.");
  let parts = {
    en: {
      before: "Which chapter from the book of ",
      after: " do you want to choose?",
    },
    ur: {
      before: "آپ ",
      after: " کی کتاب سے کون سا باب چننا چاہتے ہیں؟",
    },
    translated_from: {
      ur: {
        before: "Which chapter from the book of ",
        after: " do you want to choose?",
      },
    },
  };
  let text = app_shared_text_reader_language_around(parts, book_name);
  return text;
}
