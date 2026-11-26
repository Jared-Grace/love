import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_offline_reason_text() {
  "What keeping a bible on a device gets the reader, in the language the reader of this app reads, so the offer says why it is worth taking.";
  let texts = {
    eng: "A saved language opens with no internet, and it opens faster",
    urd: "محفوظ کی گئی زبان انٹرنیٹ کے بغیر کھلتی ہے، اور جلدی کھلتی ہے",
    tgl: "Ang naka-save na wika ay nabubuksan kahit walang internet, at mas mabilis itong mabuksan",
    spa: "Un idioma guardado se abre sin internet, y se abre más rápido",
    por: "Um idioma guardado abre sem internet, e abre mais rápido",
    ind: "Bahasa yang disimpan bisa dibuka tanpa internet, dan terbuka lebih cepat",
    fra: "Une langue enregistrée s'ouvre sans internet, et elle s'ouvre plus vite",
    translated_from: {
      urd: "A saved language opens with no internet, and it opens faster",
      tgl: "A saved language opens with no internet, and it opens faster",
      spa: "A saved language opens with no internet, and it opens faster",
      por: "A saved language opens with no internet, and it opens faster",
      ind: "A saved language opens with no internet, and it opens faster",
      fra: "A saved language opens with no internet, and it opens faster",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
