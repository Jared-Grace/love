import { app_shared_text_reader_language_copy } from "./app_shared_text_reader_language_copy.mjs";
export function html_button_copy_text() {
  "what the button that takes a copy of something says, in the language the reader of this app reads, with the little clipboard in front of it";
  let texts = {
    eng: " Copy",
    urd: " کاپی کریں",
    tgl: " Kopyahin",
    translated_from: {
      urd: " Copy",
      tgl: " Copy",
    },
  };
  let c = app_shared_text_reader_language_copy(texts);
  return c;
}
