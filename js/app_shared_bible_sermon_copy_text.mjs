import { app_shared_text_reader_language_copy } from "./app_shared_text_reader_language_copy.mjs";
export function app_shared_bible_sermon_copy_text() {
  "what the button that copies the sermon alone says, in the language the reader of this app reads, with the little clipboard in front of it";
  let texts = {
    eng: " Copy sermon",
    urd: " واعظ کاپی کریں",
    tgl: " Kopyahin ang sermon",
    spa: " Copiar sermón",
    por: " Copiar sermão",
    translated_from: {
      urd: " Copy sermon",
      tgl: " Copy sermon",
      spa: " Copy sermon",
      por: " Copy sermon",
    },
  };
  let c = app_shared_text_reader_language_copy(texts);
  return c;
}
