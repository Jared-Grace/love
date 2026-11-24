import { app_shared_text_reader_language_copy } from "./app_shared_text_reader_language_copy.mjs";
export function app_shared_bible_sermon_and_bible_copy_text() {
  "what the button that copies the passage and its sermon together says, in the language the reader of this app reads, with the little clipboard in front of it";
  let texts = {
    eng: " Copy Bible and sermon",
    urd: " بائبل اور واعظ کاپی کریں",
    tgl: " Kopyahin ang Bibliya at sermon",
    spa: " Copiar Biblia y sermón",
    translated_from: {
      urd: " Copy Bible and sermon",
      tgl: " Copy Bible and sermon",
      spa: " Copy Bible and sermon",
    },
  };
  let c = app_shared_text_reader_language_copy(texts);
  return c;
}
