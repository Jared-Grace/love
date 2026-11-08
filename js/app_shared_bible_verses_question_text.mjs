import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_filled } from "./app_shared_text_reader_language_filled.mjs";
export function app_shared_bible_verses_question_text(book_name, chapter_name) {
  arguments_assert(arguments, 2);
  ("$plain book_name");
  ("$plain chapter_name");
  ("the book name is a book's name as this app's bible spells it, and the chapter name is the chapter's number written out; both are only shown.");
  ("What the verse picker asks above the verses of one chapter, in the language the reader of this app reads.");
  ("EACH LANGUAGE WRITES ITS WHOLE SENTENCE WITH NAMED GAPS, and the book and the chapter are filled in by name. English names the chapter before the book and Urdu names the book before the chapter, so gaps found by name rather than by position put each one where its own language wants it. Rejected: a before and after around one dropped-in book, which had to build the chapter into each half and so was a saying worked out rather than written.");
  let texts = {
    en: "Which verse from chapter {chapter} of the book of {book} do you want to choose?",
    ur: "آپ {book} کی کتاب کے باب {chapter} سے کون سی آیت چننا چاہتے ہیں؟",
    tgl: "Anong talata mula sa kabanata {chapter} ng aklat ng {book} ang gusto mong piliin?",
    translated_from: {
      ur: "Which verse from chapter {chapter} of the book of {book} do you want to choose?",
      tgl: "Which verse from chapter {chapter} of the book of {book} do you want to choose?",
    },
  };
  let text = app_shared_text_reader_language_filled(texts, {
    chapter: chapter_name,
    book: book_name,
  });
  return text;
}
