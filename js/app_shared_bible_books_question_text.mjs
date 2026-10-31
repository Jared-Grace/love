import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_books_question_text() {
  arguments_assert(arguments, 0);
  ("What the book picker asks above the books, in the language the reader of this app reads.");
  ("IT IS A QUESTION, NOT A LABEL. A reader who has never used a bible app is told what this screen wants from them in a whole sentence, and the same sentence shape runs on through the chapter and the verse, so each step says what it is asking.");
  let texts = {
    en: "What book of the Bible do you want to choose?",
    ur: "آپ بائبل کی کون سی کتاب چننا چاہتے ہیں؟",
    translated_from: {
      ur: "What book of the Bible do you want to choose?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
