import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_books_text() {
  "What the book list is called when another screen names it as the place a way out leads back to, in the language the reader of this app reads.";
  "It is the plural noun on its own rather than a sentence, because it is read inside a phrase that already supplies the rest - back to books.";
  let texts = {
    eng: "Books",
    urd: "کتابیں",
    tgl: "Mga aklat",
    spa: "Libros",
    por: "Livros",
    ind: "Kitab",
    fra: "Livres",
    translated_from: {
      urd: "Books",
      tgl: "Books",
      spa: "Books",
      por: "Books",
      ind: "Books",
      fra: "Books",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
