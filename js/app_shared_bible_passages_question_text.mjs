import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_filled } from "./app_shared_text_reader_language_filled.mjs";
export function app_shared_bible_passages_question_text(
  book_name,
  chapter_name,
) {
  arguments_assert(arguments, 2);
  ("$plain book_name");
  ("$plain chapter_name");
  ("the book name is a book's name as this app's bible spells it, and the chapter name is the chapter's number written out; both are only shown.");
  ("What the picker asks above the passages of one chapter, in an app that goes passage by passage, in the language the reader of this app reads. Each language writes its whole sentence with named gaps, for the reason the verse picker's question gives.");
  let texts = {
    en: "Which passage from chapter {chapter} of the book of {book} do you want to choose?",
    ur: "آپ {book} کی کتاب کے باب {chapter} سے کون سا حصہ چننا چاہتے ہیں؟",
    tgl: "Anong bahagi mula sa kabanata {chapter} ng aklat ng {book} ang gusto mong piliin?",
    translated_from: {
      ur: "Which passage from chapter {chapter} of the book of {book} do you want to choose?",
      tgl: "Which passage from chapter {chapter} of the book of {book} do you want to choose?",
    },
  };
  let text = app_shared_text_reader_language_filled(texts, {
    chapter: chapter_name,
    book: book_name,
  });
  return text;
}
