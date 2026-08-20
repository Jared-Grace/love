import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_reason_text() {
  "What keeping a bible on a device gets the reader, in the language the reader of this app reads, so the offer says why it is worth taking.";
  let texts = {
    en: "A saved language opens with no internet, and it opens faster",
    ur: "محفوظ کی گئی زبان انٹرنیٹ کے بغیر کھلتی ہے، اور جلدی کھلتی ہے",
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
