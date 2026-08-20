import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_search_books_text() {
  "What the box above the whole canon says it will look through, in the language the reader of this app reads.";
  "It names books rather than saying search, because the same box sits above the languages elsewhere in this app and a reader meeting both should be able to tell without pressing which one they are standing in front of.";
  let texts = {
    en: "Search the books",
    ur: "کتابیں تلاش کریں",
    translated_from: {
      ur: "Search books",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
